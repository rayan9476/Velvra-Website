function GetPaymentLabel(method) {
  if (method === "cod") return "Cash on Delivery";
  if (method === "card") return "Card";
  if (method === "jazzcash") return "JazzCash";
  return method;
}

export default GetPaymentLabel;
