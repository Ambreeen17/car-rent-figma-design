import React from "react";

interface FiveStarProps {
  rating: number; // Current rating (out of 5)
}

const FiveStar: React.FC<FiveStarProps> = ({ rating }) => {
  // Clamp the rating between 0 and 5 to prevent invalid input
  const clampedRating = Math.max(0, Math.min(rating, 5));

  return (
    <div className="flex items-center gap-1">
      {/* Render 5 stars dynamically based on the rating */}
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-colors duration-300 ${
            index < clampedRating ? "text-yellow-400" : "text-gray-300"
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          aria-label={`Star ${index + 1}`}
        >
          <path d="M12 .587l3.668 7.425 8.213 1.195-5.941 5.787 1.4 8.171L12 18.896l-7.34 3.868 1.4-8.171L.12 9.207l8.213-1.195L12 .587z" />
        </svg>
      ))}
      {/* Accessible rating text */}
      <span className="text-sm text-gray-600 ml-2">
        {clampedRating} / 5
      </span>
    </div>
  );
};

export default FiveStar;
