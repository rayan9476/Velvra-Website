import {
  PhoneIcon,
  StoreLocatorIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./icons/NavbarMenuFooterIcons";

function NavbarMenuFooter() {
  return (
    <>
      <div className="footer mt-auto" aria-label="Footer">
        <div className=" flex flex-col gap-4 items-start justify-start  ">
          <a
            href="tel:7867138616"
            className=" font-[Tenor_Sans] text-[16px] md:text-[18px] lg:text-[20px]  leading-[34.5px] text-[#555] "
            aria-label="Call 786 713 8616"
          >
            <PhoneIcon />

            <span aria-label="Call (786) 713-8616">(786) 713-8616</span>
          </a>

          <button type="button" aria-label="Open store locator">
            <StoreLocatorIcon />
            <span>Store locator</span>
          </button>
        </div>

        {/* <div className="flex items-center justify-center flex-col   gap-8 pt-12 "> */}
        <div className="flex items-center justify-center flex-col   gap-8  ">
          <div
            className="flex w-[21rem] items-center justify-center  px-2.5 md:px-4 lg:px-5 "
            aria-label="Divider"
          >
            <svg
              className=" text-gray-500 shrink-0"
              viewBox="0 0 125 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62.5569 9.25429L67.1065 4.70469H124.959V4.4979H67.1065L62.5569 0L58.0591 4.4979H0V4.70469H58.0591L62.5569 9.25429ZM62.5569 0.3102L66.8997 4.60129L62.5569 8.94409L58.2142 4.60129L62.5569 0.3102Z"
                fill="#555555"
              />
            </svg>
          </div>

          <div
            className="flex justify-center items-center gap-5 "
            role="navigation"
            aria-label="Social media links"
          >
            <TwitterIcon />

            <InstagramIcon />

            <YoutubeIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMenuFooter;
