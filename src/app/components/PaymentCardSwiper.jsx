import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CardIcon } from "./icons/PaymentCardSwiperIcons";

function PaymentCardSwiper({ savedCards, setActiveCard }) {
  return (
    <>
      <div className="just-for-you   mb-8 md:mb-10 -mx-4 md:-mx-10 lg:-mx-20 xl:-mx-36 2xl:-mx-56">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `
                 <span className="${className}">
                   <span className="dot-inactive">
                     <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                       <rect x="4" y="0.353553" width="5.15685" height="5.15685"
                         transform="rotate(45 4 0.353553)"
                     stroke="#888888" strokeWidth="0.5"/>
                     </svg>
                   </span>
                   <span className="dot-active">
                     <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                       <rect x="4" width="5.65685" height="5.65685"
                         transform="rotate(45 4 0)"   fill="#DD8560"
         />
                     </svg>
                   </span>
                 </span>
               `;
            },
          }}
          spaceBetween={16}
          loop={true}
          grabCursor
          initialSlide={2}
          centeredSlides
          slidesPerView="auto"
          slideToClickedSlide
          onSlideChange={(s) => setActiveCard(s.activeIndex)}
          className="payment-swiper !pb-10 lg:!pb-12 2xl:!pb-14 3xl:!pb-16 "
          aria-label="payment card carousel !h-auto  "
        >
          {savedCards.map((card) => (
            <SwiperSlide
              key={card.id}
              className="!w-[78%] sm:!w-[60%] md:!w-[45%] lg:!w-[38%] xl:!w-[50%] 2xl:!w-[55%] 3xl:!w-[60%] shrink-0"
              aria-label={`Saved card ending in ${card.number.slice(-4)}`}
            >
              <div
                className={`w-full h-[190px] md:h-[240px] lg:h-[280px] xl:h-[320px] 2xl:h-[360px] 3xl:h-[420px] aspect-[3/1]    bg-gradient-to-br ${card.bg} rounded-2xl p-5 md:p-6 lg:p-8  flex flex-col justify-between overflow-hidden`}
              >
                {/* Decorative circles */}
                <div className="absolute -right-8 -top-8 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/5" />
                <div className="absolute -right-4 top-8 w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/5" />

                {/* Card Icon Top Right */}
                <div className="flex justify-end relative z-10">
                  <CardIcon type={card.type} />
                </div>

                {/* Card Details Bottom */}
                <div className="relative z-10">
                  <p className="font-[Tenor_Sans] font-normal text-white/80 text-[12px] md:text-[13px] tracking-wide mb-1">
                    {card.name}
                  </p>
                  <div className="flex items-end justify-between">
                    <p className="font-[Tenor_Sans] font-normal text-white text-[14px] md:text-[15px] lg:text-[16px] tracking-[2px]">
                      {card.number}
                    </p>
                    <p className="font-[Tenor_Sans] font-normal text-white/80 text-[12px] md:text-[13px] tracking-wide ml-4">
                      {card.expiry}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default PaymentCardSwiper;
