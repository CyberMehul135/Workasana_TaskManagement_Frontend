import { useProjectContext } from "../../contexts/ProjectContext";
import { useProjectFormContext } from "../../contexts/ProjectFormContext";
import PopupFormContainer from "../Containers/PopupFormContainer";
import Input from "../inputs/Input";

export default function ProejctForm() {
  const { create } = useProjectContext();
  const {
    projectForm,
    handleProjectFormOnChange,
    setIsProjectFormVisible,
    isProjectFormVisible,
    resetProjectForm,
  } = useProjectFormContext();

  async function handleSubmit(e) {
    e.preventDefault();
    await create(projectForm);
    resetProjectForm();
    setIsProjectFormVisible(false);
  }

  return (
    <PopupFormContainer
      isVisible={isProjectFormVisible}
      title="Create New Project"
      submitBtnLabel="Create"
      onCloseBtnClick={() => setIsProjectFormVisible(false)}
      onSubmit={handleSubmit}
    >
      <Input
        label="Project Name"
        placeholder="Enter project name..."
        type="text"
        id="name"
        name="name"
        value={projectForm.name}
        onChange={handleProjectFormOnChange}
      />
      <Input
        label="Project Description"
        placeholder="Enter project description..."
        type="text"
        id="description"
        name="description"
        value={projectForm.description}
        onChange={handleProjectFormOnChange}
      />
    </PopupFormContainer>
  );
}
