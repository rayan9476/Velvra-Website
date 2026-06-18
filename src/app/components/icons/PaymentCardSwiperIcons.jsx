export const MastercardIcon = () => (
  <div className="flex">
    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#EB001B] opacity-90" />
    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#F79E1B] opacity-90 -ml-4" />
  </div>
);
export const VisaIcon = () => (
  <span className="font-[Tenor_Sans] font-normal text-white text-[18px] md:text-[20px] tracking-widest italic font-bold">
    VISA
  </span>
);

export const AmexIcon = () => (
  <span className="font-[Tenor_Sans] font-normal text-white text-[13px] md:text-[14px] tracking-[3px] uppercase border border-white/50 px-2 py-0.5">
    AMEX
  </span>
);

export const CardIcon = ({ type }) => {
  if (type === "mastercard") return <MastercardIcon />;
  if (type === "visa") return <VisaIcon />;
  return <AmexIcon />;
};
