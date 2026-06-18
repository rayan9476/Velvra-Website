"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { OctoberSvg } from "./icons/CollectionItemIcon";
import { useDispatch, useSelector } from "react-redux";
import { setVisible } from "../redux/features/CollectionItemSlice";

function CollectionItem({ item, index }) {
  const dispatch = useDispatch();

  const { visible } = useSelector((state) => state.collectionItem);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) dispatch(setVisible(true));
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      key={index}
      ref={ref}
      className={`transition-all duration-700 ease-out  ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      role="button"
      tabIndex={0}
      onClick={() => handleSelect(item)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleSelect(item);
        }
      }}
      style={{ transitionDelay: `2ms` }}
    >
      <div className="group cursor-pointer overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full h-[340px] md:h-[650px] lg:h-[700px] 3xl:h-[850px] overflow-hidden cursor-pointer">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-top cursor-pointer grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />

          {/* Accent large number watermark */}
          {item.accentNumber && (
            <div
              className="absolute    bottom-2.5 md:bottom-[-20px] right-[-40px] font-[Tenor_Sans] font-normal text-[#343434] select-none pointer-events-none leading-none"
              style={{ fontSize: "clamp(100px, 22vw, 220px)" }}
            >
              {item.accentNumber === "10" && <OctoberSvg />}
            </div>
          )}
        </div>

        {/* Label Row */}
        <div className="flex items-center justify-between pt-4 pb-6 md:pt-5 md:pb-8 lg:pt-6 lg:pb-10 border-b border-[#2A2A2A]">
          <span className="font-[Tenor_Sans]  text-[#FCFCFC] text-[14px] group-hover:text-[#DD8560] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] font-normal tracking-[1px]">
            {item.number}
          </span>
          <span className="font-[Tenor_Sans] cursor-pointer text-[#FCFCFC] group-hover:text-[#DD8560]  text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] font-normal tracking-[3px] md:tracking-[5px] uppercase">
            {item.title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CollectionItem;
