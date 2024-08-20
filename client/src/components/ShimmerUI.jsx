const ShimmerUI = () => {
  return Array.from({ length: 12 }).map((el) => (
    <div className="h-[400px] bg-white w-[360px] rounded-md">
      <div className="h-[300px] bg-gray-200 rounded-md mb-4"></div>
      <div className="h-[20px] bg-gray-200 rounded-md mb-4"></div>
      <div className="h-[20px] bg-gray-200 rounded-md"></div>
    </div>
  ));
};

export default ShimmerUI;
