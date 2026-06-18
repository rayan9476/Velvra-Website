"use client";
import { useState } from "react";
import DividerSVG from "@/app/components/DividerSVG";
import CartFooter from "@/app/components/CartFooter";
import ShippingAddress from "@/app/components/ShippingAddress";
import CartContent from "@/app/components/CartContent";
import PaymentMethod from "@/app/components/PaymentMethods";
import ShippingMethod from "@/app/components/ShippingMethods";
import PaymentSuccessModal from "@/app/components/PaymentSuccessModal";
import SectionHeading from "@/app/components/SectionHeading";

const savedAddresses = [
  {
    id: 1,
    name: "Iris Watson",
    street: "606-3727 Ullamcorper. Street",
    city: "Roseville NH 11523",
    phone: "(786) 713-8616",
  },
];

const shippingMethods = [
  { id: "pickup", label: "Pickup at store", price: "FREE" },
  { id: "standard", label: "Standard Delivery", price: "$5" },
  { id: "express", label: "Express Delivery", price: "$15" },
];

const paymentMethods = [
  { id: "cod", label: "Cash on Delivery" },
  { id: "card", label: "Credit / Debit Card" },
  { id: "jazzcash", label: "JazzCash" },
];

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

function SectionLabel({ text }) {
  return (
    <p className="font-[Tenor_Sans] font-normal text-[#888888] text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px] tracking-[3px] uppercase mb-3 md:mb-4">
      {text}
    </p>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-[#F7F7F7] rounded-xl px-4 py-4 md:px-5 md:py-5 ${className}`}
    >
      {children}
    </div>
  );
}

export default function CheckoutAddressPage({
  ShippingMethods = true,
  PaymentMethods = true,
  CardContent = false,
}) {
  const [selectedAddress, setSelectedAddress] = useState(savedAddresses[0].id);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState("pickup");
  const [shippingOpen, setShippingOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    street: "",
    city: "",
    phone: "",
  });
  const [addresses, setAddresses] = useState(savedAddresses);

  const total = 240;

  const selectedShippingData = shippingMethods.find(
    (m) => m.id === selectedShipping,
  );
  const selectedPaymentData = paymentMethods.find(
    (m) => m.id === selectedPayment,
  );

  const handleAddAddress = () => {
    if (!newAddress.street) return;
    const newId = addresses.length + 1;
    const fullName =
      `${newAddress.firstName || ""} ${newAddress.lastName || ""}`.trim();
    setAddresses((prev) => [
      ...prev,
      {
        id: newId,
        name: fullName,
        street: newAddress.street,
        city: newAddress.city,
        phone: newAddress.phone,
      },
    ]);
    setSelectedAddress(newId);
    setShowAddForm(false);
    setNewAddress({
      firstName: "",
      lastName: "",
      street: "",
      city: "",
      phone: "",
    });
  };

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const handleEdit = (addr) => {
    const parts = addr.name.split(" ");

    setEditingId(addr.id);

    setEditForm({
      firstName: parts[0] || "",
      lastName: parts.slice(1).join(" ") || "",
      street: addr.street,
      city: addr.city,
      phone: addr.phone,
    });
  };

  const handleSaveEdit = (id) => {
    if (!editForm.firstName || !editForm.lastName || !editForm.street) return;

    const fullName = `${editForm.firstName} ${editForm.lastName}`.trim();

    setAddresses((prev) =>
      prev.map((a) =>
        a.id === id
          ? {
              ...a,
              name: fullName,
              street: editForm.street,
              city: editForm.city,
              phone: editForm.phone,
            }
          : a,
      ),
    );
    setEditingId(null);
  };

  // cart conetnt states
  const [cart, setCart] = useState(initialCart);
  const [promoApplied, setPromoApplied] = useState(false);

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: Math.max(1, item.qty + delta),
            }
          : item,
      ),
    );
  };

  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const delivery = 0;
  const Cardtotal = subtotal - discount + delivery;

  return (
    <div
      className={`${cart.length === 0 ? "h-screen" : "min-h-screen"} flex flex-col font-[Tenor_Sans] font-normal  pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10  `}
    >
      {/* Scrollable Content */}
      <div className="flex flex-col px-2.5  md:px-4 lg:px-5">
        {/* Heading */}

        <SectionHeading title={"checkout"} />

        {/* SHIPPING ADDRESS */}
        {cart.length > 0 && (
          <ShippingAddress
            addresses={addresses}
            setAddresses={setAddresses}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            editingId={editingId}
            setEditingId={setEditingId}
            editForm={editForm}
            setEditForm={setEditForm}
            handleSaveEdit={handleSaveEdit}
            handleEdit={handleEdit}
            showAddForm={showAddForm}
            setShowAddForm={setShowAddForm}
            newAddress={newAddress}
            setNewAddress={setNewAddress}
            handleAddAddress={handleAddAddress}
            SectionLabel={SectionLabel}
            Card={Card}
          />
        )}

        {/* SHIPPING METHOD */}
        {ShippingMethods && (
          <ShippingMethod
            shippingOpen={shippingOpen}
            setShippingOpen={setShippingOpen}
            selectedShipping={selectedShipping}
            setSelectedShipping={setSelectedShipping}
            selectedShippingData={selectedShippingData}
            shippingMethods={shippingMethods}
            SectionLabel={SectionLabel}
            Card={Card}
          />
        )}
        {/* PAYMENT METHOD */}

        {cart.length > 0 && PaymentMethods && (
          <PaymentMethod
            paymentOpen={paymentOpen}
            setPaymentOpen={setPaymentOpen}
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
            selectedPaymentData={selectedPaymentData}
            paymentMethods={paymentMethods}
            SectionLabel={SectionLabel}
            Card={Card}
          />
        )}
      </div>

      {CardContent && (
        <CartContent
          isEmpty={cart.length === 0}
          items={cart}
          removeItem={removeItem}
          updateQty={updateQty}
          emptyText="Your checkout is empty."
          className="overflow-none"
        />
      )}

      {/*  BOTTOM */}
      <CartFooter
        isEmpty={CardContent ? cart.length === 0 : addresses.length === 0}
        subtotal={CardContent ? Cardtotal : total}
        setIsCartOpen={null} // No cart toggle on checkout page
        subtotalText={"Total"}
        emptyTextbtn={"Continue Shopping"}
        notemptyTextbtn={" Place Order"}
        shippingText={false} // Hide shipping text on checkout page
        className="relative pt-0 bg-white"
      />
    </div>
  );
}
