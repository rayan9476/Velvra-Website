"use client";
import { useRef, useEffect } from "react";
import CategoryTabs from "./CategoryTabs";
import Blog from "./Blog";
import useClickOutside from "../hooks/useClickOutside";
import SectionHeading from "./SectionHeading";
import { fetchBlogs } from "@/app/lib/services";
import { FiCheck } from "react-icons/fi";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  setBlogsData,
  setOffset,
  setHasMore,
  setError,
  setLoading,
  setLoadMore,
  setActive,
} from "../redux/features/blogsSlice";

// const blogs = [
//   {
//     id: 1,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Fashion",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },
//   {
//     id: 2,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Promo",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },
//   {
//     id: 3,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Lookbook",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },
//   {
//     id: 4,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Sale",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },
//   {
//     id: 5,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Trends",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },
//   {
//     id: 6,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Accessories",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },

//   {
//     id: 7,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Policy",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },
//   {
//     id: 8,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Fashion",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },
//   {
//     id: 9,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Promo",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },
//   {
//     id: 10,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Lookbook",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },
//   {
//     id: 11,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Sale",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },
//   {
//     id: 12,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Trends",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },
//   {
//     id: 13,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Accessories",
//     date: " 4 days ago",
//     tags: ["#Fashion", "#Types"],
//   },

//   {
//     id: 14,
//     img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
//     title: "2021 STYLE GUIDE: THE BIGGEST FALL TRENDS",
//     category: "Policy",
//     date: " 4 days ago",
//     tags: ["#Policy", "#Types"],
//   },
// ];

export default function BlogSection() {
  const dispatch = useDispatch();

  const router = useRouter();
  const searchParams = useSearchParams();

  const { blogsdata, offset, hasMore, loadMore, active, loading, error } =
    useSelector((state) => state.blogs);

  const buttonRef = useRef(null);

  // Custom hook to handle outside click logic starts here
  useClickOutside(buttonRef, () => {
    if (loadMore) setLoadMore(!loadMore);
  });
  // Custom hook to handle outside click logic ends here

  useEffect(() => {
    const offsetFromUrl = Number(searchParams.get("offset") + 4) || 0;

    const loadBlogs = async () => {
      try {
        dispatch(setLoading());
        const totalblogs = await fetchBlogs(14, 0);
        const blogs = await fetchBlogs(offsetFromUrl, 0);

        dispatch(setBlogsData(blogs));
        dispatch(setOffset(offsetFromUrl));
        dispatch(setHasMore(blogs.length < totalblogs.length));
      } catch (err) {
        dispatch(
          setError(err.response?.data?.message || "Something went wrong"),
        );
      }
    };
    loadBlogs();
  }, []);

  async function LoadMore() {
    const newBlogs = await fetchBlogs(4, offset);

    if (newBlogs.length < 4) {
      dispatch(setHasMore(false));
    }

    const newOffset = offset + newBlogs.length;

    dispatch(setBlogsData([...blogsdata, ...newBlogs]));

    dispatch(setOffset(newOffset));

    router.replace(`?offset=${newOffset}`);
  }

  if (loading) return <p>...loading</p>;
  if (error) return <p>...error</p>;

  return (
    <section
      aria-labelledby="blog-section-heading"
      role="region"
      className="h-full px-2.5 md:px-4 lg:px-5  pb-8 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28 3xl:pb-32  pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10 font-[Tenor_Sans] font-normal"
    >
      <SectionHeading title={"Blog"} id={"blog-section-heading"} />

      <CategoryTabs active={active} setActive={setActive} />

      <Blog blogs={blogsdata} active={active} />

      <div className="w-full flex items-center justify-center pt-8 md:pt-12 lg:pt-16 xl:pt-20 2xl:pt-24 3xl:pt-28">
        {!hasMore ? (
          <button
            type="button"
            aria-label="No more blogs to load"
            className={`
       flex items-center justify-between gap-[0.5rem] md:gap-[0.7rem] lg:gap-[0.9rem] xl:gap-[1.1rem] 2xl:gap-[1.3rem] 3xl:gap-[1.5rem]
      bg-transparent text-black border border-gray-300
        px-4 md:px-6 lg:px-8
        py-3 md:py-4 lg:py-5
        font-[Tenor_Sans] font-normal
        text-[16px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[38px]
        tracking-wide
        transition-all duration-300 cursor-pointer
              "bg-transparent text-black border border-gray-300"         
                      hover:bg-[#EDEDED] hover:text-gray-500 hover:border hover:border-gray-300
 
      `}
          >
            <span> No more blogs to load</span>
            <FiCheck />
          </button>
        ) : (
          <button
            ref={buttonRef}
            type="button"
            aria-label={
              loadMore ? "Collapse blog list" : "Load more blog posts"
            }
            aria-expanded={loadMore}
            onClick={() => {
              dispatch(setLoadMore(!loadMore));
              LoadMore();
            }}
            className={`
       flex items-center justify-between gap-[0.5rem] md:gap-[0.7rem] lg:gap-[0.9rem] xl:gap-[1.1rem] 2xl:gap-[1.3rem] 3xl:gap-[1.5rem]
      bg-transparent text-black border border-gray-300
        px-4 md:px-6 lg:px-8
        py-3 md:py-4 lg:py-5
        font-[Tenor_Sans] font-normal
        text-[16px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[38px]
        tracking-wide
        transition-all duration-300 cursor-pointer

          ${
            loadMore
              ? " bg-[#EDEDED] text-gray-500 border border-gray-300"
              : "bg-transparent text-black border border-gray-300"
          }

                      hover:bg-[#EDEDED] hover:text-gray-500 hover:border hover:border-gray-300
 
      `}
          >
            <span>Load more</span>
            <svg
              className="md:h-[28px]  md:w-[28px] lg:h-[32px] lg:w-[32px] xl:h-[36px] xl:w-[36px] 2xl:h-[40px] 2xl:w-[40px] 3xl:h-[44px] 3xl:w-[44px]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 3V21" stroke={loadMore ? "#6B7280" : "#333333"} />
              <path d="M3 12L21 12" stroke={loadMore ? "#6B7280" : "#333333"} />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
