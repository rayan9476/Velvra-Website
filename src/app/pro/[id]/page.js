"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import DividerSVG from "@/app/components/DividerSVG";
import ProductCards from "@/app/components/ProductCards";
import ImageModal from "@/app/components/ImageModal";

const product = {
  brand: "VELVRA",
  name: "Luxury Boucle Knit Cardigan Black",
  price: 120,
  colors: ["#111111", "#C9A84C", "#9A9A9A"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
  ],
  materials:
    "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. Each piece is crafted with the finest materials sourced ethically from trusted suppliers.",
  care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
  careIcons: [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g opacity="0.5">
            <path
              d="M7.65101 11.4464L3.8407 18.5405H19.9806L11.9881 3.54681L8.73526 9.33982"
              stroke="black"
            />
            <path d="M3.77869 6.95447L21.8082 16.0002" stroke="black" />
          </g>
        </svg>
      ),
      text: "Do not use bleach",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <rect
              x="4.38623"
              y="4.48956"
              width="15"
              height="15"
              stroke="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.3549 16.3966L2.24756 7.38008L2.6933 6.48492L20.8006 15.5015L20.3549 16.3966Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.845 14.7508C14.1197 15.4898 13.1095 15.9481 11.9922 15.9481C9.78469 15.9481 7.99512 14.1586 7.99512 11.951C7.99512 11.7507 8.00985 11.5538 8.0383 11.3614L7.1064 10.8974C7.0335 11.2371 6.99512 11.5896 6.99512 11.951C6.99512 14.7109 9.2324 16.9481 11.9922 16.9481C13.5047 16.9481 14.8601 16.2763 15.7765 15.2147L14.845 14.7508ZM8.31483 10.382C8.92473 8.95439 10.3416 7.95392 11.9922 7.95392C14.1998 7.95392 15.9893 9.74349 15.9893 11.951C15.9893 12.6751 15.7968 13.3543 15.4601 13.94L16.3567 14.3865C16.7597 13.6659 16.9893 12.8353 16.9893 11.951C16.9893 9.1912 14.7521 6.95392 11.9922 6.95392C9.94954 6.95392 8.19312 8.17955 7.41823 9.93554L8.31483 10.382Z"
              fill="black"
            />
          </g>
        </svg>
      ),
      text: "Do not tumble dry",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M2.69629 5.23634L4.81603 19.2713H19.108L21.3883 4.78668"
              stroke="black"
            />
            <path
              d="M8.25888 6.65004C8.29179 7.72475 9.06165 9.87416 11.8778 9.87416C14.694 9.87416 15.6612 7.68087 15.7928 6.58423C16.0012 7.69183 17.4049 9.8873 20.4316 9.80834M3.37659 10.0942C4.01512 10.1514 5.46946 9.8998 6.17853 8.43593"
              stroke="black"
            />
            <path d="M3.19226 2.7464L20.4393 20.3469" stroke="black" />
          </g>
        </svg>
      ),
      text: "Dry clean with tetrachloroethylene",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M7.66513 6.05865H14.9542C16.4447 6.05865 19.5971 6.94068 20.2831 10.4688M20.2831 10.4688C20.9691 13.997 20.9773 17.0433 20.8956 18.1254H3.00989C3.1324 15.614 4.68824 10.5913 9.93146 10.5913C15.1747 10.5913 19.0172 10.5097 20.2831 10.4688Z"
              stroke="black"
            />
            <circle cx="12.7492" cy="14.2665" r="0.735026" fill="black" />
          </g>
        </svg>
      ),
      text: "Iron at a maximum of 110°C / 230°F",
    },
  ],
  relatedProducts: [
    {
      id: 1,
      brand: "VELVRA",
      name: "Reversible Angora Cardigan",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
    },
    {
      id: 2,
      brand: "VELVRA",
      name: "Wool Turtleneck Sweater",
      price: 145,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
    },
    {
      id: 3,
      brand: "VELVRA",
      name: "Cashmere Blend Coat",
      price: 280,
      image: "https://images.unsplash.com/photo-1548624313-0396a54c3b9d?w=400",
    },
    {
      id: 4,
      brand: "VELVRA",
      name: "Silk Draped Blouse",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400",
    },
  ],
};

