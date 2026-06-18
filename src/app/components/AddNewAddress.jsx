import { AddNewAddressIcon } from "./icons/AddressIcons";
function AddNewAddress({
  showAddForm,
  setShowAddForm,
  newAddress,
  setNewAddress,
  handleAddAddress,
  Card,
}) {
  return (
    <>
      <button
        type="button"
        aria-expanded={showAddForm}
        aria-controls="shipping-address-form"
        aria-label={
          showAddForm
            ? "Close shipping address form"
            : "Open shipping address form"
        }
        onClick={() => setShowAddForm(!showAddForm)}
        className="w-full"
      >
        <Card className="flex items-center justify-between hover:bg-[#F0F0F0] transition-colors duration-200 cursor-pointer">
          <span className="font-[Tenor_Sans] font-normal text-[#111111] text-[13px] md:text-[14px] lg:text-[15px] tracking-wide">
            Add shipping address
          </span>

          <AddNewAddressIcon />
        </Card>
      </button>

      <div
        id="shipping-address-form"
        role="region"
        aria-label="Shipping address form"
        className={`overflow-hidden transition-all duration-500 ease-in-out ${showAddForm ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <Card className="mt-3">
          <p
            className={` font-[Tenor_Sans] mb-4 font-normal text-[#555555] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-wide`}
          >
            New Address
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              {["firstName", "lastName"].map((key) => (
                <div
                  key={key}
                  className="flex-1 border-b border-[#DDDDDD] pb-2"
                >
                  <input
                    id={`${key}-input`}
                    name={key}
                    autoComplete={key}
                    aria-label={
                      key === "firstName" ? "First name" : "Last name"
                    }
                    type="text"
                    placeholder={
                      key === "firstName" ? "First name" : "Last name"
                    }
                    value={newAddress[key] || ""}
                    onChange={(e) =>
                      setNewAddress((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }))
                    }
                    className="font-[Tenor_Sans] font-normal w-full bg-transparent text-[#555555] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] placeholder-[#AAAAAA] outline-none tracking-wide"
                  />
                </div>
              ))}
            </div>

            {[
              { key: "street", label: "Street address" },
              { key: "city", label: "City, State, ZIP" },
              { key: "phone", label: "Phone number" },
            ].map(({ key, label }) => (
              <div key={key} className="border-b border-[#DDDDDD] pb-2">
                <input
                  id={key}
                  name={key}
                  aria-label={label}
                  autoComplete={
                    key === "street"
                      ? "street-address"
                      : key === "city"
                        ? "address-level2"
                        : key === "phone"
                          ? "tel"
                          : undefined
                  }
                  value={newAddress[key] || ""}
                  onChange={(e) =>
                    setNewAddress((prev) => ({
                      ...prev,
                      [key]: e.target.value,
                    }))
                  }
                  className="font-[Tenor_Sans] font-normal w-full bg-transparent text-[#555555] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] placeholder-[#AAAAAA] outline-none tracking-wide"
                />
              </div>
            ))}

            {/* Save & Cancel */}
            <div className="flex gap-3 mt-1">
              <button
                type="button"
                aria-label="Save shipping address"
                onClick={handleAddAddress}
                className="flex-1 bg-[#111111] hover:bg-[#DD8560] cursor-pointer  transition-all duration-300 text-white font-[Tenor_Sans] font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-[3px] uppercase py-3  "
              >
                Save
              </button>
              <button
                type="button"
                aria-label="Cancel shipping address form"
                onClick={() => {
                  setShowAddForm(false);
                  setNewAddress({
                    firstName: "",
                    lastName: "",
                    street: "",
                    city: "",
                    phone: "",
                  });
                }}
                className="flex-1 border border-[#111111] hover:bg-[#111111] cursor-pointer  transition-all duration-300 text-[#111111] hover:text-white font-[Tenor_Sans] font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-[3px] uppercase py-3 hover:border-[#111111] transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default AddNewAddress;
