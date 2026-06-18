"use client";
import { useRouter } from "next/navigation";
import { useTopToBottomModalAnimation } from "../hooks/useTopTuBottomModelAnimation";
import { useRef, useState } from "react";
import PaymentSuccessModalContent from "./PaymentSuccessModalContent";

export default function PaymentSuccessModal({
  isOpen,
  onClose,
  paymentId = "15263541",
}) {
  const router = useRouter();
  const [selectedRating, setSelectedRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const containerRef = useRef(null);

  const handleSubmit = () => {
    if (!selectedRating) {
      setShowError(true);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      onClose?.();
      router.push("/");
    }, 1200);
  };

  const handleBackToHome = () => {
    onClose?.();
    router.push("/");
  };

  const { closeModal } = useTopToBottomModalAnimation({
    isOpen,
    containerRef,
    onClose,
  });

  if (!isOpen) return null;
  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Payment success modal"
      className="  fixed inset-0 z-50 flex items-center justify-center px-4 md:px-8"
    >
      {/* Backdrop */}
      <div
        className="model-container absolute inset-0 bg-black/60 backdrop-blur-[2px]"
        onClick={closeModal}
        aria-hidden="true"
      />

      {/* Modal */}

      <PaymentSuccessModalContent
        closeModal={closeModal}
        paymentId={paymentId}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        showError={showError}
        submitted={submitted}
        handleSubmit={handleSubmit}
        handleBackToHome={handleBackToHome}
      />
    </div>
  );
}
