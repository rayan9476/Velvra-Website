function FormInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  error,
  labelClassName = "font-[Tenor_Sans] font-normal text-[#888888] text-[11px]  md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-[2px] uppercase block mb-2",
  inputClassName = "font-[Tenor_Sans] font-normal w-full bg-[#FAFAFA] border border-[#EEEEEE] rounded-lg px-4 py-3 text-[#111111] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[15px] 3xl:text-[16px]   placeholder-[#CCCCCC] outline-none tracking-wide transition-all duration-200 focus:border-[#C9A84C] focus:bg-white",
}) {
  //   const [focused, setFocused] = useState(false);
  return (
    <div className="w-full">
      <label className={`${labelClassName}`}>
        {label} {required && <span className="text-[#C9A84C]">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        // onFocus={() => setFocused(true)}
        // onBlur={() => setFocused(false)}
        className={`${inputClassName}`}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

export default FormInput;
