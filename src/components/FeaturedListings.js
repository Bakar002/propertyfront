import React from "react";
import img1 from "../assests/Serenity Waters Luxury Villa 1.png";
const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      price: "13 AED",
      beds: 5,
      baths: 6,
      area: "829 sqm",
      location: "Villa in Marbella, Andalusia, Spain",
      imageUrl: img1, // Replace with actual image URL
    },
    {
      id: 2,
      price: "13 AED",
      beds: 5,
      baths: 6,
      area: "829 sqm",
      location: "Villa in Marbella, Andalusia, Spain",
      imageUrl: img1,
    },
    {
      id: 3,
      price: "13 AED",
      beds: 5,
      baths: 6,
      area: "829 sqm",
      location: "Villa in Marbella, Andalusia, Spain",
      imageUrl: img1,
    },
    {
      id: 4,
      price: "13 AED",
      beds: 5,
      baths: 6,
      area: "829 sqm",
      location: "Villa in Marbella, Andalusia, Spain",
      imageUrl: img1,
    },
  ];
  const listings1 = [
    {
      id: 1,
      price: "13 AED",
      location: "Villa in Marbella, Andalusia, Spain",
      imageUrl: img1, // Replace with actual image URL
    },
    {
      id: 2,
      price: "13 AED",
      location: "Villa in Marbella, Andalusia, Spain",
      imageUrl: img1,
    },
    {
      id: 3,
      price: "13 AED",
      location: "Villa in Marbella, Andalusia, Spain",
      imageUrl: img1,
    },
    {
      id: 4,
      price: "13 AED",
      location: "Villa in Marbella, Andalusia, Spain",
      imageUrl: img1,
    },
  ];

  return (
    <>
      <div className="px-4 md:px-8 lg:px-16 py-12  border-b   border-[#00603A]">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          Featured Listings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={listing.imageUrl}
                alt={listing.location}
                className="w-full h-72 object-cover"
              />
              {/* Details */}
              <div className="p-4">
                <p className="text-black font-bold text-lg">{listing.price}</p>
                <p className="text-gray-700 text-sm mb-2">
                  {listing.beds} Beds | {listing.baths} Baths | {listing.area}
                </p>
                <p className="text-gray-500 text-sm">{listing.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 py-14 border-b border-[#00603A]">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          Newly Listed Mansions
        </h2>

        {/* Mansions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {listings1.map((listing) => (
            <div
              key={listing.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={listing.imageUrl}
                alt={listing.location}
                className="w-full h-72 object-cover"
              />
              {/* Details */}
              <div className="p-4">
                <p className="text-black font-bold text-lg">{listing.price}</p>
                <p className="text-gray-500 text-sm">{listing.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-6 md:space-y-0">
          <p className="text-gray-600 text-center md:text-left max-w-2xl">
            Discover the exquisite mansions and penthouses that are currently in
            the spotlight and newly available. This curated collection showcases
            the most sought-after properties on the market right now.
          </p>
          <button className="px-20 py-3 mr-0 md:mr-20 text-black font-semibold  border border-black hover:bg-green-600 hover:text-white transition-all duration-300 md:ml-6">
            Discover all
          </button>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-16 py-12   border-b   border-[#00603A]">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          Newly Listed Penthouses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {listings1.map((listing) => (
            <div
              key={listing.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={listing.imageUrl}
                alt={listing.location}
                className="w-full h-72 object-cover"
              />
              {/* Details */}
              <div className="p-4">
                <p className="text-black font-bold text-lg">{listing.price}</p>
                <p className="text-gray-500 text-sm">{listing.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-6 md:space-y-0">
          <p className="text-gray-600 text-center md:text-left max-w-2xl">
            Explore the off-plan and under-construction mansions and penthouses
            gaining attention and recently launched. This exclusive collection
            showcases the most desirable properties from renowned developers and
            private entities in the UAE's freehold areas.
          </p>
          <button className="px-20 py-3 mr-0 md:mr-20 text-black font-semibold  border border-black hover:bg-green-600 hover:text-white transition-all duration-300 md:ml-6">
            Discover all
          </button>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 py-12   border-b   border-[#00603A]">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
          Newly Listed Collectibles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {listings1.map((listing) => (
            <div
              key={listing.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Image */}
              <img
                src={listing.imageUrl}
                alt={listing.location}
                className="w-full h-72 object-cover"
              />
              {/* Details */}
              <div className="p-4">
                <p className="text-black font-bold text-lg">{listing.price}</p>
                <p className="text-gray-500 text-sm">{listing.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 space-y-6 md:space-y-0">
          <p className="text-gray-600 text-center md:text-left max-w-2xl">
            Explore the off-plan and under-construction mansions and penthouses
            gaining attention and recently launched. This exclusive collection
            showcases the most desirable properties from renowned developers and
            private entities in the UAE's freehold areas.
          </p>
          <button className="px-20 py-3 mr-0 md:mr-20 text-black font-semibold  border border-black hover:bg-green-600 hover:text-white transition-all duration-300 md:ml-6">
            Discover all
          </button>
        </div>
      </div>
    </>
  );
};

export default FeaturedListings;
