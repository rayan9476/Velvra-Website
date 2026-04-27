"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import DividerSVG from "../../components/DividerSVG";
import ProductCards from "../../components/ProductCards";
import ImageModal from "../../components/ImageModal";

const product = {
  brand: "VELVRA",
  name: "Luxury Boucle Knit Cardigan Black",
  price: 120,
  colors: ["#111111", "#C9A84C", "#9A9A9A"],
  sizes: ["S", "M", "L", "XL"],
  images: [
    "https://images.unsplash.com/photo-1548624313-0396a54c3b9d?w=800",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
  ],
  materials:
    "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. Each piece is crafted with the finest materials sourced ethically from trusted suppliers.",
  care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
  careIcons: [
    { icon: "✕", text: "Do not use bleach" },
    { icon: "◻", text: "Do not tumble dry" },
    { icon: "◇", text: "Dry clean with tetrachloroethylene" },
    { icon: "△", text: "Iron at a maximum of 110°C / 230°F" },
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

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#E0E0E0]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 md:py-5"
      >
        <div className="flex items-center gap-3">
          <span className="font-[Tenor_Sans] font-normal text-[#111111] text-[13px] md:text-[14px] lg:text-[15px] tracking-wide">
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
        <p className="font-[Tenor_Sans] font-normal text-[#777777] text-[13px] md:text-[14px] leading-relaxed">
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

  return (
    <>
      <div className=" px-2.5 md:px-4 lg:px-5  pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10  mt-[60px] lg:mt-[70px] 2xl:mt-[80px] 3xl:mt-[90px]">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:gap-12 xl:gap-16">
          {/* Image Slider */}
          <div className="just-for-you  w-full lg:w-[55%] xl:w-[50%]">
            <Swiper
              modules={[Pagination]}
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
              loop={true}
              className="product-swiper w-full"
            >
              {product.images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[420px] md:h-[560px] lg:h-[680px] xl:h-[750px] bg-[#F5F5F3]">
                    <Image
                      src={img}
                      alt={product.name}
                      fill
                      className="object-cover object-top"
                      priority={i === 0}
                    />
                    {/* Expand icon */}
                    <button
                      type="button"
                      onClick={() => setActiveImg(img)}
                      className="absolute bottom-4 right-4 w-9 h-9 bg-white/80 rounded-full flex items-center justify-center border border-[#E0E0E0] cursor-pointer"
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

          {/* Product Info */}
          <div className="w-full lg:w-[45%] xl:w-[50%] px-4 md:px-0 pt-5 md:pt-6 lg:pt-0">
            {/* Brand + Share */}
            <div className="flex items-center justify-between mb-1">
              <span className="font-[Tenor_Sans] font-normal text-[#111111] text-[13px] md:text-[14px] tracking-[3px] uppercase">
                {product.brand}
              </span>
              <button>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13"
                    stroke="#111"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Product Name */}
            <h1 className="font-[Tenor_Sans] font-normal text-[#111111] text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-snug mb-2">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-[Tenor_Sans] font-normal text-[#C9A84C] text-[18px] md:text-[20px] lg:text-[22px] mb-5 md:mb-6">
              ${product.price}
            </p>

            {/* Divider */}
            <DividerSVG className="w-[10rem]  lg:w-[12rem] xl:w-[14rem] 2xl:w-[16rem] 3xl:w-[18rem]" />

            {/* Color */}
            <div className="mb-5 md:mb-6">
              <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[13px] md:text-[14px] tracking-wide mb-3">
                Color
              </p>
              <div className="flex items-center gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-7 h-7 rounded-full transition-all duration-200 ${
                      selectedColor === color
                        ? "ring-2 ring-offset-2 ring-[#111111]"
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-6 md:mb-8">
              <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[13px] md:text-[14px] tracking-wide mb-3">
                Size
              </p>
              <div className="flex items-center gap-2 md:gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-9 h-9 md:w-10 md:h-10 font-[Tenor_Sans] text-[13px] md:text-[14px] border transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-[#111111] text-white border-[#111111]"
                        : "bg-white text-[#111111] border-[#DDDDDD] hover:border-[#111111]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Basket + Wishlist */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#333333] text-white font-[Tenor_Sans] font-normal text-[13px] md:text-[14px] tracking-[2px] uppercase h-12 md:h-14 transition-all duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Add to Basket
              </button>
              <button
                onClick={() => setWishlist(!wishlist)}
                className="w-12 h-12 md:w-14 md:h-14 border border-[#DDDDDD] hover:border-[#111111] flex items-center justify-center transition-all duration-300"
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

            {/* Materials */}
            <div className="mb-5 md:mb-6">
              <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[13px] md:text-[14px] tracking-[2px] uppercase mb-3">
                Materials
              </p>
              <p className="font-[Tenor_Sans] font-normal text-[#777777] text-[13px] md:text-[14px] leading-relaxed">
                {product.materials}
              </p>
            </div>

            {/* Care */}
            <div className="mb-5 md:mb-6">
              <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[13px] md:text-[14px] tracking-[2px] uppercase mb-3">
                Care
              </p>
              <p className="font-[Tenor_Sans] font-normal text-[#777777] text-[13px] md:text-[14px] leading-relaxed mb-4">
                {product.care}
              </p>
              <div className="flex flex-col gap-2">
                {product.careIcons.map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[#777777] text-[14px] w-5 text-center">
                      {c.icon}
                    </span>
                    <span className="font-[Tenor_Sans] font-normal text-[#777777] text-[13px] md:text-[14px]">
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
              title="🚚  Free Flat Rate Shipping"
              defaultOpen={true}
            >
              Estimated to be delivered on 09/11/2025 - 12/11/2025.
            </AccordionItem>
            <AccordionItem title="◇  COD Policy">
              Cash on delivery is available for all orders. Payment is collected
              upon delivery by our courier partner.
            </AccordionItem>
            <AccordionItem title="↩  Return Policy">
              We accept returns within 14 days of delivery. Items must be unworn
              and in original condition with tags attached.
            </AccordionItem>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="px-4 md:px-0 mt-14 md:mt-20 mb-12">
          <h2 className="flex flex-col items-center justify-center text-[24px] uppercase md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px] font-[Tenor_Sans] font-normal text-center text-[#0A0A0A] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px] mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 3xl:mb-20">
            You May Also Like
            <DividerSVG className="w-[7rem] md:w-[8rem] lg:w-[9rem] xl:w-[10rem] 2xl:w-[18rem]" />
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
