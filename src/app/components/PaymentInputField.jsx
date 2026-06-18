import { useState } from "react";

function PaymentInputField({
  label,
  hint,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1 mb-1">
      {label && (
        <p className="font-[Tenor_Sans] font-normal text-[#979797] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] tracking-wide">
          {label}
        </p>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="font-[Tenor_Sans] font-normal bg-transparent text-[#333333] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px] placeholder-[#979797] outline-none tracking-wide pb-3 w-full"
      />

      <div
        className={`h-[1px] transition-all duration-300 ${focused ? "bg-[#111111]" : "bg-[#DDDDDD]"}`}
      />

      {hint && (
        <p className="font-[Tenor_Sans] font-normal text-[#979797] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[17px]  tracking-wide italic mb-1">
          {hint}
        </p>
      )}
    </div>
  );
}

export default PaymentInputField;
