"use client";
import { useEffect } from "react";
import CartContent from "../components/CartContent";
import CartFooter from "../components/CartFooter";
import PromoCode from "../components/PromoCode";
import Delivery from "../components/Delivery";
import SectionHeading from "../components/SectionHeading";
import { fetchOrders, cancelOrder } from "../lib/services";
import { useDispatch, useSelector } from "react-redux";

import {
  setCart,
  setError,
  setLoading,
  setPromoOpen,
  setPromoCode,
  setPromoApplied,
  setPromoError,
} from "../redux/features/CheckoutSlice";

const initialCart = [
  {
    id: 1,
    brand: "VELVRA",
    name: "Luxury Boucle Knit Cardigan Black",
    price: 120,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1548624313-0396a54c3b9d?w=300&q=80",
  },
  {
    id: 2,
    brand: "VELVRA",
    name: "Silk Draped Midi Dress",
    price: 180,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=300&q=80",
  },
];

export default function CheckoutPage() {
  const dispatch = useDispatch();

  const {
    cart,
    promoOpen,
    promoCode,
    promoApplied,
    promoError,
    isLoading,
    error,
  } = useSelector((state) => state.checkout);

  const updateQty = (id, delta) => {
    dispatch(
      setCart(
        cart
          .map((item) =>
            item.id === id
              ? {
                  ...item,
                  qty: item.qty + delta,
                }
              : item,
          )
          .filter((item) => item.qty > 0),
      ),
    );
  };

  const removeItem = (id) => {
    cancelOrder(id);

    dispatch(setCart(cart.filter((i) => i.id !== id)));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const delivery = 0;
  const total = subtotal - discount + delivery;

  useEffect(() => {
    const load = async () => {
      try {
        dispatch(setLoading());
        const data = await fetchOrders(true);

        const mapped = data.map((o) => ({
          id: o.id,
          brand: "VELVRA",
          name: o.items[0]?.name,
          price: o.items[0]?.price,
          qty: o.items[0]?.quantity,
          image: o.items[0]?.image,
        }));

        dispatch(setCart(mapped));
      } catch (err) {
        dispatch(setError("Error loading orders:", err));
      }
    };

    load();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      className={`bg-white relative ${cart.length === 0 ? "h-screen" : "min-h-screen"} overflow-x-hidden flex flex-col  pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10  `}
    >
      {/* Main Content */}

      {/* Heading */}

      <SectionHeading title={"  checkout"} />

      {/* Cart Items */}
      <CartContent
        isEmpty={cart.length === 0}
        items={cart}
        removeItem={removeItem}
        updateQty={updateQty}
        emptyText="Your checkout is empty."
        className="overflow-none"
      />
      {/* Promo Code */}

      <PromoCode
        promoOpen={promoOpen}
        setPromoOpen={setPromoOpen}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        promoApplied={promoApplied}
        setPromoApplied={setPromoApplied}
        promoError={promoError}
        setPromoError={setPromoError}
      />

      {/* Delivery */}
      <Delivery />

      {/* Discount Row */}
      {promoApplied && (
        <div className="flex items-center justify-between px-2.5  md:px-4 lg:px-5  py-4 border-b border-[#EEEEEE]">
          <span className="font-[Tenor_Sans] font-normal text-[#777777] text-[13px] md:text-[14px] tracking-wide">
            Discount (10%)
          </span>
          <span className="font-[Tenor_Sans] font-normal text-[#C9A84C] text-[13px] md:text-[14px] tracking-wide">
            -${discount.toFixed(0)}
          </span>
        </div>
      )}

      {/* FIXED BOTTOM — EST. TOTAL + CHECKOUT */}

      <CartFooter
        isEmpty={cart.length === 0}
        subtotal={total}
        setIsCartOpen={null} // No cart toggle on checkout page
        subtotalText={"Est. Total"}
        emptyTextbtn={"Continue Shopping"}
        notemptyTextbtn={" Checkout"}
        shippingText={false} // Hide shipping text on checkout page
        className="relative pt-0 bg-white"
      />
    </div>
  );
}
