import PersonalInformation from "./PersonalInformation";
import Address from "./Address";
import ProfileHeader from "./ProfileHeader";

function Profile({
  admin,
  adminProfile,
  setshowProfileEditModel,
  setshowProfileAddressEditModel,
}) {
  return (
    <>
      <div className="p-4 mx-auto h-full md:p-6">
        <div className="h-full rounded-2xl  border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]  lg:p-6">
          <h3 className="mb-5 text-lg 3xl:text-2xl font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
            Profile
          </h3>

          <div className="space-y-6 h-full">
            <ProfileHeader
              admin={admin}
              adminProfile={adminProfile}
              setshowProfileEditModel={setshowProfileEditModel}
            />

            <PersonalInformation
              adminProfile={adminProfile}
              setshowProfileEditModel={setshowProfileEditModel}
            />

            <Address
              adminProfile={adminProfile}
              setshowProfileAddressEditModel={setshowProfileAddressEditModel}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
