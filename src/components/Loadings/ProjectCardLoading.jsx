export default function ProjectCardLoading() {
  return (
    <div className="w-full bg-surface-white border border-border-primary rounded-lg min-h-28 p-5">
      <header className="h-11 bg-surface-gray-400 rounded-sm mb-4"></header>
      <div className="flex flex-col gap-3 max-sm:gap-2">
        {[...Array(2)].map((v, i) => (
          <div
            className="flex gap-3 w-full h-9 max-sm:flex-col max-sm:h-fit max-sm:gap-2"
            key={i}
          >
            <div className="h-full w-full bg-surface-gray-400 rounded-sm max-sm:h-8"></div>
            <div className="h-full w-full bg-surface-gray-400 rounded-sm"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
