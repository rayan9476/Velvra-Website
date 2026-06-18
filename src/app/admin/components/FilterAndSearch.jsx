import Icon from "./Icon";
import { icons } from "../../components/icons/AdminIcons";
import CategoriesDropDown from "../../components/CategoriesDropDown";
import { categories } from "../data/data";
// function FilterAndSearch({
//   search,
//   setSearch,
//   filterCategory,
//   selectCategory,
//   openCategory1,
//   setOpenCategory1,
// }) {

function FilterAndSearch({
  search,
  setSearch,
  placeholder = "",
  filterCategoryCommon,
  selectCategoryCommon,
  openCategoryCommon,
  setOpenCategoryCommon,
  categoriesCommon,
  filterCategoryCommon2,
  selectCategoryCommon2,
  openCategoryCommon2,
  setOpenCategoryCommon2,
  categoriesCommon2,
  isTrue = false,
}) {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 mb-5 md:mb-6">
        {/* Search */}
        <div className="flex items-center gap-2 dark:bg-white/[0.03] bg-white border dark:border-[#1d2939] border-gray-200  rounded-xl px-4 py-3 flex-1">
          <span className="text-[#AAAAAA]">
            <Icon d={icons.search} size={20} />
          </span>
          <input
            type="text"
            // placeholder="Search products..."
            placeholder={placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="font-[Tenor_Sans] font-normal flex-1 bg-transparent dark:text-white text-[13px] md:text-[14px] placeholder-[#CCCCCC] outline-none tracking-wide"
          />
        </div>

        {/* Category Filter */}
        {/* <CategoriesDropDown
          onClose={setOpenCategory1}
          onOpen={openCategory1}
          Category={filterCategory}
          categories={categories}
          selectCategory={selectCategory}
        /> */}

        <CategoriesDropDown
          onClose={setOpenCategoryCommon}
          onOpen={openCategoryCommon}
          Category={filterCategoryCommon}
          categories={categoriesCommon}
          selectCategory={selectCategoryCommon}
        />

        {isTrue && (
          <CategoriesDropDown
            onClose={setOpenCategoryCommon2}
            onOpen={openCategoryCommon2}
            Category={filterCategoryCommon2}
            categories={categoriesCommon2}
            selectCategory={selectCategoryCommon2}
          />
        )}
      </div>
    </>
  );
}

export default FilterAndSearch;
