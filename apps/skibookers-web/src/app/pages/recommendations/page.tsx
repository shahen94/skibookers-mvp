import { Navigate } from "react-router-dom";
import { useGlobalState } from "../../context/app-global";

export const RecommendationsScreen = () => {
  const { recommendations } = useGlobalState();

  if (!recommendations || !recommendations.resorts) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Recommended Ski Resorts
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {recommendations.resorts.map((resort) => (
            <div key={resort.id} className="border rounded-lg p-6 shadow-sm bg-blue-50">
              <h2 className="text-xl font-semibold text-blue-800">{resort.title}</h2>
              <p className="text-sm text-gray-600">
                ${resort.price_min} – ${resort.price_max} per day
              </p>

              <div className="mt-4 flex justify-end">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                  onClick={() => alert(`Booking initiated for ${resort.title}`)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
