"use client"
import React, { useState } from 'react'
import { IoClose, IoLocation, IoAirplane, IoPeople, IoCalendar, IoCheckmarkCircle } from 'react-icons/io5'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface FlightSearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const FlightSearchModal: React.FC<FlightSearchModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    flyingFrom: '',
    flyingTo: '',
    adults: 1,
    children: 0,
    infants: 0,
    departureDate: '',
    returnDate: '',
    cabinClass: 'Economy'
  })

  const steps = [
    { id: 1, title: 'Flying from', icon: IoLocation, completed: !!formData.flyingFrom },
    { id: 2, title: 'Flying to', icon: IoAirplane, completed: !!formData.flyingTo },
    { id: 3, title: 'Who\'s traveling', icon: IoPeople, completed: formData.adults > 0 },
    { id: 4, title: 'Timetable', icon: IoCalendar, completed: !!formData.departureDate }
  ]

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Flight Search</h2>
            <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
              <IoClose size={24} />
            </button>
          </div>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-between mt-6">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step.completed 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : currentStep === step.id 
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'bg-gray-200 border-gray-300 text-gray-500'
                }`}>
                  {step.completed ? <IoCheckmarkCircle size={20} /> : <step.icon size={20} />}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep === step.id ? 'text-blue-200' : 'text-gray-300'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    step.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[60vh] overflow-y-auto">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Where are you flying from?</h3>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for departure city or airport"
                    value={formData.flyingFrom}
                    onChange={(e) => handleInputChange('flyingFrom', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                  />
                  <IoLocation className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['Kathmandu, KTM', 'Delhi, DEL', 'Mumbai, BOM', 'Dubai, DXB'].map((city) => (
                    <button
                      key={city}
                      onClick={() => handleInputChange('flyingFrom', city)}
                      className="p-3 text-left border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-medium">{city.split(',')[0]}</div>
                      <div className="text-sm text-gray-500">{city.split(',')[1]}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Where are you flying to?</h3>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for destination city or airport"
                    value={formData.flyingTo}
                    onChange={(e) => handleInputChange('flyingTo', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                  />
                  <IoAirplane className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['London, LHR', 'Paris, CDG', 'New York, JFK', 'Tokyo, NRT'].map((city) => (
                    <button
                      key={city}
                      onClick={() => handleInputChange('flyingTo', city)}
                      className="p-3 text-left border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                    >
                      <div className="font-medium">{city.split(',')[0]}</div>
                      <div className="text-sm text-gray-500">{city.split(',')[1]}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">Who's traveling?</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700">Passengers</h4>
                  {[
                    { label: 'Adults', desc: 'Age 12+', field: 'adults', min: 1 },
                    { label: 'Children', desc: 'Age 2-11 years', field: 'children', min: 0 },
                    { label: 'Infants', desc: 'Under 2 years', field: 'infants', min: 0 }
                  ].map(({ label, desc, field, min }) => (
                    <div key={field} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{label}</div>
                        <div className="text-sm text-gray-500">{desc}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleInputChange(field, Math.max(min, formData[field as keyof typeof formData] - 1))}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-medium">{formData[field as keyof typeof formData]}</span>
                        <button
                          onClick={() => handleInputChange(field, formData[field as keyof typeof formData] + 1)}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-700">Cabin Class</h4>
                  {['Economy', 'Business', 'First'].map((cabin) => (
                    <label key={cabin} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="cabinClass"
                        value={cabin}
                        checked={formData.cabinClass === cabin}
                        onChange={(e) => handleInputChange('cabinClass', e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="font-medium">{cabin}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800">When are you traveling?</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
                  <input
                    type="date"
                    value={formData.departureDate}
                    onChange={(e) => handleInputChange('departureDate', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Return Date (Optional)</label>
                  <input
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) => handleInputChange('returnDate', e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 text-blue-800">
                  <IoCalendar size={20} />
                  <span className="font-medium">Trip Summary</span>
                </div>
                <div className="mt-2 text-sm text-blue-700">
                  {formData.flyingFrom && formData.flyingTo && (
                    <div>{formData.flyingFrom} → {formData.flyingTo}</div>
                  )}
                  {formData.departureDate && (
                    <div>Departure: {new Date(formData.departureDate).toLocaleDateString()}</div>
                  )}
                  {formData.returnDate && (
                    <div>Return: {new Date(formData.returnDate).toLocaleDateString()}</div>
                  )}
                  <div>Passengers: {formData.adults + formData.children + formData.infants}</div>
                  <div>Cabin: {formData.cabinClass}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-colors ${
              currentStep === 1
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
            }`}
          >
            <FaArrowLeft size={16} />
            <span>Back</span>
          </button>
          
          <button
            onClick={currentStep === 4 ? () => console.log('Search flights:', formData) : handleNext}
            className="flex items-center space-x-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>{currentStep === 4 ? 'Search Flights' : 'Continue'}</span>
            {currentStep < 4 && <FaArrowRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FlightSearchModal
