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
    <div className="md:w-[500px] w-auto md:px-0 px-1 group cursor-pointer rounded-[30px] overflow-hidden shadow-lg shadow-black ">
      <div className="h-[400px]  flex items-center justify-center relative overflow-hidden">
        {/* Background Image or Gradient */}
        {image ? (
          <Image
            src={image}
            width={500}
            height={400}
            alt={`${city}, ${country}`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <div className="absolute inset-0 "></div>
        )}

        {/* Overlay - Increased opacity on hover */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>

        {/* Badge */}
        

        {/* Price and Miles at Bottom */}
        <div className="absolute bottom-4 left-4 text-white">
          <h4 className="font-bold text-lg mb-1"> {city}, {country}</h4>
          <p className="text-yellow-100 text-sm">From {price} or {miles}</p>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard
