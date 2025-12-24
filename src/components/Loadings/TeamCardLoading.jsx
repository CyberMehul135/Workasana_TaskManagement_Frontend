export default function TeamCardLoading() {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 mt-8">
      {[...Array(4)].map((v, i) => (
        <div
          key={i}
          className="p-6 bg-surface-white rounded-lg border border-border-primary min-h-[200px] max-sm:min-h-[160px]"
        >
          <div className="w-full h-[25%] bg-surface-gray-400 rounded-lg"></div>
          <div className="w-full h-[30%] mt-2 flex gap-1">
            <div className="w-full h-full bg-surface-gray-400 rounded-lg"></div>
            <div className="w-full h-full bg-surface-gray-400 rounded-lg"></div>
          </div>
          <div className="w-full h-[30%] mt-2 flex gap-1">
            <div className="w-full h-full bg-surface-gray-400 rounded-lg"></div>
            <div className="w-full h-full bg-surface-gray-400 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
