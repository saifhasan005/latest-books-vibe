import { AlertTriangle, RefreshCw } from "lucide-react";

const FetchError = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center px-4">
      
      {/* Icon */}
      <div className="bg-red-100 p-4 rounded-full mb-4 animate-pulse">
        <AlertTriangle className="text-red-600 w-10 h-10" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Something went wrong
      </h2>

      {/* Message */}
      <p className="text-gray-500 max-w-md mb-6">
        {message || "We couldn’t fetch the data. Please try again."}
      </p>

      {/* Retry Button */}
      <button
        onClick={onRetry}
        className="flex items-center gap-2 px-5 py-2 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition"
      >
        <RefreshCw className="w-4 h-4" />
        Retry
      </button>
    </div>
  );
};

export default FetchError;