import React from 'react';
import Image from 'next/image';

const FeaturedCar = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive flex container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* First Car Section */}
          <div className="flex-1 bg-[#3563E9] p-6 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug mb-4">
                The Best Platform for Car Rental
              </h1>
              <p className="text-white text-sm lg:text-base mb-6">
                Ease of doing a car rental safely and reliably. Of course at a low price.
              </p>
              <button className="bg-[#54A6FF] text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-blue-400 transition-colors">
                Rent a Car
              </button>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src="/Image7.png"
                
                alt="Car Image 1"
                width={300}
                height={160}
                className="object-contain rounded-md"
              />
            </div>
          </div>

          {/* Second Car Section */}
          <div className="flex-1 bg-[#54A6FF] p-6 rounded-lg shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <h1 className="text-white text-2xl lg:text-3xl font-bold leading-snug mb-4">
                Easy Way to Rent a Car at a Low Price
              </h1>
              <p className="text-white text-sm lg:text-base mb-6">
                Providing cheap car rental services and safe and comfortable facilities.
              </p>
              <button className="bg-[#3563E9] text-white py-2 px-6 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors">
                Login
              </button>
            </div>
            <div className="mt-6 flex justify-center">
              <Image
                src="/image 8.png"
                alt="Car Image 2"
                width={300}
                height={160}
                className="object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCar;
