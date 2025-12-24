import ProjectCardLoading from "../Loadings/ProjectCardLoading";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ data, loading, error }) {
  if (loading) {
    return (
      <div className="grid gap-4 grid-cols-3 max-[900px]:grid-cols-2 max-sm:grid-cols-1 mt-8">
        {[...Array(6)].map((v, i) => (
          <ProjectCardLoading key={i} />
        ))}
      </div>
    );
  }
  if (error) return <p>{error}</p>;
  if (data) {
    return (
      <div className="grid gap-4 grid-cols-3 max-[900px]:grid-cols-2 max-sm:grid-cols-1 mt-8">
        {data?.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    );
  }
}
