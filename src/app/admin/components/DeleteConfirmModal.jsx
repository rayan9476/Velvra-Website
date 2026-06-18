import Modal from "./Modal";
import Icon from "./Icon";
import { icons } from "../../components/icons/AdminIcons";
function DeleteConfirmModal({
  setShowDeleteModal,
  selectedProduct,
  handleDelete,
}) {
  return (
    <>
      <Modal title="Delete Product" onClose={() => setShowDeleteModal(false)}>
        <div className="flex flex-col items-center text-center gap-5 py-2">
          <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-400">
            <Icon d={icons.trash} size={24} />
          </div>
          <div>
            <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[15px]  md:text-[16px] md:text-[14px]  lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] mb-2">
              Delete this product?
            </p>
            <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[13px] md:text-[14px] md:text-[14px]  lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] tracking-wide leading-relaxed">
              "{selectedProduct?.name}" will be permanently removed. This action
              cannot be undone.
            </p>
          </div>
          <div className="flex gap-3 w-full pt-2">
            <button
              onClick={handleDelete}
              className="flex-1 cursor-pointer bg-red-500 hover:bg-red-600 text-white font-[Tenor_Sans] font-normal text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[15px] 3xl:text-[16px]  tracking-[3px] uppercase py-3.5 rounded-xl transition-colors duration-200"
            >
              Delete
            </button>
            <button
              onClick={() => setShowDeleteModal(false)}
              className="flex-1 cursor-pointer border border-[#EEEEEE] hover:border-black hover:bg-black hover:text-white text-[#111111] font-[Tenor_Sans] font-normal  text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[15px] 3xl:text-[16px] tracking-[3px] uppercase py-3.5 rounded-xl transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default DeleteConfirmModal;
