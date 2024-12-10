import React from "react";
import FiveStarRating from "@/components/fivestar";

const CarDetails = () => {
  return (
    <section className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col gap-6">
        {/* Car Title and Reviews */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Nissan GT-R</h2>
          <div className="flex items-center gap-2 mt-2">
            <FiveStarRating rating={3} />
            <span className="text-sm text-gray-600">3/5</span>
          </div>
          <p className="text-gray-600 text-sm mt-1">440+ Reviewers</p>
        </div>

        {/* Car Description */}
        <p className="text-gray-700 text-sm">
          NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the most unforgiving proving ground, the &quot;race track.&quot;
        </p>

        {/* Car Details */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <p className="font-semibold">Type</p>
            <p>Sport</p>
          </div>
          <div>
            <p className="font-semibold">Capacity</p>
            <p>2 People</p>
          </div>
          <div>
            <p className="font-semibold">Steering</p>
            <p>Manual</p>
          </div>
          <div>
            <p className="font-semibold">Fuel</p>
            <p>Gasoline</p>
          </div>
          <div>
            <p className="font-semibold">Fuel Capacity</p>
            <p>70 L</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-gray-800">$80.00 / day</p>
          <p className="line-through text-gray-500">$100.00</p>
        </div>

        {/* Rent Button */}
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Rent Now
        </button>
      </div>
    </section>
  );
};

export default CarDetails;
