import { useState } from "react";
import { CloseModelIcon } from "../../components/icons/AdminIcons";
import AdminProfileEditModelHeader from "./AdminProfileEditModelHeader";
import AdminProfileEditModelForm from "./AdminProfileEditModelForm";

function AdminProfileEditModel({
  adminProfile,
  setAdminProfile,
  setshowProfileEditModel,
}) {
  const [form, setForm] = useState(adminProfile);

  const update = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleEdit = () => {
    setAdminProfile(form);
    setshowProfileEditModel(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-99999 flex items-center justify-center  overflow-hidden modal">
        <div className="fixed inset-0 h-full w-full bg-black/40 "></div>

        <div className="relative m-4 w-full max-w-[700px] rounded-3xl bg-white dark:bg-gray-900">
          <button
            onClick={() => setshowProfileEditModel(false)}
            className="absolute cursor-pointer right-3 top-3 z-999 flex h-9.5 w-9.5 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white sm:right-6 sm:top-6 sm:h-11 sm:w-11"
          >
            <CloseModelIcon />
          </button>

          <div>
            <div
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 dark:bg-gray-900 lg:p-11"
            >
              <AdminProfileEditModelHeader />

              <AdminProfileEditModelForm
                form={form}
                update={update}
                handleEdit={handleEdit}
                setshowProfileEditModel={setshowProfileEditModel}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminProfileEditModel;
