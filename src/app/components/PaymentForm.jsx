"use client";
import PaymentInputField from "./PaymentInputField";

function PaymentForm({ errors, form, setForm }) {
  const update = (key) => (e) => {
    let val = e.target.value;
    if (key === "number")
      val = val
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(.{4})/g, "$1 ")
        .trim();
    if (key === "expMonth" || key === "expDate")
      val = val.replace(/\D/g, "").slice(0, 2);
    if (key === "cvv") val = val.replace(/\D/g, "").slice(0, 4);
    setForm((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      <div className="flex flex-col gap-6 md:gap-7 lg:gap-8">
        {/* Name on Card */}
        <div>
          <PaymentInputField
            label="Name On Card"
            hint="*Please enter your name exactly as it appears on your card"
            placeholder="Full name"
            value={form.name}
            onChange={update("name")}
          />
          {errors.name && (
            <p className="font-[Tenor_Sans] font-normal text-red-400 text-[11px] mt-1">
              Required
            </p>
          )}
        </div>

        {/* Card Number */}
        <div>
          <PaymentInputField
            placeholder="Card Number"
            value={form.number}
            onChange={update("number")}
            type="text"
          />
          {errors.number && (
            <p className="font-[Tenor_Sans] font-normal text-red-400 text-[11px] mt-1">
              Enter valid card number
            </p>
          )}
        </div>

        {/* Exp Month + Exp Date */}
        <div className="flex gap-4 md:gap-6">
          <div className="flex-1">
            <PaymentInputField
              placeholder="Exp Month"
              value={form.expMonth}
              onChange={update("expMonth")}
              type="text"
            />
            {errors.expMonth && (
              <p className="font-[Tenor_Sans] font-normal text-red-400 text-[11px] mt-1">
                Invalid
              </p>
            )}
          </div>
          <div className="flex-1">
            <PaymentInputField
              placeholder="Exp Date"
              value={form.expDate}
              onChange={update("expDate")}
              type="text"
            />
            {errors.expDate && (
              <p className="font-[Tenor_Sans] font-normal text-red-400 text-[11px] mt-1">
                Required
              </p>
            )}
          </div>
        </div>

        {/* CVV */}
        <div>
          <PaymentInputField
            placeholder="CVV"
            value={form.cvv}
            onChange={update("cvv")}
            type="password"
          />
          {errors.cvv && (
            <p className="font-[Tenor_Sans] font-normal text-red-400 text-[11px] mt-1">
              Required
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default PaymentForm;
