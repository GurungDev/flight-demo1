interface DestinationCardProps {
  city: string
  country: string
  price: string
  image?: string
  onClick?: () => void
}

export default function DestinationCard({ city, country, price, image, onClick }: DestinationCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={`${city}, ${country}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-white text-center">
            <div className="text-2xl font-bold">{city}</div>
            <div className="text-blue-100">{country}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-lg font-bold">{city}</div>
          <div className="text-sm text-blue-100">{country}</div>
        </div>
      </div>
      <div className="p-4">
        <div className="text-lg font-semibold text-gray-900">{city}</div>
        <div className="text-sm text-gray-600 mb-2">{country}</div>
        <div className="text-blue-600 font-semibold">{price}</div>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
          Book now
        </button>
      </div>
    </div>
  )
}
