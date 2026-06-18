import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function OrderAvatar({ name, className = "" }) {
  const initials =
    name
      ?.split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "?";

  const order = { customer: { image: "", name: "" } };
  return (
    <div
      className={`w-8 h-8 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 3xl:w-12 3xl:h-12 rounded-full bg-[#111111] flex-shrink-0 flex items-center justify-center ${className}`}
    >
      {/* <span className="font-[Tenor_Sans] font-normal text-white text-[11px] xl:text-[12px]">
        {initials}
      </span> */}

      <Avatar className={"h-full w-full bg-white dark:bg-gray-900"}>
        <AvatarImage
          src={order.customer.image || ""}
          alt={order.customer.name || "Customer"}
        />

        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default OrderAvatar;
