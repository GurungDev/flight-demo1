'use client'

import { useState } from 'react'

export default function FlightSearch() {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: '1 Adult',
    class: 'Economy'
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Search data:', searchData)
    // Here you would typically send the search data to your backend
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <h3 className="text-2xl font-semibold mb-6 text-white">Search flights</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-100 mb-2">From</label>
            <input 
              type="text" 
              name="from"
              value={searchData.from}
              onChange={handleInputChange}
              placeholder="Departure city" 
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-100 mb-2">To</label>
            <input 
              type="text" 
              name="to"
              value={searchData.to}
              onChange={handleInputChange}
              placeholder="Destination city" 
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-100 mb-2">Depart</label>
            <input 
              type="date" 
              name="departDate"
              value={searchData.departDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-100 mb-2">Return</label>
            <input 
              type="date" 
              name="returnDate"
              value={searchData.returnDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-blue-100 mb-2">Passengers</label>
            <select 
              name="passengers"
              value={searchData.passengers}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
              <option>1 Adult + 1 Child</option>
              <option>2 Adults + 1 Child</option>
              <option>2 Adults + 2 Children</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-100 mb-2">Class</label>
            <select 
              name="class"
              value={searchData.class}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            >
              <option>Economy</option>
              <option>Business</option>
              <option>First</option>
            </select>
          </div>
        </div>
        
        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Search flights
        </button>
      </form>
    </div>
  )
}
