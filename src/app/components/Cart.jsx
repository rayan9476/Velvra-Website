"use client";
import { useState, useRef } from "react";
import useSlideAnimation from "../hooks/useSlideAnimation";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartContent from "./CartContent";

const initialItems = [
  {
    id: 1,
    brand: "LAMEREI",
    name: "Recycle Boucle Knit Cardigan Pink",
    price: 120,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1659522761084-79196b64abe4?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    brand: "5252 BY O!OI",
    name: "2021 Signature Sweatshirt [NAVY]",
    price: 120,
    qty: 1,
    image:
      "https://images.unsplash.com/photo-1666635228066-b2638dbe6503?q=80&w=300&auto=format&fit=crop",
  },
];

export default function Cart({ isCartOpen, setIsCartOpen }) {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item,
        )
        .filter((item) => item.qty > 0),
    );
  };

  const removeItem = (id) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const isEmpty = items.length === 0;

  const cartRef = useRef(null);
  // Custom hook to handle slide animation start here
  useSlideAnimation(isCartOpen, cartRef, "left");
  // Custom hook to handle slide animation ends here

  return (
    <div
      ref={cartRef}
      className="fixed w-full h-full z-20 flex  overflow-hidden transform -translate-x-[100%] "
    >
      <div
        className="relative flex flex-col bg-white
          w-full   
          h-full shadow-2xl font-[Tenor_Sans] font-normal"
      >
        <CartHeader setIsCartOpen={setIsCartOpen} />

        <CartContent
          isEmpty={isEmpty}
          items={items}
          removeItem={removeItem}
          updateQty={updateQty}
        />

        <CartFooter
          isEmpty={isEmpty}
          subtotal={subtotal}
          setIsCartOpen={setIsCartOpen}
        />
      </div>
    </div>
  );
}
