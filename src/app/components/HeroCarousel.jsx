"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect } from "react";
import { fetchCollections } from "@/app/lib/services";
import { useDispatch, useSelector } from "react-redux";
import {
  setSlides,
  setError,
  setLoading,
} from "../redux/features/HeroCarouselSlice";

// const slides = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1659522761084-79196b64abe4?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "New Collection",
//     subtitle: "Elegance Redefined.",
//     cta: "Shop Now",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1666635228066-b2638dbe6503?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Summer Edit",
//     subtitle: "Luxury in Every Thread.",
//     cta: "Explore Now",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1666635213698-0ea75f64e79c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Exclusive Pieces",
//     subtitle: "Dress Beyond Ordinary.",
//     cta: "Discover More",
//   },
// ];

export default function HeroCarousel() {
  const dispatch = useDispatch();

  const { slides, loading, error } = useSelector((state) => state.hero);

  useEffect(() => {
    const load = async () => {
      try {
        dispatch(setLoading());
        const collections = await fetchCollections();
        // Map collections to slides format
        const mapped = collections.map((c) => ({
          id: c.id,
          image: c.hero_image || c.image,
          title: c.title,
          subtitle: c.subtitle || "Elegance Redefined.",
          cta: "Shop Now",
          collectionId: c.id,
        }));

        dispatch(setSlides(mapped));
      } catch (err) {
        dispatch(
          setError(err.response?.data?.message || "Something went wrong"),
        );
      }
    };
    load();
  }, []);

  if (loading || slides.length === 0) return null;
  if (error) return <p>some thing went wrong</p>;

  return (
    <div
      className="hero-carousel    relative w-full"
      role="region"
      aria-label="Hero image carousel"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
        aria-roledescription="carousel"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} aria-label={`Slide ${slide.id}`}>
            <div className="relative  w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen overflow-hidden bg-[#0A0A0A]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center opacity-75"
                priority={slide.id === 1}
              />

              <div
                className="absolute pointer-events-none inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"
                aria-hidden="true"
              />

              <div className="content_container  absolute inset-0 flex flex-col sm:items-center text-center sm:w-full justify-center px-8 sm:px-12 md:px-20 lg:px-28">
                <div className="max-w-lg  ">
                  <span
                    className="inline-block text-[#C9A84C] text-xs sm:text-sm xl:text-lg 2xl:text-[22px] 3xl:text-2xl tracking-[4px] uppercase mb-3 sm:mb-4 3xl:mb-6"
                    aria-hidden="true"
                  >
                    Velvra Collection
                  </span>

                  <h1 className="font-integral text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-bold leading-tight mb-3 sm:mb-4 2xl:mb-6 ">
                    {slide.title}
                  </h1>

                  <p className="font-satoshi text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl mb-6 sm:mb-8 2xl:mb-10 3xl:mb-12 tracking-wide">
                    {slide.subtitle}
                  </p>

                  <button
                    className="font-satoshi bg-[#C9A84C] cursor-pointer hover:bg-[#b8963f] text-black text-sm sm:text-base xl:text-lg 2xl:text-2xl 3xl:text-3xl font-semibold px-6 sm:px-8 py-3 sm:py-4 3xl:py-6 tracking-widest uppercase transition-all duration-300 hover:scale-105"
                    aria-label={slide.cta}
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
