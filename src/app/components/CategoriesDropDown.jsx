import { useEffect, useRef } from "react";

function CategoriesDropDown({
  onClose,
  onOpen,
  Category,
  categories,
  selectCategory,
  classNameButton = "border dark:border-[#1d2939] border-gary-400 text-[14px]        md:text-[15px] lg:text-[16px] xl:text-[17px]      2xl:text-[18px] 3xl:text-[19px] ",
  classNameDropDowm = "",
  isHover = true,
}) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <div className="relative " ref={dropdownRef}>
        <button
          onClick={() => onClose((p) => !p)}
          className={`
            flex items-center gap-2 justify-between
            ${classNameButton}
          px-5 py-3 rounded-xl self-start sm:self-auto
          font-[Tenor_Sans] font-normal          
          text-left
          outline-none tracking-wide cursor-pointer
          transition-colors duration-200 ease-in
           ${
             isHover
               ? onOpen
                 ? "bg-[#C9A84C] text-[#111111]"
                 : "dark:bg-white/[0.03]  bg-gray-400 dark:text-white  dark:hover:bg-[#C9A84C] hover:bg-[#C9A84C] dark:hover:text-[#111111]"
               : ""
           }

        `}
        >
          {Category}{" "}
          {onOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-up-icon lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down-icon lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </button>

        {/* Dropdown */}
        {onOpen && (
          <div
            className={`
                 ${classNameDropDowm}
                 w-60 
            absolute mt-2 right-0
            max-h-60 overflow-y-auto overflow-x-hidden 
            border border-[#1d2939]
            bg-[#111]
            shadow-xl rounded-xl no-scrollbar
            z-50
          `}
          >
            <div
              className="
      max-h-60
      overflow-y-auto
      overflow-x-hidden
      custom-scrollbar 
    "
            >
              {categories.map((c) => (
                <div
                  key={c}
                  onClick={() => selectCategory(c)}
                  className="
                px-4 py-3
                font-[Tenor_Sans] font-normal 
                text-white
                cursor-pointer
                transition-colors duration-200
                hover:bg-[#C9A84C]
                hover:text-[#111111] 
              "
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CategoriesDropDown;
