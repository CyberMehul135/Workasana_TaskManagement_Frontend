import { useTeamUpdateFormContext } from "../../contexts/TeamUpdateFormContext";
import PopupFormContainer from "../Containers/PopupFormContainer";
import Checkboxes from "../inputs/Checkboxes";

export default function TeamUpdateForm({
  members,
  handleTeamUpdateFormSubmit,
}) {
  const {
    isTeamUpdateFormVisible,
    setIsTeamUpdateFormVisible,
    teamUpdateForm,
    handleTeamUpdateFormOnChange,
  } = useTeamUpdateFormContext();

  return (
    <>
      <PopupFormContainer
        isVisible={isTeamUpdateFormVisible}
        title="Add Team Member"
        submitBtnLabel="Add"
        onCloseBtnClick={() => setIsTeamUpdateFormVisible(false)}
        onSubmit={handleTeamUpdateFormSubmit}
      >
        {/* Checkboxes */}
        <div>
          <h3 className="text-sm font-medium mb-3 mt-1">Select Team Members</h3>
          <div className="flex flex-wrap gap-3">
            {members &&
              members.length > 0 &&
              members.map((member) => (
                <Checkboxes
                  key={member._id}
                  label={member.name}
                  name="members"
                  value={member._id}
                  onChange={handleTeamUpdateFormOnChange}
                  formValuelist={teamUpdateForm.members}
                />
              ))}
          </div>
        </div>
      </PopupFormContainer>
    </>
  );
}
