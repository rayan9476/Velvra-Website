"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DividerSVG from "../../components/DividerSVG";
import PaymentCardSwiper from "@/app/components/PaymentCardSwiper";
import PaymentForm from "@/app/components/PaymentForm";
import AddButton from "@/app/components/AddButton";
import SectionHeading from "@/app/components/SectionHeading";

const savedCards = [
  {
    id: 1,
    name: "Iris Watson",
    number: "2365 3654 2365 3698",
    expiry: "03/25",
    type: "mastercard",
    bg: "from-[#1a1a1a] to-[#2d2d2d]",
  },
  {
    id: 2,
    name: "Iris Watson",
    number: "4532 1234 5678 9010",
    expiry: "08/27",
    type: "visa",
    bg: "from-[#C9A84C] to-[#a07830]",
  },
  {
    id: 3,
    name: "Iris Watson",
    number: "3782 822463 10005",
    expiry: "12/26",
    type: "amex",
    bg: "from-[#2c3e6b] to-[#1a2547]",
  },
  {
    id: 4,
    name: "Iris Watson",
    number: "3782 822463 10005",
    expiry: "12/26",
    type: "amex",
    bg: "from-[#2c3e6b] to-[#1a2547]",
  },
];

export default function PaymentMethodPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    number: "",
    expMonth: "",
    expDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});
  const [activeCard, setActiveCard] = useState(0);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = true;
    if (form.number.replace(/\s/g, "").length < 15) errs.number = true;
    if (!form.expMonth || form.expMonth > 12) errs.expMonth = true;
    if (!form.expDate) errs.expDate = true;
    if (!form.cvv) errs.cvv = true;
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    router.push("/checkout/address");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-[Tenor_Sans] font-normal pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10  ">
      <div className="h-full px-4 md:px-10 lg:px-20 xl:px-36 2xl:px-56  pb-36">
        {/* Heading */}

        <SectionHeading title={"Payment method"} />

        {/* Cards Swiper */}
        <PaymentCardSwiper
          savedCards={savedCards}
          setActiveCard={setActiveCard}
        />

        {/* Form */}

        <PaymentForm errors={errors} form={form} setForm={setForm} />
      </div>

      {/*  Bottom Button */}

      <div className="relative bottom-0 left-0 right-0 z-50">
        <AddButton onClick={handleSubmit} text={" Add Card"} />
      </div>
    </div>
  );
}
