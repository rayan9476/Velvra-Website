import Image from "next/image";

function CenterCard({ image, className }) {
  return (
    <>
      <div
        className={`image_wrapper overflow-hidden cursor-pointer  group ${className}`}
        role="button"
        tabIndex={0}
        aria-label="View collection"
      >
        <Image
          src={image}
          alt="Collection Image"
          className="w-full h-full object-cover object-top bg-[#F5F3F0]
            transition-transform duration-700 ease-in-out
            group-hover:scale-105 "
          fill
        />

        <div
          className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-700  ease-in-out  flex items-center justify-center"
          aria-hidden="true"
        >
          <button
            className="opacity-0 text-center border-2 border-white group-hover:opacity-100 font-satoshi bg-transparent cursor-pointer  hover:bg-[#EDEDED]   text-[#C9A84C] hover:text-black text-sm sm:text-base xl:text-lg 2xl:text-2xl 3xl:text-3xl font-semibold px-6 sm:px-8 py-3 sm:py-4 3xl:py-6  uppercase transition-all duration-300 "
            aria-label="View collection"
            type="button"
          >
            View Collection
          </button>
        </div>
      </div>
    </>
  );
}

export default CenterCard;
