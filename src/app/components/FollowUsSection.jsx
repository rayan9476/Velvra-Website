"use client";
import Image from "next/image";
import { FollowUseInstagramIcon } from "./icons/FollowUsSectionIcons";

const posts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1666635228066-b2638dbe6503?q=80&w=600&auto=format&fit=crop",
    username: "@velvra",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1666635228066-b2638dbe6503?q=80&w=600&auto=format&fit=crop",
    username: "@_elegance",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1666635228066-b2638dbe6503?q=80&w=600&auto=format&fit=crop",
    username: "@velvra",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1666635228066-b2638dbe6503?q=80&w=600&auto=format&fit=crop",
    username: "@_elegance",
  },
];

export default function FollowUsSection() {
  return (
    <section
      className="w-full  px-2.5 md:px-4 lg:px-5 mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 3xl:mt-10 py-12 md:py-16 lg:py-20"
      aria-labelledby="follow-us-heading"
    >
      <div className="flex flex-col items-center justify-center pb-6 md:pb-8 lg:pb-10 xl:pb-12 2xl:pb-14 3xl:pb-16">
        <h2
          id="follow-us-heading"
          className=" uppercase text-[24px]  md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px] font-[Tenor_Sans] font-normal text-center text-[#0A0A0A] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px] mb-1 md:mb-2 lg:mb-3  2xl:mb-5 3xl:mb-6 "
        >
          Follow Us
        </h2>

        <FollowUseInstagramIcon />
      </div>

      <div
        className="grid grid-cols-2  gap-3 md:gap-5 lg:gap-6 "
        role="region"
        aria-label="Instagram posts grid"
      >
        {posts.map((post) => (
          <div
            key={post.id}
            className="group relative overflow-hidden cursor-pointer"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={post.image}
                alt={post.username}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
            </div>

            <div
              className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"
              aria-hidden="true"
            />

            <div className="absolute bottom-0 left-0 w-full p-3 md:p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white  text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] font-[Tenor_Sans] font-normal tracking-wide">
                {post.username}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
