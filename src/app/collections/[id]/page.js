"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import CollectionHeader from "@/app/components/CollectionHeader";

const collectionsData = {
  1: {
    title: "October",
    subtitle: "COLLECTION",
    accentNumber: "10",
    heroImage:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=90",
    products: [
      {
        id: 1,
        name: "Silk Draped Midi Dress",
        brand: "VELVRA",
        price: 180,
        oldPrice: 220,
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      },
      {
        id: 2,
        name: "Leather Combat Boots",
        brand: "VELVRA",
        price: 245,
        oldPrice: 300,
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
      },
      {
        id: 3,
        name: "Gold Ring Set",
        brand: "VELVRA",
        price: 85,
        oldPrice: 110,
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
      },
      {
        id: 4,
        name: "Pearl Drop Earrings",
        brand: "VELVRA",
        price: 95,
        oldPrice: 120,
        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      },
      {
        id: 5,
        name: "Gold Bangle Bracelet",
        brand: "VELVRA",
        price: 120,
        oldPrice: 150,
        image:
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
      },
      {
        id: 6,
        name: "Diamond Tennis Bracelet",
        brand: "VELVRA",
        price: 340,
        oldPrice: 420,
        image:
          "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80",
      },
    ],
    relatedCollections: [
      {
        id: 2,
        title: "BLACK COLLECTION",
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      },
      {
        id: 3,
        title: "HAE BY VELVRA",
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      },
    ],
  },
  2: {
    title: "Black",
    subtitle: "COLLECTION",
    accentNumber: "02",
    heroImage:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=90",
    products: [
      {
        id: 1,
        name: "Black Velvet Gown",
        brand: "VELVRA",
        price: 320,
        oldPrice: 400,
        image:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      },
      {
        id: 2,
        name: "Structured Blazer",
        brand: "VELVRA",
        price: 195,
        oldPrice: 240,
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      },
      {
        id: 3,
        name: "Black Leather Clutch",
        brand: "VELVRA",
        price: 145,
        oldPrice: 180,
        image:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      },
      {
        id: 4,
        name: "Onyx Drop Earrings",
        brand: "VELVRA",
        price: 110,
        oldPrice: 140,
        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      },
      {
        id: 5,
        name: "Black Ankle Boots",
        brand: "VELVRA",
        price: 265,
        oldPrice: 320,
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
      },
      {
        id: 6,
        name: "Silk Slip Dress",
        brand: "VELVRA",
        price: 175,
        oldPrice: 220,
        image:
          "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80",
      },
    ],
    relatedCollections: [
      {
        id: 1,
        title: "OCTOBER COLLECTION",
        image:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      },
      {
        id: 3,
        title: "HAE BY VELVRA",
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      },
    ],
  },
  3: {
    title: "Hae",
    subtitle: "BY VELVRA",
    accentNumber: "03",
    heroImage:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=90",
    products: [
      {
        id: 1,
        name: "Ivory Wrap Dress",
        brand: "VELVRA",
        price: 210,
        oldPrice: 260,
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
      },
      {
        id: 2,
        name: "Camel Wool Coat",
        brand: "VELVRA",
        price: 380,
        oldPrice: 460,
        image:
          "https://images.unsplash.com/photo-1548624313-0396a54c3b9d?w=600&q=80",
      },
      {
        id: 3,
        name: "Gold Chain Necklace",
        brand: "VELVRA",
        price: 130,
        oldPrice: 160,
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
      },
      {
        id: 4,
        name: "Suede Shoulder Bag",
        brand: "VELVRA",
        price: 295,
        oldPrice: 360,
        image:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      },
      {
        id: 5,
        name: "Cashmere Turtleneck",
        brand: "VELVRA",
        price: 165,
        oldPrice: 200,
        image:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
      },
      {
        id: 6,
        name: "Nude Strappy Heels",
        brand: "VELVRA",
        price: 185,
        oldPrice: 230,
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
      },
    ],
    relatedCollections: [
      {
        id: 1,
        title: "OCTOBER COLLECTION",
        image:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      },
      {
        id: 2,
        title: "BLACK COLLECTION",
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      },
    ],
  },
};

