"use client";
import Image from "next/image";

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
    <section className="w-full  px-2.5 md:px-4 lg:px-5 mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 3xl:mt-10 py-12 md:py-16 lg:py-20"
   aria-labelledby="follow-us-heading" >
      <div className="flex flex-col items-center justify-center pb-6 md:pb-8 lg:pb-10 xl:pb-12 2xl:pb-14 3xl:pb-16">
        <h2 id="follow-us-heading"
 className=" uppercase text-[24px]  md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px] font-[Tenor_Sans] font-normal text-center text-[#0A0A0A] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px] mb-1 md:mb-2 lg:mb-3  2xl:mb-5 3xl:mb-6 ">
          Follow Us
        </h2>
        <svg
          className="md:h-[35px] w-[35px]  lg:h-[40px] lg:w-[40px] 2xl:h-[45px] 2xl:w-[45px]  3xl:h-[50px] 3xl:w-[50px] "
          width="24"
          height="24"
           aria-hidden="true"
      focusable="false"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.68 1.43994C4.23959 1.43994 1.44 4.23953 1.44 7.67994V16.3199C1.44 19.7603 4.23959 22.5599 7.68 22.5599H16.32C19.7604 22.5599 22.56 19.7603 22.56 16.3199V7.67994C22.56 4.23953 19.7604 1.43994 16.32 1.43994H7.68ZM7.68 2.39994H16.32C19.2415 2.39994 21.6 4.75843 21.6 7.67994V16.3199C21.6 19.2415 19.2415 21.5999 16.32 21.5999H7.68C4.75849 21.5999 2.4 19.2415 2.4 16.3199V7.67994C2.4 4.75843 4.75849 2.39994 7.68 2.39994ZM17.76 5.27994C17.5054 5.27994 17.2612 5.38108 17.0812 5.56112C16.9011 5.74115 16.8 5.98533 16.8 6.23994C16.8 6.49455 16.9011 6.73873 17.0812 6.91876C17.2612 7.0988 17.5054 7.19994 17.76 7.19994C18.0146 7.19994 18.2588 7.0988 18.4388 6.91876C18.6189 6.73873 18.72 6.49455 18.72 6.23994C18.72 5.98533 18.6189 5.74115 18.4388 5.56112C18.2588 5.38108 18.0146 5.27994 17.76 5.27994ZM12 6.71994C9.08962 6.71994 6.72 9.08956 6.72 11.9999C6.72 14.9103 9.08962 17.2799 12 17.2799C14.9104 17.2799 17.28 14.9103 17.28 11.9999C17.28 9.08956 14.9104 6.71994 12 6.71994ZM12 7.67994C14.3916 7.67994 16.32 9.60839 16.32 11.9999C16.32 14.3915 14.3916 16.3199 12 16.3199C9.60845 16.3199 7.68 14.3915 7.68 11.9999C7.68 9.60839 9.60845 7.67994 12 7.67994Z"
            fill="#333333"
          />
        </svg>
      </div>

      <div className="grid grid-cols-2  gap-3 md:gap-5 lg:gap-6 "
        role="region"
    aria-label="Instagram posts grid">
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

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500"     aria-hidden="true"/>

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
