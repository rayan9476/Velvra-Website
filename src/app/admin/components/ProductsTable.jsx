"use client";
import ProductsTableHeader from "./ProductsTableHeader";
import ProductsList from "./ProductsList";

function ProductsTable({ openEdit, openDelete, filteredProducts }) {
  return (
    <>
      <div className=" rounded-xl dark:bg-white/[0.03] border dark:border-[#1d2939] border-gray-200  overflow-hidden">
        {/* Table Header */}

        <ProductsTableHeader />

        {/* Products List */}

        <ProductsList
          openEdit={openEdit}
          openDelete={openDelete}
          filteredProducts={filteredProducts}
        />
      </div>
    </>
  );
}

export default ProductsTable;
