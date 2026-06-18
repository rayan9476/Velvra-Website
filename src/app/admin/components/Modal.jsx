import Icon from "./Icon";
import { icons } from "../../components/icons/AdminIcons";

function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-x-hidden">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl w-full max-w-[480px] md:max-w-[560px] z-10 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#F0F0F0]">
          <h3 className="font-[Tenor_Sans] font-normal text-[#111111] tracking-[3px] uppercase text-[13px] md:text-[14px]  lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px]">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-[#AAAAAA] cursor-pointer hover:text-[#111111] transition-colors"
          >
            <Icon d={icons.close} size={25} />
          </button>
        </div>
        <div className="p-6 md:p-7  overflow-y-hidden">{children}</div>
      </div>
    </div>
  );
}
export default Modal;
