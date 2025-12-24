export default function TaskTableLoading() {
  return (
    <div className="w-full bg-surface-white border border-border-primary rounded-lg min-h-28 p-5">
      <header className="h-12 bg-surface-gray-400 rounded-sm mb-4"></header>
      <div className="flex flex-col gap-4">
        {[...Array(5)].map((v, i) => (
          <div className="flex gap-2 w-full h-9" key={i}>
            <div className="h-full w-full bg-surface-gray-400 rounded-sm"></div>
            <div className="h-full w-full bg-surface-gray-400 rounded-sm max-sm:hidden"></div>
            <div className="h-full w-full bg-surface-gray-400 rounded-sm max-sm:hidden"></div>
            <div className="h-full w-full bg-surface-gray-400 rounded-sm max-sm:hidden"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
