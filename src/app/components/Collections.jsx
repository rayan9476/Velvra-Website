import CenterCard from "./CenterCard";
function Collections() {
  const collections = [
    {
      image:
        "https://images.unsplash.com/photo-1666635228066-b2638dbe6503?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      image:
        "https://images.unsplash.com/photo-1666635213698-0ea75f64e79c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1659522761084-79196b64abe4?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <section
        className="flex flex-col items-center justify-center   w-full    pb-8 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-28 3xl:pb-32"
        aria-labelledby="collections-heading"
      >
        <div className="px-2.5 md:px-4 lg:px-5 w-full flex flex-col items-center">
          <h2
            id="collections-heading"
            className="flex flex-col items-center justify-center uppercase text-[24px]  md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px] font-[Tenor_Sans] font-normal text-center text-[#0A0A0A] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px] mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 3xl:mb-20"
          >
            Collections
          </h2>
        </div>

        <div
          className="relative  w-full pr-2.5 md:pr-4 lg:pr-5"
          role="region"
          aria-label={`Collection showcase ${collections[0].title}`}
        >
          <CenterCard
            image={collections[0].image}
            className=" relative w-full aspect-[4/3]  max-h-[240px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] 2xl:max-h-[700px] 3xl:max-h-[800px] mb-8  md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28 3xl:mb-32"
          />
        </div>
        <div
          className="relative  flex justify-center  w-full px-2.5 md:px-4 lg:px-5"
          role="region"
          aria-label="Collection showcase item 2"
        >
          <CenterCard
            image={collections[1].image}
            className=" relative w-[72%] md:w-[80%] lg:w-[70%] xl:w-[60%] aspect-[4/3]  max-h-[296px] md:max-h-[440px] lg:max-h-[540px] xl:max-h-[740px] 2xl:max-h-[840px] 3xl:max-h-[940px] mb-8  md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28 3xl:mb-32"
          />
        </div>
        <div
          className="relative  w-full "
          role="region"
          aria-label="Collection showcase item 3"
        >
          <CenterCard
            image={collections[2].image}
            className=" relative w-full aspect-[4/3]  max-h-[240px] md:max-h-[400px] lg:max-h-[500px] xl:max-h-[600px] 2xl:max-h-[700px] 3xl:max-h-[800px] "
          />
        </div>
      </section>
    </>
  );
}

export default Collections;
