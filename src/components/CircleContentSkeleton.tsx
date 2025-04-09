const CircleContentSkeleton = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-row justify-center gap-6 w-full">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-col items-center">
            <div className="skeleton h-16 w-16 rounded-full mb-3"></div>
            <div className="skeleton h-4 w-24 mb-2"></div>
            <div className="skeleton h-3 w-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircleContentSkeleton;
