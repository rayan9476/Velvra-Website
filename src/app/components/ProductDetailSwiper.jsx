import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { useDispatch } from "react-redux";
import { setActiveImg } from "../redux/features/ProductDetailSlice";

function ProductDetailSwiper({ product, swiperRef }) {
  const dispatch = useDispatch();

  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `
                <span className="${className}">
                  <span className="dot-inactive">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <rect x="4" y="0.353553" width="5.15685" height="5.15685"
                        transform="rotate(45 4 0.353553)"
                        stroke="#888888" strokeWidth="0.5"/>
                    </svg>
                  </span>
                  <span className="dot-active">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <rect x="4" width="5.65685" height="5.65685"
                        transform="rotate(45 4 0)" fill="#888888"/>
                    </svg>
                  </span>
                </span>
              `;
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="product-swiper w-full"
      >
        {product?.images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full aspect-[3/4] bg-[#F5F5F3]">
              <Image
                src={img}
                alt={product.name}
                fill
                className="object-cover object-top"
                priority={i === 0}
              />

              <button
                type="button"
                onClick={() => dispatch(setActiveImg(img))}
                className="absolute bottom-4 right-4 w-9 h-9 bg-black/40 rounded-full flex items-center justify-center  cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0874 3.64563L20.3618 3.64563L20.3618 10.9365"
                    stroke="#FCFCFC"
                  />
                  <line
                    y1="-0.5"
                    x2="10.1647"
                    y2="-0.5"
                    transform="matrix(-0.70631 0.707903 -0.70631 -0.707903 19.822 3.43253)"
                    stroke="#FCFCFC"
                  />
                  <path
                    d="M10.9116 20.355L3.63719 20.355L3.63719 13.0641"
                    stroke="#FCFCFC"
                  />
                  <line
                    y1="-0.5"
                    x2="10.1647"
                    y2="-0.5"
                    transform="matrix(0.70631 -0.707903 0.70631 0.707903 4.22778 20.4272)"
                    stroke="#FCFCFC"
                  />
                </svg>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ProductDetailSwiper;
