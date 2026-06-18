function EditForm({
  addr,
  editForm,
  setEditForm,
  handleSaveEdit,
  setEditingId,
}) {
  return (
    <>
      <div className="flex flex-col gap-3">
        <p
          className={` font-[Tenor_Sans] mb-4 font-normal text-[#555555] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-wide`}
        >
          Edit Address
        </p>
        <div className="flex gap-4">
          {["firstName", "lastName"].map((key) => {
            const id = `edit-${key}`;
            return (
              <div key={key} className="border-b border-[#DDDDDD] pb-2 w-1/2">
                <label htmlFor={id} className="sr-only">
                  {key === "firstName" ? "First name" : "Last name"}
                </label>
                <input
                  id={id}
                  name={key}
                  type="text"
                  autoComplete={key}
                  placeholder={key === "firstName" ? "First name" : "Last name"}
                  value={editForm[key] || ""}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      [key]: e.target.value,
                    }))
                  }
                  className="font-[Tenor_Sans] font-normal w-full bg-transparent text-[#555555] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] placeholder-[#AAAAAA] outline-none tracking-wide"
                />
              </div>
            );
          })}
        </div>
        {[
          { key: "street", label: "Street address", auto: "street-address" },
          { key: "city", label: "City, State, ZIP", auto: "address-level2" },
          { key: "phone", label: "Phone number", auto: "tel" },
        ].map(({ key, label, auto }) => {
          const id = `edit-${key}`;

          return (
            <div key={key} className="border-b border-[#DDDDDD] pb-2">
              <label htmlFor={id} className="sr-only">
                {label}
              </label>

              <input
                id={id}
                name={key}
                type="text"
                autoComplete={auto}
                placeholder={label}
                value={editForm[key] || ""}
                onChange={(e) =>
                  setEditForm((prev) => ({
                    ...prev,
                    [key]: e.target.value,
                  }))
                }
                className="font-[Tenor_Sans] font-normal w-full bg-transparent text-[#555555] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] placeholder-[#AAAAAA] outline-none tracking-wide"
              />
            </div>
          );
        })}
        <div className="flex gap-3 mt-1">
          <button
            type="button"
            aria-label="Save updated address"
            onClick={() => handleSaveEdit(addr.id)}
            className="flex-1 bg-[#111111] hover:bg-[#DD8560] cursor-pointer  transition-all duration-300 text-white font-[Tenor_Sans] font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-[3px] uppercase py-3  "
          >
            Update
          </button>
          <button
            type="button"
            aria-label="Cancel address editing"
            onClick={() => setEditingId(null)}
            className="flex-1 border border-[#111111] hover:bg-[#111111] cursor-pointer  transition-all duration-300 text-[#111111] hover:text-white font-[Tenor_Sans] font-normal text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[19px] tracking-[3px] uppercase py-3 hover:border-[#111111] transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default EditForm;
