import FormInput from "../../components/common/FormInput";
function AdminProfileEditModelForm({
  form,
  update,
  handleEdit,
  setshowProfileEditModel,
}) {
  return (
    <>
      <form className="flex flex-col">
        <div className="custom-scrollbar h-[450px] overflow-y-auto px-2 pb-3">
          <div>
            <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
              Social Links
            </h5>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
              <div>
                <FormInput
                  label="Facebook"
                  value={form.Facebook}
                  onChange={update("Facebook")}
                  placeholder="Facebook Link"
                  required
                  labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  inputClassName="h-11 dark:bg-gray-900 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-[#C9A84C] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-[#C9A84C]"
                />
              </div>

              <div>
                <FormInput
                  label="X.com"
                  value={form.Xcom}
                  onChange={update("Xcom")}
                  placeholder="X.com Link"
                  required
                  labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  inputClassName="h-11 dark:bg-gray-900 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-[#C9A84C] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-[#C9A84C]"
                />
              </div>

              <div>
                <FormInput
                  label="Linkedin"
                  value={form.Linkedin}
                  onChange={update("Linkedin")}
                  placeholder="Linkedin Link"
                  required
                  labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  inputClassName="h-11 dark:bg-gray-900 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-[#C9A84C] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-[#C9A84C]"
                />
              </div>

              <div>
                <FormInput
                  label="Instagram"
                  value={form.Instagram}
                  onChange={update("Instagram")}
                  placeholder="Instagram Link"
                  required
                  labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  inputClassName="h-11 dark:bg-gray-900 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-[#C9A84C] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-[#C9A84C]"
                />
              </div>
            </div>
          </div>

          <div className="mt-7">
            <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">
              Personal Information
            </h5>

            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
              <div className="col-span-2 lg:col-span-1">
                <FormInput
                  label="First Name"
                  value={form.firstName}
                  onChange={update("firstName")}
                  placeholder="First Name"
                  required
                  labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  inputClassName="h-11 dark:bg-gray-900 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-[#C9A84C] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-[#C9A84C]"
                />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <FormInput
                  label="Last Name"
                  value={form.lastName}
                  onChange={update("lastName")}
                  placeholder="Last Name"
                  required
                  labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  inputClassName="h-11 dark:bg-gray-900 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-[#C9A84C] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-[#C9A84C]"
                />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <FormInput
                  label="Email Address"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="Email Address"
                  type="email"
                  required
                  labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  inputClassName="h-11 dark:bg-gray-900 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-[#C9A84C] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-[#C9A84C]"
                />
              </div>

              <div className="col-span-2 lg:col-span-1">
                <FormInput
                  label="Phone"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="Phone Number"
                  required
                  labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  inputClassName="h-11 dark:bg-gray-900 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-[#C9A84C] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-[#C9A84C]"
                />
              </div>

              <div className="col-span-2">
                <FormInput
                  label="Bio"
                  value={form.bio}
                  onChange={update("bio")}
                  placeholder="Bio"
                  required
                  labelClassName="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
                  inputClassName="h-11 dark:bg-gray-900 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-[#C9A84C] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-[#C9A84C]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 px-2 lg:justify-end">
          <button
            type="button"
            onClick={() => setshowProfileEditModel(false)}
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
    </>
  );
}

export default AdminProfileEditModelForm;
