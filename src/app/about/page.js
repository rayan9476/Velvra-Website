"use client";
import Image from "next/image";
import OnloadFadeIn from "../components/OnloadFadeIn";
import OurStorySection from "../components/OurStorySection";
import SignUpSection from "../components/SignUpSection";
export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen   pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10  ">
      <OurStorySection />

      {/* FULL WIDTH IMAGE */}
      <OnloadFadeIn>
        <figure className="relative w-full group px-2.5  md:px-4 lg:px-5    h-[280px] md:h-[420px] lg:h-[540px] xl:h-[620px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=90"
            alt="Velvra Story"
            fill
            className=" h-full w-full  object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105 cursor-pointer"
            priority
          />

          <div className="absolute cursor-pointer inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-700 ease-in-out"></div>
        </figure>
      </OnloadFadeIn>

      {/* SIGN UP SECTION */}
      <SignUpSection />
    </div>
  );
}
