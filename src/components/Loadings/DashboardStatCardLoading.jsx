export default function DashboardStatCardLoading() {
  return (
    <div className="grid grid-cols-4 gap-3 mb-8">
      {[...Array(4)].map((v, i) => (
        <div
          key={i}
          className="p-5 bg-surface-white border border-border-primary rounded-xl h-22 flex flex-col gap-2"
        >
          <div className="w-full h-[50%] bg-surface-gray-400 rounded-md"></div>
          <div className="w-full h-[50%] bg-surface-gray-400 rounded-md"></div>
        </div>
      ))}
    </div>
  );
}
