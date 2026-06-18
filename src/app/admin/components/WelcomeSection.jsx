import Card from "./Card";
import RecentProducts from "./RecentProducts";

function WelcomeSection({ stats, products }) {
  return (
    <>
      <div>
        <div className="mb-6 md:mb-8">
          <h1 className="font-[Tenor_Sans] font-normal text-[#C9A84C]  text-[20px] md:text-[22px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[34px]  mb-1">
            Welcome back, Admin
          </h1>
          <p className="font-[Tenor_Sans] font-normal text-gray-300  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] tracking-wide">
            Here is what is happening with Velvra today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 mb-8 md:mb-10">
          {stats.map((stat, i) => (
            <Card key={i} stat={stat} />
          ))}
        </div>

        {/* Recent Products */}
        <RecentProducts products={products} />
      </div>
    </>
  );
}

export default WelcomeSection;