function FadeIn({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function CollectionDetail() {
  const { id } = useParams();
  const collection = collectionsData[id] || collectionsData[1];
  const [wishlist, setWishlist] = useState({});

  const toggleWishlist = (productId) => {
    setWishlist((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen px-2.5 md:px-4 lg:px-5  pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10  mt-[60px] lg:mt-[70px] 2xl:mt-[80px] 3xl:mt-[90px]">
      <div className="w-full">
        {/* Header */}
        {/* <div className="text-center pt-8 md:pt-12 pb-4 md:pb-6 px-4">
          <h1
            className="font-[Tenor_Sans] italic leading-none mb-1"
            style={{
              color: "#F5F0E8",
              fontSize: "clamp(52px, 14vw, 110px)",
              letterSpacing: "-1px",
            }}
          >
            {collection.title}
          </h1>
          <p
            className="font-[Tenor_Sans] font-normal tracking-[6px] uppercase"
            style={{ color: "#666666", fontSize: "clamp(10px, 2vw, 13px)" }}
          >
            {collection.subtitle}
          </p>
        </div> */}

        <CollectionHeader title={"Velvra"} subtitle={"Collection"} />

        {/* Hero Image */}
        <FadeIn>
          <div
            className="relative w-full overflow-hidden"
            style={{ height: "clamp(340px, 75vw, 680px)" }}
          >
            <Image
              src={collection.heroImage}
              alt={collection.title}
              fill
              className="object-cover object-top grayscale"
              priority
            />
            {collection.accentNumber && (
              <div
                className="absolute bottom-[-15px] right-[-5px] font-[Tenor_Sans] font-normal text-white/10 select-none pointer-events-none leading-none"
                style={{ fontSize: "clamp(100px, 22vw, 220px)" }}
              >
                {collection.accentNumber}
              </div>
            )}
          </div>
        </FadeIn>

        {/* Divider */}
        <div className="h-[1px] bg-[#2A2A2A] mx-4 my-6 md:my-8" />

        {/* Products Grid */}
        <div className="px-3 md:px-4">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {collection.products.map((product, index) => (
              <FadeIn key={product.id} delay={index * 80}>
                <Link href={`/product/${product.id}`}>
                  <div className="group cursor-pointer">
                    {/* Image */}
                    <div
                      className="relative w-full overflow-hidden bg-[#1A1A1A]"
                      style={{ height: "clamp(180px, 45vw, 360px)" }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        sizes="(max-width: 768px) 50vw, 40vw"
                      />

                      {/* Wishlist */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(product.id);
                        }}
                        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center z-10"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill={wishlist[product.id] ? "#DD8560" : "none"}
                        >
                          <path
                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                            stroke={
                              wishlist[product.id] ? "#DD8560" : "#DD8560"
                            }
                            strokeWidth="1.5"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Info */}
                    <div className="pt-3 pb-4">
                      <p className="font-[Tenor_Sans] text-[#555555] text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-normal tracking-[2px] uppercase mb-1">
                        {product.brand}
                      </p>
                      <p className="font-[Tenor_Sans] text-[#CCCCCC] group-hover:text-[#DD8560] transition-all duration-500 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-normal leading-snug mb-1">
                        {product.name}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="font-[Tenor_Sans] text-[#C9A84C] text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-normal">
                          ${product.price}
                        </span>
                        <span className="font-[Tenor_Sans] text-[#444444] text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-normal line-through">
                          ${product.oldPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* You May Also Like */}
        <div className="px-4 mt-14 md:mt-20">
          <FadeIn>
            <div className="flex flex-col items-center mb-8 md:mb-10">
              <h2
                className="font-[Tenor_Sans] font-normal tracking-[5px] uppercase text-center"
                style={{ color: "#F5F0E8", fontSize: "clamp(13px, 3vw, 18px)" }}
              >
                You May Also Like
              </h2>
              {/* Decorative line + diamond */}
              <div className="flex items-center gap-2 mt-3">
                <div className="h-[1px] w-12 bg-[#333333]" />
                <div
                  className="w-2 h-2 rotate-45"
                  style={{ backgroundColor: "#C9A84C" }}
                />
                <div className="h-[1px] w-12 bg-[#333333]" />
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {collection.relatedCollections.map((related, index) => (
              <FadeIn key={related.id} delay={index * 100}>
                <Link href={`/collections/${related.id}`}>
                  <div className="group cursor-pointer">
                    <div
                      className="relative w-full overflow-hidden bg-[#1A1A1A]"
                      style={{ height: "clamp(220px, 55vw, 440px)" }}
                    >
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        sizes="(max-width: 768px) 50vw, 40vw"
                      />
                    </div>
                    <p className="font-[Tenor_Sans] text-[#CCCCCC] group-hover:text-[#DD8560] transition-all duration-500 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-normal tracking-[2px] uppercase pt-3 pb-6">
                      {related.title}
                    </p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom padding */}
        <div className="pb-16 md:pb-24" />
      </div>
    </div>
  );
}
