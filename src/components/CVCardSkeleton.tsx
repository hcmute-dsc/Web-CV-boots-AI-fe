const CVCardSkeleton = () => {
  return (
    <div className="card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="relative h-64">
        <div className="skeleton h-full w-full rounded-lg"></div>
      </div>
      <div className="p-6">
        <div className="flex gap-3 items-center mb-4">
          <div className="skeleton h-10 w-10 rounded-full"></div>
          <div className="flex-1">
            <div className="skeleton h-5 w-3/4 mb-2"></div>
            <div className="skeleton h-4 w-5/6"></div>
          </div>
        </div>
        <div className="skeleton h-4 w-full mb-2"></div>
        <div className="skeleton h-4 w-5/6 mb-4"></div>
        <div className="flex justify-end">
          <div className="skeleton h-10 w-32 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default CVCardSkeleton;
