import React from 'react'

interface DestinationCardProps {
  city: string
  country: string
  price: string
  miles: string
  currency: string
  image?: string
}

const DestinationCard: React.FC<DestinationCardProps> = ({ city, country, price, miles, image }) => {
  return (
    <div className="bg-white rounded-xl w-[500px] shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
      <div className="h-[400px]  bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden">
        {/* Background Image or Gradient */}
        {image ? (
          <img
            src={image}
            alt={`${city}, ${country}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"></div>
        )}

        {/* Overlay - Increased opacity on hover */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300"></div>

        {/* Badge */}
        <div className="absolute top-3 left-3 bg-gray-800/90 text-white text-xs px-3 py-1.5 rounded-full font-medium">
          Round trip - Economy
        </div>

        {/* Price and Miles at Bottom */}
        <div className="absolute bottom-4 left-4 text-white">
          <h4 className="font-bold"> {city}, {country}</h4>
          <p className="text-blue-100">From {price} or {miles}</p>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard
