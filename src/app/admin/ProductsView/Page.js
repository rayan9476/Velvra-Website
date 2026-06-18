import ProductsViewHeader from "../components/ProductsViewHeader";
import FilterAndSearch from "../components/FilterAndSearch";
import ProductsTable from "../components/ProductsTable";
import { categories } from "../data/data";

function ProductsView({
  products,
  filterCategory,
  selectCategory,
  openAddModal,
  openEdit,
  openDelete,
  search,
  setSearch,
  filteredProducts,
  setOpenCategory1,
  openCategory1,
}) {
  return (
    <>
      <div>
        {/* Header */}

        <ProductsViewHeader products={products} openAddModal={openAddModal} />

        {/*   Filters */}
        <FilterAndSearch
          // search={search}
          // setSearch={setSearch}
          // filterCategory={filterCategory}
          // selectCategory={selectCategory}
          // openCategory1={openCategory1}
          // setOpenCategory1={setOpenCategory1}
          search={search}
          setSearch={setSearch}
          placeholder="Search products..."
          filterCategoryCommon={filterCategory}
          selectCategoryCommon={selectCategory}
          openCategoryCommon={openCategory1}
          setOpenCategoryCommon={setOpenCategory1}
          categoriesCommon={categories}
        />

        {/* Products Table */}

        <ProductsTable
          openEdit={openEdit}
          openDelete={openDelete}
          filteredProducts={filteredProducts}
        />
      </div>
    </>
  );
}

export default ProductsView;
