const Card = () => {
  const cars = [
    {
      name: 'Koenigsegg',
      type: 'Sport',
      fuel: '90L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '$99.00/day',
      oldPrice: null,
    },
    {
      name: 'Nissan GT-R',
      type: 'Sport',
      fuel: '80L',
      transmission: 'Manual',
      capacity: '2 People',
      price: '$80.00/day',
      oldPrice: '$100.00',
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Recent Cars</h2>
          <button className="text-blue-600 hover:underline mt-4 md:mt-0">View All</button>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-md p-6 bg-white transform hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
            >
              {/* Car Name */}
              <h3 className="text-xl font-semibold text-gray-800">{car.name}</h3>

              {/* Car Type */}
              <p className="text-gray-500 text-sm">{car.type}</p>

              {/* Car Details */}
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-semibold">Fuel</p>
                  <p>{car.fuel}</p>
                </div>
                <div>
                  <p className="font-semibold">Transmission</p>
                  <p>{car.transmission}</p>
                </div>
                <div>
                  <p className="font-semibold">Capacity</p>
                  <p>{car.capacity}</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-gray-800">{car.price}</p>
                  {car.oldPrice && (
                    <p className="text-sm text-gray-500 line-through">{car.oldPrice}</p>
                  )}
                </div>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
