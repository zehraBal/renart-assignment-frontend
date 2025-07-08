const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
        <p className="text-gray-600">Loading products...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
