import React from 'react'
import Image from 'next/image'
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
    <div className="professional-card w-[500px] group cursor-pointer">
      <div className="h-[400px] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden">
        {/* Background Image or Gradient */}
        {image ? (
          <Image
            src={image}
            height={500}
            width={500}
            alt={`${city}, ${country}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"></div>
        )}

        {/* Overlay - Increased opacity on hover */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-300"></div>

        {/* Badge */}
        <div className="absolute top-3 left-3 glass-light px-3 py-1.5 rounded-full font-medium text-white text-xs">
          Round trip - Economy
        </div>

        {/* Price and Miles at Bottom */}
        <div className="absolute bottom-4 left-4 text-white">
          <h4 className="font-bold text-lg mb-1"> {city}, {country}</h4>
          <p className="text-blue-100 text-sm">From {price} or {miles}</p>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard
