export default function TrendingTags() {
  const tags = [
    ["#2021", "#spring", "#collection", "#fall"],
    ["#dress", "#autumncollection", "#velvra"],
  ];

  return (
    <section
      className="flex flex-col items-center justify-center gap-2 md:gap-3 lg:gap-4 px-2.5 md:px-4 lg:px-5  pb-8 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28 3xl:pb-32"
      aria-label="Trending tags"
    >
      <p
        className="font-[Tenor_Sans] font-normal text-[#333333]
       text-[18px] md:text-[20px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px] 3xl:text-[38px]
        tracking-[3px] uppercase pb-1 md:pb-2 lg:pb-4 xl:pb-5 2xl:pb-7 3xl:pb-9"
        aria-label="Trending"
      >
        @Trending
      </p>

      {tags.map((row, rowIdx) => (
        <div
          key={rowIdx}
          role="group"
          aria-label={`Trending tag group ${rowIdx + 1}`}
          className="flex items-center justify-center gap-4 md:gap-6 lg:gap-8 2xl:gap-14 2xl:pb-4"
        >
          {row.map((tag) => (
            <span
              key={tag}
              role="button"
              aria-label={`Search tag ${tag}`}
              className="font-[Tenor_Sans] font-normal text-gray-500 bg-[#F9F9F9] hover:bg-[#F3F4F6] hover:text-black rounded-[20px] transition-colors duration-75 ease-in-out px-[0.7rem] py-2 md:px-4 md:py-2.5 lg:px-5 xl:px-6 2xl:px-8 lg:rounded-[30px] 2xl:rounded-[34px] 3xl:rounded-[36px] cursor-pointer
                text-[14px] md:text-[20px] lg:text-[28px] xl:text-[34px] 2xl:text-[42px] 3xl:text-[48px]
                leading-tight tracking-tight cursor-pointer
                 "
            >
              {tag}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
}
