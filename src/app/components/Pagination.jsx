import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/features/ProductsSlice";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

function Pagination({ totalPages }) {
  const dispatch = useDispatch();

  const { page } = useSelector((state) => state.products);

  const searchParams = useSearchParams();
  const router = useRouter();

  const Page = searchParams.get("page");

  const handlePage = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    console.log("hhhhhh", page);
    router.push(`/products?${params.toString()}`);
  };

  useEffect(() => {
    if (!Page) return;

    console.log("the hrllow", Page);
    dispatch(setPage(Math.min(Page)));
  }, []);

  useEffect(() => {
    console.log("the hhhh", page);
  }, [page]);

  return (
    <>
      <div className="flex items-center justify-center gap-1 md:gap-2 lg:gap-2.5 mt-10 md:mt-14">
        <button
          // onClick={() => setPage((p) => Math.max(1, p - 1))}
          onClick={() => {
            dispatch(setPage(Math.max(1, page - 1)));

            handlePage(page - 1);
          }}
          disabled={page === 1}
          aria-label="Previous page"
          className="w-8 h-8 md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px]  xl:w-[20px] xl:h-[20px]  2xl:w-[22px] 2xl:h-[22px] 3xl:w-[24px] 3xl:h-[24px] flex items-center justify-center text-[#aaaaaa]
                hover:text-[#333333] disabled:opacity-30 transition-colors cursor-pointer"
        >
          <svg
            className="md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px]  xl:w-[20px] xl:h-[20px]  2xl:w-[22px] 2xl:h-[22px] 3xl:w-[24px] 3xl:h-[24px]"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 1L2 6L7 11"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map( */}
        {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => i + 1).map(
          (n) => (
            <button
              key={n}
              onClick={() => {
                dispatch(setPage(n));

                handlePage(n);
              }}
              aria-label={`Page ${n}`}
              aria-current={page === n ? "page" : undefined}
              className={`w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 2xl:w-13 2xl:h-13 3xl:w-14 3xl:h-14 flex items-center justify-center text-[12px] md:text-[14px] lg:text-[16px]  xl:text-[18px]  
                  tracking-wide transition-colors duration-200 cursor-pointer
                  ${
                    page === n
                      ? "bg-[#333333] text-white"
                      : "text-[#333333] hover:text-[#DD8560]"
                  }`}
            >
              {n}
            </button>
          ),
        )}

        <button
          onClick={() => {
            dispatch(setPage(Math.min(totalPages, page + 1)));

            handlePage(page + 1);
          }}
          aria-label="Next page"
          disabled={page === totalPages}
          className="w-8 h-8 md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px]  xl:w-[20px] xl:h-[20px]  2xl:w-[22px] 2xl:h-[22px] 3xl:w-[24px] 3xl:h-[24px] flex items-center justify-center text-[#aaaaaa]
                hover:text-[#333333] disabled:opacity-30 transition-colors cursor-pointer"
        >
          <svg
            className="md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px]  xl:w-[20px] xl:h-[20px]  2xl:w-[22px] 2xl:h-[22px] 3xl:w-[24px] 3xl:h-[24px]"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1L6 6L1 11"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Pagination;
