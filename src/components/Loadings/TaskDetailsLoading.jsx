export default function TaskDetailsLoading() {
  return (
    <div className="w-full bg-surface-white border border-border-primary rounded-lg min-h-28 p-8 max-sm:p-3">
      <header className="h-12 bg-surface-gray-400 rounded-sm mb-4"></header>
      <div className="flex flex-col gap-4 max-sm:gap-2">
        {[...Array(5)].map((v, i) => (
          <div
            className="flex gap-4 w-full h-12 max-sm:flex-col max-sm:h-fit max-sm:gap-2"
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
