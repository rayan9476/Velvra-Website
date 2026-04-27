import { useEffect, useState } from "react";
import { Bodoni_Moda } from "next/font/google";
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
});

function CollectionHeader({ title, subtitle }) {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={` pt-8 md:pt-12 lg:pt-16 pb-6 md:pb-8 lg:pb-10 text-center transition-all duration-700 ${
        headerVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
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
    </div>
  );
}

export default CollectionHeader;
