import Modal from "./Modal";
import CategoriesDropDown from "../../components/CategoriesDropDown";
import FormInput from "../../components/common/FormInput";
function AddProductModal({
  closeAddModal,
  form,
  update,
  errors,
  setOpenCategory3,
  openCategory3,
  categories,
  selectCategory3,
  setOpenCategory4,
  openCategory4,
  WhichSectionProduct,
  SectionCategories,
  selectCategory4,
  handleAdd,
}) {
  return (
    <>
      <Modal title="Add New Product" onClose={closeAddModal}>
        <div className="flex flex-col gap-5">
          <FormInput
            label="Product Name"
            value={form.name}
            onChange={update("name")}
            placeholder="e.g. Silk Draped Dress"
            required
            error={errors.name}
          />

          <div className="flex gap-4">
            <div className="w-full ">
              <label className="font-[Tenor_Sans] font-normal text-[#888888] text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-[2px] uppercase block mb-2">
                Category <span className="text-[#C9A84C]">*</span>
              </label>

              <CategoriesDropDown
                onClose={setOpenCategory3}
                onOpen={openCategory3}
                Category={form.category}
                categories={categories}
                selectCategory={selectCategory3}
                classNameButton="w-full text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[15px] 3xl:text-[16px] dark:text-black  border-[1px] bg-[#FAFAFA] border border-[#EEEEEE] transition-all duration-200 focus:border-[#C9A84C] focus:bg-white "
                classNameDropDowm="right-0 w-full"
                isHover={false}
              />
            </div>

            <div className="w-full ">
              <label className="font-[Tenor_Sans] font-normal text-[#888888] text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[16px] tracking-[2px] uppercase block mb-2">
                section <span className="text-[#C9A84C]">*</span>
              </label>

              <CategoriesDropDown
                onClose={setOpenCategory4}
                onOpen={openCategory4}
                Category={WhichSectionProduct.category}
                categories={SectionCategories}
                selectCategory={selectCategory4}
                classNameButton="w-full text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[15px] 3xl:text-[16px] dark:text-black  border-[1px] bg-[#FAFAFA] border border-[#EEEEEE] transition-all duration-200 focus:border-[#C9A84C] focus:bg-white "
                classNameDropDowm="right-0 w-full"
                isHover={false}
              />
            </div>
          </div>

          <FormInput
            label="Price ($)"
            value={form.price}
            onChange={update("price")}
            placeholder="0.00"
            type="number"
            required
            error={errors.price}
          />

          <FormInput
            label="Stock Quantity"
            value={form.stock}
            onChange={update("stock")}
            placeholder="0"
            type="number"
            required
            error={errors.stock}
          />

          <FormInput
            label="Image URL"
            value={form.image}
            onChange={update("image")}
            placeholder="https://..."
            error={errors.image}
          />

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleAdd}
              className="flex-1 cursor-pointer bg-[#C9A84C]  hover:bg-[#b8963f] text-[#111111] font-[Tenor_Sans] font-normal text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[15px] 3xl:text-[16px] tracking-[3px] uppercase py-3.5 rounded-xl transition-colors duration-200"
            >
              Add Product
            </button>
            <button
              onClick={closeAddModal}
              className="flex-1 cursor-pointer border border-[#EEEEEE] hover:border-black hover:bg-black hover:text-white text-[#111111] font-[Tenor_Sans] font-normal text-[12px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[15px] 3xl:text-[16px] tracking-[3px] uppercase py-3.5 rounded-xl transition-colors duration-200 "
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddProductModal;
