function PersonalInformation({ adminProfile, setshowProfileEditModel }) {
  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg 3xl:text-2xl font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
              Personal Information
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="mb-2 text-xs 3xl:text-[16px] text-gray-500 dark:text-gray-400">
                  First Name
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {adminProfile.firstName}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs 3xl:text-[16px] text-gray-500 dark:text-gray-400">
                  Last Name
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {adminProfile.lastName}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs 3xl:text-[16px] text-gray-500 dark:text-gray-400">
                  Email address
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {adminProfile.email}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs 3xl:text-[16px] text-gray-500 dark:text-gray-400">
                  Phone
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {adminProfile.phone}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs 3xl:text-[16px] text-gray-500 dark:text-gray-400">
                  Bio
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  {adminProfile.bio}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setshowProfileEditModel(true)}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm 2xl:text-[16px] 3xl:text-[18px]  font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-auto"
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default PersonalInformation;
