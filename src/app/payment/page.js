"use client";

import PaymentSuccessModal from "@/app/components/PaymentSuccessModal";
import { useState } from "react";

export default function payment() {
  const [showSuccess, setShowSuccess] = useState(true);

  return (
    <PaymentSuccessModal
      isOpen={showSuccess}
      onClose={() => setShowSuccess(false)}
      paymentId="15263541"
    />
  );
}
