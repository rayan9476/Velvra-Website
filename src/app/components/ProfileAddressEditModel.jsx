import FormInput from "./common/FormInput";
import { useState } from "react";

function ProfileAddressEditModel({
  adminProfile,
  setAdminProfile,
  setshowProfileAddressEditModel,
}) {
  const [form, setForm] = useState(adminProfile);

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleEdit = () => {
    setAdminProfile(form);
    setshowProfileAddressEditModel(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-99999 flex items-center justify-center  overflow-hidden modal">
        <div className="fixed inset-0 h-full w-full bg-black/40 "></div>

        <div className="relative m-4 w-full max-w-[700px] rounded-3xl bg-white dark:bg-gray-900">
          <button
            onClick={() => setshowProfileAddressEditModel(false)}
            className="absolute cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.04289 16.5413C5.65237 16.9318 5.65237 17.565 6.04289 17.9555C6.43342 18.346 7.06658 18.346 7.45711 17.9555L11.9987 13.4139L16.5408 17.956C16.9313 18.3466 17.5645 18.3466 17.955 17.956C18.3455 17.5655 18.3455 16.9323 17.955 16.5418L13.4129 11.9997L17.955 7.4576C18.3455 7.06707 18.3455 6.43391 17.955 6.04338C17.5645 5.65286 16.9313 5.65286 16.5408 6.04338L11.9987 10.5855L7.45711 6.0439C7.06658 5.65338 6.43342 5.65338 6.04289 6.0439C5.65237 6.43442 5.65237 7.06759 6.04289 7.45811L10.5845 11.9997L6.04289 16.5413Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <div>
            <div
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11"
            >
              {" "}
              <div className="px-2 pr-14">
                <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                  Edit Address
                </h4>

                <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                  Update your details to keep your profile up-to-date.
                </p>
              </div>
              <form className="flex flex-col">
                <div className="px-2 overflow-y-auto custom-scrollbar ">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <div>
                      <FormInput
                        label="Country"
                        value={form.country}
                        onChange={update("country")}
                        placeholder="Enter Country"
                        required
                        labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                        inputClassName="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[#C9A84C] dark:border-gray-700 dark:focus:border-[#C9A84C]"
                      />
                    </div>

                    <div>
                      <FormInput
                        label="City/State"
                        value={form.state}
                        onChange={update("state")}
                        placeholder="Enter City/State"
                        required
                        labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                        inputClassName="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[#C9A84C] dark:border-gray-700 dark:focus:border-[#C9A84C]"
                      />
                    </div>

                    <div>
                      <FormInput
                        label="Postal Code"
                        value={form.postalCode}
                        onChange={update("postalCode")}
                        placeholder="Enter Postal Code"
                        required
                        labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                        inputClassName="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[#C9A84C] dark:border-gray-700 dark:focus:border-[#C9A84C]"
                      />
                    </div>

                    <div>
                      <FormInput
                        label="TAX ID"
                        value={form.taxId}
                        onChange={update("taxId")}
                        placeholder="Enter TAX ID"
                        required
                        labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                        inputClassName="h-11 w-full rounded-lg border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 bg-transparent text-gray-800 border-gray-300 focus:border-[#C9A84C] dark:border-gray-700 dark:focus:border-[#C9A84C]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                  <button
                    type="button"
                    onClick={() => setshowProfileAddressEditModel(false)}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-gray-700 ring-1 ring-inset ring-gray-300 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300"
                  >
                    Close
                  </button>

                  <button
                    type="button"
                    onClick={handleEdit}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium bg-[#C9A84C]  hover:bg-[#b8963f] text-[#111111] shadow-theme-xs transition hover:bg-brand-600 disabled:bg-brand-300"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileAddressEditModel;
