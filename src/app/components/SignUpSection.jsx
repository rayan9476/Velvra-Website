import OnloadFadeIn from "./OnloadFadeIn";
import DividerSVG from "./DividerSVG";
import { useState } from "react";
import AddButton from "./AddButton";

function SignUpSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
    setEmail("");
  };

  return (
    <>
      <section
        aria-labelledby="signup-section-title"
        className="px-2.5 md:px-4 lg:px-5 pt-10 md:pt-16 lg:pt-20 pb-0"
      >
        <OnloadFadeIn>
          <header className="flex flex-col items-center mb-1 lg:mb-2 3xl:mb-3">
            <h2
              id="signup-section-title"
              className="flex flex-col items-center justify-center  font-[Tenor_Sans] text-[20px]  md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[38px]  font-normal text-[#000000]   tracking-[5px] uppercase text-center"
            >
              Sign Up
            </h2>
            <DividerSVG className="w-[7rem] md:w-[8rem] lg:w-[9rem] xl:w-[10rem] 2xl:w-[18rem]" />
          </header>
        </OnloadFadeIn>

        <OnloadFadeIn>
          <p className="px-2.5 md:px-4 lg:px-5  font-[Tenor_Sans] font-normal text-[#979797] text-center text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] leading-relaxed tracking-wide mb-8 md:mb-10">
            Receive early access to new arrivals, sales,
            <br className="hidden md:block" /> exclusive content, events and
            much more!
          </p>
        </OnloadFadeIn>

        <OnloadFadeIn>
          <form onSubmit={handleSubmit} aria-label="Newsletter signup form">
            <div className=" border-b border-[#CCCCCC] mb-0">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                autoComplete="email"
                type="email"
                aria-required="true"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="font-[Tenor_Sans]    font-normal w-full  text-[14px] md:text-[15px] lg:text-[16px] tracking-wide py-3 md:py-4 outline-none border-none        
                     text-gray-500            
        placeholder-gray-400      
        caret-gray-500 
        focus:bg-gray-50 "
              />
            </div>

            {submitted && (
              <p
                role="status"
                aria-live="polite"
                className="px-2.5 md:px-4 lg:px-5 font-[Tenor_Sans] font-normal text-[#C9A84C] text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] mt-3 tracking-wide text-center"
              >
                Thank you for subscribing to Velvra! ✓
              </p>
            )}
          </form>
        </OnloadFadeIn>
      </section>

      <OnloadFadeIn>
        <div className="mt-10 md:mt-14">
          <AddButton onClick={handleSubmit} text={"Submit"} />
        </div>
      </OnloadFadeIn>
    </>
  );
}

export default SignUpSection;
