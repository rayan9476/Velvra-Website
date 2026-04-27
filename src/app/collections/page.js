"use client";
import { useEffect, useState } from "react";
import { Bodoni_Moda } from "next/font/google";
import CollectionItem from "../components/CollectionItem";
import CollectionHeader from "../components/CollectionHeader";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
});

const collections = [
  {
    number: "01",
    title: "OCTOBER COLLECTION",
    image: "/image/We_See_Project_featuredimage_opto.webp.webp",
    accent: "October",
    accentNumber: (
      <svg
        className="md:w-[300px] md:h-[300px]  lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 3xl:w-[600px] 3xl:h-[600px]"
        width="174"
        height="126"
        viewBox="0 0 174 126"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d="M17.7347 123.655L44.9875 2.84732H26.1139V1.62703H75.0877L47.4281 123.655H17.7347ZM0 123.655V122.434H65.5695V123.655H0Z"
            fill="#343434"
          />
          <path
            d="M108.581 125.282C100.826 125.282 94.155 123.465 88.5688 119.831C82.9827 116.197 78.671 111.452 75.6339 105.595C72.5968 99.683 71.0782 93.3105 71.0782 86.4769C71.0782 77.0944 72.2443 68.1185 74.5763 59.5495C76.9627 50.9262 80.2167 43.008 84.3385 35.7948C88.5146 28.5274 93.3415 22.2362 98.8192 16.9212C104.351 11.552 110.29 7.40302 116.635 4.47435C122.981 1.49145 129.516 0 136.241 0C143.942 0 150.586 1.81686 156.172 5.45057C161.813 9.03005 166.124 13.7756 169.107 19.6871C172.144 25.5987 173.663 31.9713 173.663 38.8048C173.663 48.1874 172.497 57.1903 170.165 65.8136C167.833 74.3826 164.579 82.3009 160.402 89.5683C156.226 96.7815 151.372 103.073 145.84 108.442C140.363 113.757 134.451 117.906 128.106 120.889C121.76 123.817 115.252 125.282 108.581 125.282ZM108.581 124.143C111.456 124.143 114.249 122.706 116.961 119.831C119.672 116.957 122.276 113.079 124.77 108.198C127.265 103.263 129.57 97.7035 131.685 91.5207C133.855 85.338 135.807 78.9112 137.543 72.2404C139.278 65.5695 140.742 59.0071 141.936 52.5532C143.183 46.0993 144.132 40.1607 144.783 34.7372C145.488 29.2595 145.84 24.7309 145.84 21.1515C145.84 18.277 145.705 15.6467 145.434 13.2603C145.217 10.8198 144.756 8.70464 144.051 6.9149C143.4 5.07093 142.424 3.66083 141.122 2.68461C139.875 1.65416 138.248 1.13893 136.241 1.13893C133.312 1.13893 130.492 2.54903 127.78 5.36922C125.069 8.13518 122.465 11.9316 119.971 16.7585C117.476 21.5311 115.144 26.9546 112.974 33.0288C110.859 39.1031 108.934 45.4485 107.198 52.0651C105.463 58.6817 103.971 65.2441 102.724 71.7523C101.531 78.2062 100.582 84.2262 99.8767 89.8124C99.2259 95.3985 98.9005 100.171 98.9005 104.13C98.9005 106.95 99.009 109.581 99.2259 112.021C99.4971 114.462 99.9581 116.604 100.609 118.448C101.314 120.238 102.29 121.648 103.538 122.678C104.839 123.655 106.52 124.143 108.581 124.143Z"
            fill="#343434"
          />
        </g>
      </svg>
    ),
  },
  {
    number: "02",
    title: "BLACK COLLECTION",
    image: "/image/We_See_Project_featuredimage_opto.webp.webp",
    accent: null,
    accentNumber: null,
  },
  {
    number: "03",
    title: "HAE BY VELVRA",
    image: "/image/We_See_Project_featuredimage_opto.webp.webp",
    accent: null,
    accentNumber: null,
  },
];

export default function Collections() {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen  px-2.5 md:px-4 lg:px-5  pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10  mt-[60px] lg:mt-[70px] 2xl:mt-[80px] 3xl:mt-[90px]">
      <div className="content">
        {/* <div
          className={` pt-8 md:pt-12 lg:pt-16 pb-6 md:pb-8 lg:pb-10 text-center transition-all duration-700 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-6"
          }`}
        >
          <h1
            className={`${bodoni.className}  italic leading-none mb-1 md:mb-2`}
            style={{
              color: "#F5F0E8",
              fontSize: "clamp(52px, 14vw, 110px)",
              fontStyle: "italic",
              letterSpacing: "-1px",
            }}
          >
            Velvra
          </h1>

          <p className="font-[Tenor_Sans] text-[#FCFCFC]  text-[8px] md:text-[16px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[22px] font-normal tracking-[6px] md:tracking-[8px] uppercase">
            Collection
          </p>
        </div> */}

        <CollectionHeader title={"Velvra"} subtitle={"Collection"} />

        <div className="flex flex-col gap-0">
          {collections.map((item, index) => (
            <CollectionItem key={item.number} item={item} index={index} />
          ))}
        </div>

        <div className="pb-16 md:pb-20" />
      </div>
    </div>
  );
}
