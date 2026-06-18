import CheckoutAddressPage from "../address/page";

export default function PlaceOrder() {
  return (
    <CheckoutAddressPage
      ShippingMethods={false}
      PaymentMethods={true}
      CardContent={true}
    />
  );
}
