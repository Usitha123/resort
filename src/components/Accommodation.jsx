import React from 'react';

const rooms = [
  {
    name: 'DELUXE QUEEN ROOM',
    image: '/images/queen.jpg', // Replace with correct path
  },
  {
    name: 'DELUXE KING ROOM',
    image: '/images/king.jpg', // Replace with correct path
  },
  {
    name: 'TWO BEDROOM BUNGALOW',
    image: '/images/bungalow.jpg', // Replace with correct path
  },
];

const Accommodation = () => {
  return (
    <div className="bg-[#4B4725] py-16 px-4 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-light mb-12">Accommodation</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {rooms.map((room, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={room.image}
              alt={room.name}
              className="w-full h-80 object-cover transform transition duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-sm border-t border-white/50 pt-2">{room.name}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 text-sm text-white/80 hover:text-white underline">
        View All Rooms →
      </button>
    </div>
  );
};

export default Accommodation;