const AccordionItem = ({ svg, title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#E0E0E0]">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 md:py-5 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <span className="font-[Tenor_Sans] font-normal text-[#111111]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px]  tracking-wide">
            {svg}
          </span>
          <span className="font-[Tenor_Sans] font-normal text-[#111111]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px]  tracking-wide">
            {title}
          </span>
        </div>
        <svg
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 9L12 16L5 9"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[200px] pb-4" : "max-h-0"}`}
      >
        <p className="font-[Tenor_Sans] font-normal text-[#777777]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px]  leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
};

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("S");
  const [wishlist, setWishlist] = useState(false);

  const [activeImg, setActiveImg] = useState(null);

  const swiperRef = useRef(null);
  useEffect(() => {
    if (!swiperRef.current) return;

    if (activeImg) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
  }, [activeImg]);
  return (
    <>
      <div className=" px-2.5 md:px-4 lg:px-5  pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10  mt-[60px] lg:mt-[70px] 2xl:mt-[80px] 3xl:mt-[90px]">
        <div className="flex flex-col lg:flex-row lg:gap-8 ">
          <div className="just-for-you  w-full lg:w-[55%] xl:w-[50%]">
            <Swiper
              ref={swiperRef}
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
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="product-swiper w-full"
            >
              {product.images.map((img, i) => (
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
                      onClick={() => setActiveImg(img)}
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
          </div>

          <div className="w-full lg:w-[45%] xl:w-[50%] px-4 md:px-0 pt-5 md:pt-6 lg:pt-0">
            <div className="flex items-center justify-between mb-1">
              <span className="font-[Tenor_Sans] font-normal text-[#C9A84C] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] tracking-[3px] uppercase">
                {product.brand}
              </span>
              <button>
                <svg
                  className="cursor-pointer md:h-[18px] md:w-[18px] lg:h-[20px] lg:w-[20px] xl:h-[22px] xl:w-[22px] 2xl:text-[24px] 2xl:text-[24px]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3333 4.00906L7.66659 0.67573L3.99992 4.00906"
                    stroke="#333333"
                  />
                  <line
                    y1="-0.5"
                    x2="8.66667"
                    y2="-0.5"
                    transform="matrix(0 1 1 0 8 0.675732)"
                    stroke="#333333"
                  />
                  <path
                    d="M2 8.00906V14.6757H13.3333V8.00906"
                    stroke="#333333"
                  />
                </svg>
              </button>
            </div>

            <h1 className="font-[Tenor_Sans] font-normal text-[#111111] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[30px] leading-snug mb-2">
              {product.name}
            </h1>

            <p className="font-[Tenor_Sans] font-normal text-[#DD8560] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] 3xl:text-[28px] mb-5 md:mb-6">
              ${product.price}
            </p>

            {/* Divider */}
            <div className="h-[1px] bg-[#E0E0E0] mb-5 md:mb-6" />

            <div className="mb-5 md:mb-6">
              <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[13px] md:text-[14px] tracking-wide mb-3">
                Color
              </p>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-7 h-7 rounded-full transition-all duration-200 cursor-pointer ${
                      selectedColor === color
                        ? "ring-2 ring-offset-2 ring-black/30"
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="mb-6 md:mb-8">
              <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[13px] md:text-[14px] tracking-wide mb-3">
                Size
              </p>
              <div className="flex items-center gap-2 md:gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-9 h-9 md:w-10 md:h-10 font-[Tenor_Sans] cursor-pointer text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[16px] rounded-full  border transition-colors duration-300 ${
                      selectedSize === size
                        ? "bg-[#111111] text-white border-[#111111]"
                        : "bg-white text-[#111111] border-[#DDDDDD] hover:bg-black hover:text-white "
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <button className="flex-1 flex items-center justify-center gap-2 cursor-pointer bg-[#111111] hover:bg-[#DD8560]   text-white font-[Tenor_Sans] font-normal text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] tracking-[2px] uppercase h-12 md:h-14 transition-colors duration-300">
                <svg
                  className="md:h-[22px] md:w-[22px] lg:h-[24px] lg:w-[24px] xl:h-[26px] xl:w-[26px] 2xl:text-[28px] 2xl:text-[28px]"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2.5V17.5" stroke="#FCFCFC" />
                  <path d="M2.5 10L17.5 10" stroke="#FCFCFC" />
                </svg>
                Add to Basket
              </button>
              <button
                onClick={() => setWishlist(!wishlist)}
                className={`w-12 h-12 md:w-14 md:h-14 cursor-pointer border border-[#DDDDDD] hover:bg-gray-300 ${wishlist ? "bg-gray-300" : "bg-white"}  flex items-center justify-center transition-all duration-300`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill={wishlist ? "#C9A84C" : "none"}
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    stroke={wishlist ? "#C9A84C" : "#111"}
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#E0E0E0] mb-5 md:mb-6" />

            <div className="mb-5 md:mb-6">
              <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px]  tracking-[2px] uppercase mb-3">
                Materials
              </p>
              <p className="font-[Tenor_Sans] font-normal text-[#777777]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px]  leading-relaxed">
                {product.materials}
              </p>
            </div>

            <div className="mb-5 md:mb-6">
              <p className="font-[Tenor_Sans] font-normal text-[#111111]  text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px]  tracking-[2px] uppercase mb-3">
                Care
              </p>
              <p className="font-[Tenor_Sans] font-normal text-[#777777]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] leading-relaxed mb-4">
                {product.care}
              </p>
              <div className="flex flex-col gap-2">
                {product.careIcons.map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[#777777] text-[14px] w-5 text-center">
                      {c.icon}
                    </span>
                    <span className="font-[Tenor_Sans] font-normal text-[#777777]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] ">
                      {c.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-[#E0E0E0]" />

            {/* Accordion */}
            <AccordionItem
              svg={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5654 6.87109H18.0525L22.4874 11.2538V17.9844H20.4914"
                    stroke="black"
                  />
                  <path d="M8.55664 18.0889H15.2872" stroke="black" />
                  <circle cx="17.9482" cy="17.9843" r="2.4218" stroke="black" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.05217 19.9061C7.11356 19.9061 7.97398 19.0457 7.97398 17.9843C7.97398 16.9229 7.11356 16.0625 6.05217 16.0625C4.99079 16.0625 4.13037 16.9229 4.13037 17.9843C4.13037 19.0457 4.99079 19.9061 6.05217 19.9061ZM6.05217 20.9061C7.66584 20.9061 8.97398 19.598 8.97398 17.9843C8.97398 16.3706 7.66584 15.0625 6.05217 15.0625C4.43851 15.0625 3.13037 16.3706 3.13037 17.9843C3.13037 19.598 4.43851 20.9061 6.05217 20.9061Z"
                    fill="black"
                  />
                  <path
                    d="M1.49817 18.4932L1.49818 3.50098L13.501 3.52347V17.9844H8.4523"
                    stroke="black"
                  />
                  <path d="M1.19995 17.9844H3.70435" stroke="black" />
                </svg>
              }
              title="Free Flat Rate Shipping"
              defaultOpen={true}
            >
              Estimated to be delivered on 09/11/2025 - 12/11/2025.
            </AccordionItem>
            <AccordionItem
              svg={
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M10.446 1.01811L20.2367 10.8088L10.8087 20.2369L1.01794 10.4462L1.38056 1.38073L10.446 1.01811Z"
                      stroke="black"
                    />
                    <circle
                      cx="6.7839"
                      cy="6.2972"
                      r="0.833333"
                      stroke="black"
                    />
                  </g>
                </svg>
              }
              title="  COD Policy"
            >
              Cash on delivery is available for all orders. Payment is collected
              upon delivery by our courier partner.
            </AccordionItem>
            <AccordionItem
              svg={
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      d="M3.21031 7.84086C3.66628 6.2507 4.61396 4.84572 5.91751 3.82727C7.22107 2.80882 8.81359 2.22919 10.4668 2.17146C12.12 2.11373 13.7491 2.58086 15.1205 3.50589C16.492 4.43093 17.5353 5.76639 18.1011 7.32086"
                      stroke="black"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.9573 13.0452C17.3681 14.4418 16.3863 15.6374 15.131 16.487C13.8757 17.3367 12.4008 17.8039 10.8853 17.832C9.36974 17.8601 7.8786 17.4478 6.59269 16.6453C5.30678 15.8427 4.28135 14.6843 3.64074 13.3105"
                      stroke="black"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.16769 12.5202L3.45591 12.7632L2.07752 16.294"
                      stroke="black"
                    />
                    <path
                      d="M14.229 7.80029L18.0837 7.79082L19.3998 4.28137"
                      stroke="black"
                    />
                  </g>
                </svg>
              }
              title="  Return Policy"
            >
              We accept returns within 14 days of delivery. Items must be unworn
              and in original condition with tags attached.
            </AccordionItem>
          </div>
        </div>

        <div className="px-4 md:px-0 mt-14 md:mt-20 mb-12">
          <h2 className="flex flex-col items-center justify-center text-[24px] uppercase md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px] font-[Tenor_Sans] font-normal text-center text-[#0A0A0A] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px] mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 3xl:mb-20">
            You May Also Like
            <DividerSVG className="w-[10rem]  lg:w-[12rem] xl:w-[14rem] 2xl:w-[16rem] 3xl:w-[18rem]" />
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
            {product.relatedProducts.map((item) => (
              <ProductCards {...item} />
            ))}
          </div>
        </div>
      </div>

      {activeImg && (
        <ImageModal img={activeImg} onClose={() => setActiveImg(null)} />
      )}
    </>
  );
}
