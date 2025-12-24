import { useTeamContext } from "../../contexts/TeamContext";
import { useTeamFormContext } from "../../contexts/TeamFormContext";
import PopupFormContainer from "../Containers/PopupFormContainer";
import Checkboxes from "../inputs/Checkboxes";
import Input from "../inputs/Input";

export default function TeamForm({ members, handleTeamFormSubmit }) {
  const {
    isTeamFormVisible,
    setIsTeamFormVisible,
    teamForm,
    handleTeamFormOnChange,
  } = useTeamFormContext();
  const { teamCreateLoading } = useTeamContext();

  return (
    <>
      <PopupFormContainer
        isVisible={isTeamFormVisible}
        title="Create New Team"
        submitBtnLabel="Create"
        onCloseBtnClick={() => setIsTeamFormVisible(false)}
        onSubmit={handleTeamFormSubmit}
        loading={teamCreateLoading}
      >
        <Input
          label="Name"
          id="name"
          name="name"
          placeholder="Please enter Team name..."
          value={teamForm.name}
          onChange={handleTeamFormOnChange}
        />

        <Input
          label="Description"
          id="description"
          name="description"
          placeholder="Please enter description..."
          value={teamForm.description}
          onChange={handleTeamFormOnChange}
        />

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
                  onChange={handleTeamFormOnChange}
                  formValuelist={teamForm.members}
                />
              ))}
          </div>
        </div>
      </PopupFormContainer>
    </>
  );
}
