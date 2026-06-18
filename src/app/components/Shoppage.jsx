"use client";
import { useEffect } from "react";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Sorting from "./Sorting";
import FilterChip from "./FilterChip";
import { fetchProducts } from "@/app/lib/services";
import { useRouter } from "next/navigation";
import { Skeleton } from "boneyard-js/react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setError,
  setLoading,
  setSort,
} from "../redux/features/ProductsSlice";
import { useSearchParams, usePathname } from "next/navigation";
import { SORT_OPTIONS } from "../data/ProductsData";

const PER_PAGE = 10;

export default function ShopPage({
  defaultGender,
  setdefaultGender,
  defaultCategory,
  setdefaultCategory,
  defaultSubcategory,
  setdefaultSubcategory,
}) {
  const dispatch = useDispatch();

  const { sort, page, gridCols, products, isLoading, error } = useSelector(
    (state) => state.products,
  );

  const searchParams = useSearchParams();
  const sorting = searchParams.get("sort");

  useEffect(() => {
    if (!sorting) return;

    dispatch(setSort(sorting));
  }, [sorting, dispatch]);

  // filtering

  const filtered = products.filter((p) => {
    const gMatch = !defaultGender || p.gender === defaultGender;
    const cMatch =
      defaultCategory === "All apparel" || p.category === defaultCategory;
    const sMatch = !defaultSubcategory || p.subcategory === defaultSubcategory;
    return gMatch && cMatch && sMatch;
  });

  // sorting
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "Price: Low") return a.price - b.price || a.id - b.id;
    if (sort === "Price: High") return b.price - a.price || a.id - b.id;
    if (sort === "Popular")
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || a.id - b.id;
    return a.id - b.id;
  });

  // pagination
  const totalPages = Math.ceil(sorted.length / PER_PAGE);
  const paginated = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const router = useRouter();

  const handlePriceFilter = (sort) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", sort);

    router.push(`/products?${params.toString()}`);
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        const mapped = products.map((p) => ({
          ...p,
          gender:
            p.category === "Women"
              ? "Women"
              : p.category === "Men"
                ? "Men"
                : p.category === "Kids"
                  ? "Kids"
                  : "Women", // default accessories/shoes/beauty to Women
        }));

        dispatch(setProducts(mapped));
      } catch (err) {
        setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const pathname = usePathname();

  const removeParam = (key) => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete(key);

    router.push(`${pathname}?${params.toString()}`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Skeleton name="main-div" loading={isLoading} error={error}>
      <div
        role="main"
        aria-label="Apparel products page"
        className="w-full  font-[Tenor_Sans] font-normal min-h-screen mt-[60px] lg:mt-[70px] 2xl:mt-[80px] 3xl:mt-[90px] bg-white"
      >
        <section className="px-2.5 md:px-4 lg:px-5  pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10 pb-12">
          <header className="flex items-center justify-between mb-3 md:mb-4 ">
            <span
              aria-label={`${sorted.length} apparel products`}
              className="  text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] text-[#333333] tracking-[2px] uppercase"
            >
              {sorted.length} Apparel
            </span>

            <Sorting
              SORT_OPTIONS={SORT_OPTIONS}
              handlePriceFilter={handlePriceFilter}
            />
          </header>

          <section
            className="flex flex-wrap gap-2 mb-4 md:mb-5  lg:mb-6  "
            aria-label="Active filters"
          >
            {defaultGender !== "" && (
              <FilterChip
                label={defaultGender}
                onRemove={() => {
                  setdefaultGender("");
                  removeParam("gender");
                }}
                isTrue={true}
              />
            )}

            {defaultCategory !== "All apparel" && (
              <FilterChip
                label={defaultCategory}
                onRemove={() => {
                  setdefaultCategory("All apparel");
                  removeParam("category");
                }}
                isTrue={true}
              />
            )}

            {defaultCategory === "All apparel" && (
              <FilterChip
                label="All apparel"
                onRemove={() => {
                  setdefaultCategory("All apparel");

                  removeParam("category");
                }}
              />
            )}

            {defaultSubcategory !== "" && (
              <FilterChip
                label={defaultSubcategory}
                onRemove={() => {
                  setdefaultSubcategory("");
                  removeParam("subcategory");
                }}
              />
            )}
          </section>

          {paginated.length > 0 ? (
            <section
              className={`grid gap-x-3 gap-y-6 md:gap-x-4 md:gap-y-8
            ${
              gridCols === 2
                ? "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            }`}
              aria-label="Products grid"
            >
              {paginated.map((p) => (
                <ProductCards key={p.id} {...p} />
              ))}
            </section>
          ) : (
            <section
              role="status"
              aria-live="polite"
              className="flex items-center justify-center py-24"
            >
              <p className="text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] text-[#888888] tracking-wide">
                No products found.
              </p>
            </section>
          )}

          {totalPages > 1 && <Pagination totalPages={totalPages} />}
        </section>
      </div>
    </Skeleton>
  );
}
