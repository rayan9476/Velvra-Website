"use client";
import { useState, useRef, useEffect } from "react";
import useSlideAnimation from "../hooks/useSlideAnimation";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import CartContent from "./CartContent";
import { useCart } from "@/app/components/contexts/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, updateCartItem } from "../lib/services";
import { setError, setItems, setLoading } from "../redux/features/CartSlice";

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

// export default function Cart({ isCartOpen, setIsCartOpen }) {
export default function Cart() {
  const { isCartOpen, setIsCartOpen } = useCart();

  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector((state) => state.cart);

  // const [items, setItems] = useState(initialItems);

  const updateQty = async (id, delta) => {
    const data = await updateCartItem(id, delta);

    console.log("kkkk", data);

    dispatch(
      setItems(
        items
          .map((item) =>
            item.id === id ? { ...item, qty: item.qty + delta } : item,
          )
          .filter((item) => item.qty > 0),
      ),
    );
  };

  const removeItem = (id) =>
    dispatch(setItems(items.filter((i) => i.id !== id)));

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const isEmpty = items.length === 0;

  const cartRef = useRef(null);
  // Custom hook to handle slide animation start here
  useSlideAnimation(isCartOpen, cartRef, "left");
  // Custom hook to handle slide animation ends here

  useEffect(() => {
    const load = async () => {
      try {
        dispatch(setLoading());
        const data = await fetchCart();

        const mapped = data.cartItems.map((o) => ({
          id: o.id,
          brand: "VELVRA",
          name: o.name,
          price: o.price,
          qty: o.quantity,
          image: o.image,
        }));

        dispatch(setItems(mapped));

        sethellow(data);
      } catch (err) {
        dispatch(setError("Error loading orders:", err));
      }
    };

    load();
  }, []);

  // useEffect(() => {
  //   console.log("data", hellow);
  // }, [hellow]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      ref={cartRef}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
      className={`fixed inset-0 w-full h-full z-20 flex  overflow-hidden transform -translate-x-[100%] 
         ${isCartOpen ? "pointer-events-auto " : "pointer-events-none "}
       `}
    >
      <aside
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
      </aside>
    </div>
  );
}
