import AccordionItem from "./AccordionItem";
import { useState } from "react";
import {
  ArrowUpBoxIcon,
  AddToBasketButton,
  WishlistIcon,
  FreeShippingIcon,
  CODPolicyIcon,
  ReturnPolicyIcon,
  careIcons,
} from "./icons/ProductsIcons";
import { useCart } from "@/app/components/contexts/CartContext";
function ProductDetailSection({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("S");
  const [wishlist, setWishlist] = useState(false);

  const { setIsCartOpen } = useCart();
  const handleAddToCart = async () => {
    try {
      const { addToCart } = await import("@/app/lib/services");
      await addToCart(product.id, 1);

      setIsCartOpen(true);
    } catch (err) {
      console.error("Add to cart error:", err);
    }
  };

  return (
    <>
      <div className="w-full lg:w-[45%] xl:w-[50%] px-4 md:px-0 pt-5 md:pt-6 lg:pt-0">
        <div className="flex items-center justify-between mb-1">
          <span className="font-[Tenor_Sans] font-normal text-[#C9A84C] text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] tracking-[3px] uppercase">
            {product.brand}
          </span>
          <button>
            <ArrowUpBoxIcon />
          </button>
        </div>

        <h1 className="font-[Tenor_Sans] font-normal text-[#111111] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[28px] 3xl:text-[30px] leading-snug mb-2">
          {product.name}
        </h1>

        <p className="font-[Tenor_Sans] font-normal text-[#DD8560] text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] 3xl:text-[28px] mb-5 md:mb-6">
          ${product.price}
        </p>

        {/* Divider */}
        <div className="h-[1px] bg-[#E0E0E0] mb-5 md:mb-6" />

        <div className="mb-5 md:mb-6">
          <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[13px] md:text-[14px] tracking-wide mb-3">
            Color
          </p>
          <div className="flex items-center gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-7 h-7 rounded-full transition-all duration-200 cursor-pointer ${
                  selectedColor === color
                    ? "ring-2 ring-offset-2 ring-black/30"
                    : ""
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="mb-6 md:mb-8">
          <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[13px] md:text-[14px] tracking-wide mb-3">
            Size
          </p>
          <div className="flex items-center gap-2 md:gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-9 h-9 md:w-10 md:h-10 font-[Tenor_Sans] cursor-pointer text-[13px] md:text-[14px] lg:text-[15px] 2xl:text-[16px] rounded-full  border transition-colors duration-300 ${
                  selectedSize === size
                    ? "bg-[#111111] text-white border-[#111111]"
                    : "bg-white text-[#111111] border-[#DDDDDD] hover:bg-black hover:text-white "
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 cursor-pointer bg-[#111111] hover:bg-[#DD8560]   text-white font-[Tenor_Sans] font-normal text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] tracking-[2px] uppercase h-12 md:h-14 transition-colors duration-300"
          >
            <AddToBasketButton />
            Add to Basket
          </button>
          <button
            onClick={() => setWishlist(!wishlist)}
            className={`w-12 h-12 md:w-14 md:h-14 cursor-pointer border border-[#DDDDDD] hover:bg-gray-300 ${wishlist ? "bg-gray-300" : "bg-white"}  flex items-center justify-center transition-all duration-300`}
          >
            <WishlistIcon wishlist={wishlist} />
          </button>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#E0E0E0] mb-5 md:mb-6" />

        <div className="mb-5 md:mb-6">
          <p className="font-[Tenor_Sans] font-normal text-[#111111] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px]  tracking-[2px] uppercase mb-3">
            Materials
          </p>
          <p className="font-[Tenor_Sans] font-normal text-[#777777]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px]  leading-relaxed">
            {product.materials}
          </p>
        </div>

        <div className="mb-5 md:mb-6">
          <p className="font-[Tenor_Sans] font-normal text-[#111111]  text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px]  tracking-[2px] uppercase mb-3">
            Care
          </p>
          <p className="font-[Tenor_Sans] font-normal text-[#777777]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] leading-relaxed mb-4">
            {product.care}
          </p>
          <div className="flex flex-col gap-2">
            {/* {product.careIcons.map((c, i) => ( */}
            {careIcons.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-[#777777] text-[14px] w-5 text-center">
                  {c.icon}
                </span>
                <span className="font-[Tenor_Sans] font-normal text-[#777777]  text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[18px] ">
                  {c.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-[#E0E0E0]" />

        {/* Accordion */}
        <AccordionItem
          svg={<FreeShippingIcon />}
          title="Free Flat Rate Shipping"
          defaultOpen={true}
        >
          Estimated to be delivered on 09/11/2025 - 12/11/2025.
        </AccordionItem>
        <AccordionItem svg={<CODPolicyIcon />} title="  COD Policy">
          Cash on delivery is available for all orders. Payment is collected
          upon delivery by our courier partner.
        </AccordionItem>
        <AccordionItem svg={<ReturnPolicyIcon />} title="  Return Policy">
          We accept returns within 14 days of delivery. Items must be unworn and
          in original condition with tags attached.
        </AccordionItem>
      </div>
    </>
  );
}

export default ProductDetailSection;
