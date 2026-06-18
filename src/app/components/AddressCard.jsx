import {
  MdEdit,
  MdDelete,
  MdRadioButtonChecked,
  MdRadioButtonUnchecked,
} from "react-icons/md";
function AddressCard({
  addr,
  addresses,
  setAddresses,
  selectedAddress,
  setSelectedAddress,
  handleEdit,
}) {
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        aria-label={`Select address for ${addr.name}`}
        className="flex items-start justify-between cursor-pointer"
        onClick={() => setSelectedAddress(addr.id)}
      >
        <div className="flex-1">
          <p className="font-[Tenor_Sans] font-normal text-[#1A1A1A] text-[15px] md:text-[16px] lg:text-[17px] mb-1">
            {addr.name}
          </p>
          <p className="font-[Tenor_Sans] font-normal text-[#555555] text-[13px] md:text-[14px] leading-relaxed">
            {addr.street}
          </p>
          <p className="font-[Tenor_Sans] font-normal text-[#555555] text-[13px] md:text-[14px] leading-relaxed">
            {addr.city}
          </p>
          <p className="font-[Tenor_Sans] font-normal text-[#555555] text-[13px] md:text-[14px] leading-relaxed mt-1">
            {addr.phone}
          </p>
        </div>

        {/* Arrow / Selected Indicator */}
        <div className="flex flex-col items-center gap-3  ml-3 mt-1">
          {selectedAddress === addr.id ? (
            <MdRadioButtonChecked className="text-black text-[22px]" />
          ) : (
            <MdRadioButtonUnchecked className="text-gray-400 text-[22px]" />
          )}

          {/* edit button */}
          <button
            type="button"
            aria-label={`Edit address for ${addr.name}`}
            onClick={(e) => {
              e.stopPropagation();
              handleEdit(addr);
            }}
            className="text-[#AAAAAA] hover:text-[#DD8560] transition-colors duration-200 cursor-pointer"
          >
            <MdEdit className="text-[20px]" />
          </button>

          {/* Delete Button */}
          {addresses.length > 1 && (
            <button
              type="button"
              aria-label={`Delete address for ${addr.name}`}
              onClick={(e) => {
                e.stopPropagation(); // prevent selecting address on delete
                setAddresses((prev) => prev.filter((a) => a.id !== addr.id));
                if (selectedAddress === addr.id) {
                  setSelectedAddress(
                    addresses.find((a) => a.id !== addr.id)?.id,
                  );
                }
              }}
              className={`transition-colors duration-200 ${
                addresses.length === 1
                  ? "text-[#DDDDDD] cursor-not-allowed"
                  : "text-[#AAAAAA] hover:text-[#DD8560] cursor-pointer"
              }`}
            >
              <MdDelete className=" text-[22px]" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default AddressCard;
