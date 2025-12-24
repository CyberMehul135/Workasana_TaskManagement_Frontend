import Button from "../components/Buttons/Button";
import Header from "../components/Header/Header";
import Heading1 from "../components/Headings/Heading1";
import Sidebar from "../components/Sidebar/Sidebar";
import Input from "../components/inputs/Input";
import { useUserUpdateForm } from "../contexts/UserUpdateForm";
import { useAuthContext } from "../contexts/AuthContext.";

export default function Settings() {
  const { userUpdateForm, handleUserUpdateForm } = useUserUpdateForm();
  const { updateUserDetails, userUpdateLoading, user } = useAuthContext();

  const handleUserUpdateFormSubmit = async (e) => {
    e.preventDefault();
    await updateUserDetails(user?.user?._id, userUpdateForm);
  };

  return (
    <>
      <div className="flex max-lg:flex-col">
        <Sidebar />
        <Header />
        <main className="flex-1 h-screen min-h-screen overflow-y-scroll bg-surface-primary p-9 max-sm:mt-16 max-sm:pt-12 max-sm:p-3.5">
          <Heading1
            heading="Settings"
            subHeading="Manage your account and preferences."
            className="mb-8"
          />

          <div className="p-6 max-sm:p-5 max-w-[700px] bg-surface-white border border-border-primary rounded-xl">
            <h3 className="text-lg font-medium mb-6 max-sm:text-xl max-sm:font-semibold">
              Profile
            </h3>
            <form onSubmit={handleUserUpdateFormSubmit}>
              <Input
                label="Name"
                type="text"
                id="name"
                name="name"
                value={userUpdateForm.name}
                onChange={handleUserUpdateForm}
                placeholder="Please enter name"
              />
              <Input
                label="Email"
                type="email"
                id="email"
                name="email"
                value={userUpdateForm.email}
                onChange={handleUserUpdateForm}
                placeholder="john@gmail.com"
              />
              <Button
                label={userUpdateLoading ? "Loading..." : "Save Changes"}
                className="mt-6 max-w-fit py-2 px-4 max-sm:max-w-full max-sm:justify-center max-sm:text-base"
              />
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
