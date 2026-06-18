import { useState } from "react";
import Image from "next/image";

function Blog({ blogs, active }) {
  const [isWished, setIsWished] = useState({});

  // const filtered = blogs.filter((p) => p.category === active);
  const filtered = blogs.filter((p) => (p.category === active ? p : blogs));

  return (
    <article
      className="grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-5 lg:gap-6"
      aria-label="Blog posts grid"
    >
      {filtered.length > 0 ? (
        filtered.map((blog) => {
          const wished = isWished[blog.id];

          return (
            <div
              key={blog.id}
              aria-label={`Blog post: ${blog.title}`}
              className="group flex flex-col gap-4"
            >
              <div
                role="button"
                tabIndex={0}
                aria-label={`Open blog: ${blog.title}`}
                className="relative aspect-square overflow-hidden cursor-pointer"
              >
                <Image
                  src={blog.image}
                  alt="blog"
                  fill
                  className="w-full h-full object-cover object-top
            transition-transform duration-700 ease-in-out
            group-hover:scale-105 "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className="text-[14px] sm:text-[18px] md:text-[22px] leading-[1.4] tracking-[2px] uppercase">
                    {blog.title}
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsWished((prev) => ({
                      ...prev,
                      [blog.id]: !prev[blog.id],
                    }));
                  }}
                  className="absolute top-4 right-4 cursor-pointer
            
            hover:fill-white"
                  aria-label={
                    wished ? "Remove from wishlist" : "Add to wishlist"
                  }
                  aria-pressed={wished}
                >
                  <svg
                    className="
          md:h-[18px] md:w-[18px] lg:h-[20px] lg:w-[20px] xl:h-[22px] xl:w-[22px] 2xl:w-[24px]  2xl:h-[24px] 3xl:h-[28px] 3xl:w-[28px]
                "
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 10.0952L12.5 14.2618V0.5H0.5V14.2618L6.5 10.0952Z"
                      // stroke="#FCFCFC"
                      fill={wished ? "#FCFCFC" : "none"}
                      stroke={wished ? "#FCFCFC" : "#FCFCFC"}
                    />
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  {blog.tags.map((tag, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Filter by tag ${tag}`}
                      className={`
                font-[Tenor_Sans] font-normal
                whitespace-nowrap
                px-3 md:px-4 lg:px-5
                py-1 md:py-2.5
                rounded-full
                text-[12px]  lg:text-[14px]
                transition-all duration-300
                cursor-pointer 
bg-transparent text-gray-500 border border-gray-300
                hover:bg-[#EDEDED] hover:text-black hover:border hover:border-gray-300
                 
               
              `}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                <span className="text-gray-400 text-[12px] sm:text-[14px]">
                  {blog.publish_date}
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <div className="col-span-full text-center text-gray-400 py-10">
          No blogs found
        </div>
      )}
    </article>
  );
}

export default Blog;
