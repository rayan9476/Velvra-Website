"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { highlightText } from "@/app/utils/highlightProducts";
import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";

const blogData = {
  1: {
    title: "2025 STYLE GUIDE: THE BIGGEST FALL TRENDS",
    date: "3 Days ago",
    author: "Velvra",
    tags: ["#Fashion", "#Trends"],
    coverImage:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    content: `Elegance is never an accident — it's the result of intentional choices. At Velvra, we believe every piece in your wardrobe should tell a story. This season, we're seeing a powerful shift toward timeless luxury mixed with modern minimalism.

The key to building a wardrobe that works for every occasion is investing in pieces that transcend seasons. Think structured coats, fluid silk blouses, and tailored trousers that carry you effortlessly from morning meetings to evening events.`,
    sliderImages: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    ],
    afterSliderContent: `This season at Velvra, we have curated pieces that embody quiet luxury — garments that speak through quality of fabric, precision of cut, and thoughtfulness of design. The neutral palette dominates, with ivory, camel, and deep charcoal leading the way.

From our latest collection, the draped midi dress and the structured blazer have already become signatures of the Velvra woman — someone who dresses with intention and lives with grace.`,
    highlights: [
      "draped midi dress",
      "structured blazer",
      "Velvra",
      "quiet luxury",
    ],
  },
  2: {
    title: "THE ART OF QUIET LUXURY: DRESSING WITH INTENTION",
    date: "5 Days ago",
    author: "Velvra",
    tags: ["#Style", "#Luxury"],
    coverImage:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    content: `Quiet luxury is not about showing off — it is about knowing. Knowing the difference between a well-cut coat and a cheaply made one. Knowing that the finest cashmere feels different the moment it touches your skin.

At Velvra, we have always believed that true elegance lies in the details. The weight of a fabric, the finish of a seam, the way a garment moves with your body — these are the things that matter.`,
    sliderImages: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=600&auto=format&fit=crop",
    ],
    afterSliderContent: `Building a wardrobe rooted in quiet luxury means choosing pieces that will remain relevant for years. It means resisting the pull of fast fashion and instead investing in garments that age beautifully — much like the women who wear them.

The Velvra woman understands that style is a practice, not a performance. And with every collection we design, we aim to support that practice.`,
  },
  highlights: [
    "fast fashion",
    "garments",
    "Velvra",
    "quiet luxury",
    "collection",
  ],
};

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData[id] || blogData[1];
  const [isActive, setisActive] = useState(null);

  const buttonRef = useRef(null);
  // Custom hook to handle outside click logic starts here
  useClickOutside(buttonRef, () => {
    setisActive(null);
  });
  // Custom hook to handle outside click logic ends here

  return (
    <section className="h-full  mt-[3.7rem]  lg:mt-[4.4rem] 2xl:mt-20 pb-8 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28 3xl:pb-32 font-[Tenor_Sans] font-normal">
      <div className="relative flex items-start justify-start w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] xl:h-[80vh] 3xl:h-[85vh] mb-6 md:mb-8 overflow-hidden ">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          fill
          className="object-cover object-top "
          priority
        />
      </div>

      <h1
        className="font-[Tenor_Sans] font-normal text-[#000000]
        text-[18px] md:text-[24px] lg:text-[28px] xl:text-[34px] 2xl:text-[38px] 3xl:text-[42px]
        leading-snug tracking-wide uppercase mb-4 md:mb-6 px-2.5 md:px-4 lg:px-5"
      >
        {blog.title}
      </h1>

      <p
        className="font-[Tenor_Sans] font-normal text-[#333333]
        text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px]
        leading-relaxed tracking-wide mb-8 md:mb-10 px-2.5 md:px-4 lg:px-5"
      >
        {blog.content}
      </p>

      <div className="just-for-you  relative mx-auto w-full mb-8 md:mb-10 px-2.5 md:px-4 lg:px-5">
        <Swiper
          slidesPerView="auto"
          spaceBetween={12}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `
              <span class="${className}">
                <span class="dot-inactive">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect x="4" y="0.353553" width="5.15685" height="5.15685"
                      transform="rotate(45 4 0.353553)"
                      stroke="#888888" stroke-width="0.5"/>
                  </svg>
                </span>
                <span class="dot-active">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <rect x="4" width="5.65685" height="5.65685"
                      transform="rotate(45 4 0)" fill="#888888"/>
                  </svg>
                </span>
              </span>
            `;
            },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="!pb-12 lg:!pb-16 2xl:!pb-20 3xl:!pb-24  "
          aria-label="Product carousel"
        >
          {blog.sliderImages.map((img, i) => (
            <SwiperSlide
              key={i}
              className="!flex !items-center !justify-center"
            >
              <div className="relative w-full  aspect-[3/4]  max-h-[450px] md:max-h-[600px] md:max-w-[550px]  lg:max-h-[600px]  2xl:max-h-[650px] 2xl:max-w-[600px] 3xl:max-h-[800px] ">
                <Image
                  src={img}
                  alt={`slide-${i}`}
                  fill
                  className="object-cover object-top w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <p
        className="font-[Tenor_Sans] font-normal text-[#333333]
                text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px]

        leading-relaxed tracking-wide mb-10 md:mb-12 px-2.5 md:px-4 lg:px-5"
      >
        {highlightText(blog.afterSliderContent, blog.highlights ?? [])}
      </p>

      <div className="flex items-center gap-2 mb-4 md:mb-6 px-2.5 md:px-4 lg:px-5">
        <span
          className="font-[Tenor_Sans] font-normal text-[#000000]
          text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
        >
          Posted by {blog.author}
        </span>
        <span className="text-[#AAAAAA]">|</span>
        <span
          className="font-[Tenor_Sans] font-normal text-[#333333]
            text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px]"
        >
          {blog.date}
        </span>
      </div>

      <div className="flex flex-wrap gap-3 md:gap-4 px-2.5 md:px-4 lg:px-5">
        {blog.tags.map((tag, i) => {
          const isactive = isActive === i;

          return (
            <button
              key={i}
              ref={buttonRef}
              onClick={() => setisActive(i)}
              className={`font-[Tenor_Sans] font-normal
                whitespace-nowrap
                px-5 md:px-6 lg:px-7
                py-2 md:py-2.5
                rounded-full
                text-[14px] md:text-[16px] lg:text-[18px]

              ${
                isactive
                  ? " bg-[#EDEDED] text-black border border-gray-300"
                  : "bg-transparent text-gray-500 border border-gray-300"
              }

            hover:bg-[#EDEDED] hover:text-black hover:border hover:border-gray-300
            transition-all duration-300 tracking-wide cursor-pointer`}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </section>
  );
}
