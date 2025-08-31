"use client"
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { IoAirplane, IoCalendar, IoCheckmarkCircle, IoClose, IoLocation, IoPeople } from 'react-icons/io5'

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
    { id: 3, title: 'Who\'s traveling', icon: IoPeople, completed: currentStep > 3 || (currentStep === 3 && formData.adults > 0) },
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

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleClose = () => {
    // Reset state when closing
    setCurrentStep(1)
    setFormData({
      flyingFrom: '',
      flyingTo: '',
      adults: 1,
      children: 0,
      infants: 0,
      departureDate: '',
      returnDate: '',
      cabinClass: 'Economy'
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-white/10 w-full max-w-4xl max-h-[85vh] lg:max-h-[85vh] max-h-[95vh] overflow-hidden">
        {/* Header */}
        <div className=" text-white p-4 lg:p-6 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <div>
                <h2 className="text-xl lg:text-2xl font-bold mb-1">Flight Search</h2>
                <p className="  text-sm lg:text-base">Plan your journey with Himalaya Jet</p>
              </div>
              <button onClick={handleClose} className="text-white hover:text-amber-300 transition-colors p-2 rounded-full hover:bg-white/10">
                <IoClose size={20} />
              </button>
            </div>
            
            {/* Progress Steps */}
            <div className="hidden lg:flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 transition-all duration-300 ${
                    step.completed 
                      ? 'bg-emerald-500 border-emerald-400 text-white shadow-lg' 
                      : currentStep === step.id 
                      ? 'bg-amber-500 border-amber-400 text-white shadow-lg'
                      : 'bg-white/10 border-white/20 text-white/60'
                  }`}>
                    {step.completed ? <IoCheckmarkCircle size={16} /> : <step.icon size={16} />}
                  </div>
                  <span className={`ml-2 text-xs lg:text-sm font-medium transition-colors duration-300 ${
                    currentStep === step.id ? 'text-white' : ' '
                  }`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div className={`w-8 lg:w-16 h-0.5 mx-2 lg:mx-4 transition-all duration-300 ${
                      step.completed ? 'bg-emerald-400' : 'bg-white/20'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 lg:p-6 max-h-[55vh] lg:max-h-[55vh] max-h-[60vh] overflow-y-auto">
          {currentStep === 1 && (
            <div className="space-y-4 lg:space-y-6">
              <div className="text-center mb-4 lg:mb-6">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Where are you flying from?</h3>
                <p className="text-gray-300 text-sm">Select your departure airport or city</p>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for departure city or airport"
                    value={formData.flyingFrom}
                    onChange={(e) => handleInputChange('flyingFrom', e.target.value)}
                    className="w-full p-3 lg:p-4 border-2 border-white/20 rounded-lg focus:border-amber-500 focus:outline-none text-base text-white placeholder-gray-400 bg-white/5 backdrop-blur-sm transition-all duration-300"
                  />
                  <IoLocation className="absolute right-3 lg:right-4 top-1/2 transform -translate-y-1/2 text-amber-500" size={18} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['London, LHR', 'Paris, CDG', 'New York, JFK', 'Dubai, DXB'].map((city) => (
                    <button
                      key={city}
                      onClick={() => handleInputChange('flyingFrom', city)}
                      className="p-3 text-left border border-white/20 rounded-lg hover:border-amber-500 hover:bg-white/5 transition-all duration-300 text-white bg-white/5 backdrop-blur-sm"
                    >
                      <div className="font-semibold text-base">{city.split(',')[0]}</div>
                      <div className="text-sm text-amber-400">{city.split(',')[1]}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4 lg:space-y-6">
              <div className="text-center mb-4 lg:mb-6">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Where are you flying to?</h3>
                <p className="text-gray-300 text-sm">Choose your destination</p>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for destination city or airport"
                    value={formData.flyingTo}
                    onChange={(e) => handleInputChange('flyingTo', e.target.value)}
                    className="w-full p-3 lg:p-4 border-2 border-white/20 rounded-lg focus:border-amber-500/70 focus:outline-none text-base text-white placeholder-gray-400 bg-white/5 backdrop-blur-sm transition-all duration-300"
                  />
                  <IoAirplane className="absolute right-3 lg:right-4 top-1/2 transform -translate-y-1/2 text-amber-500/70" size={18} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Kathmandu, KTM', 'Delhi, DEL', 'Mumbai, BOM', 'Tokyo, NRT'].map((city) => (
                    <button
                      key={city}
                      onClick={() => handleInputChange('flyingTo', city)}
                      className="p-3 text-left border border-white/20 rounded-lg hover:border-amber-500 hover:bg-white/5 transition-all duration-300 text-white bg-white/5 backdrop-blur-sm"
                    >
                      <div className="font-semibold text-base">{city.split(',')[0]}</div>
                      <div className="text-sm text-amber-400">{city.split(',')[1]}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4 lg:space-y-6">
              <div className="text-center mb-4 lg:mb-6">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">Who&apos;s traveling?</h3>
                <p className="text-gray-300 text-sm">Select passengers and cabin class</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-white mb-3">Passengers</h4>
                  {[
                    { label: 'Adults', desc: 'Age 12+', field: 'adults', min: 1 },
                    { label: 'Children', desc: 'Age 2-11 years', field: 'children', min: 0 },
                    { label: 'Infants', desc: 'Under 2 years', field: 'infants', min: 0 }
                  ].map(({ label, desc, field, min }) => (
                    <div key={field} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                      <div>
                        <div className="font-semibold text-white text-base">{label}</div>
                        <div className="text-sm text-gray-300">{desc}</div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleInputChange(field, Math.max(min, (formData[field as keyof typeof formData] as number) - 1))}
                          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-amber-500 hover:bg-white/10 text-white transition-all duration-300"
                        >
                          -
                        </button>
                        <span className="w-10 text-center font-bold text-white text-lg">{formData[field as keyof typeof formData]}</span>
                        <button
                          onClick={() => handleInputChange(field, (formData[field as keyof typeof formData] as number) + 1)}
                          className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-amber-500 hover:bg-white/10 text-white transition-all duration-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-white mb-3">Cabin Class</h4>
                  <div className="space-y-3">
                    {['Economy', 'Business', 'First'].map((cabin) => (
                      <label key={cabin} className="flex items-center space-x-3 cursor-pointer p-3 bg-white/5 rounded-lg border border-white/10 hover:border-amber-500 hover:bg-white/10 transition-all duration-300">
                        <input
                          type="radio"
                          name="cabinClass"
                          value={cabin}
                          checked={formData.cabinClass === cabin}
                          onChange={(e) => handleInputChange('cabinClass', e.target.value)}
                          className="w-4 h-4 text-amber-500"
                        />
                        <span className="font-semibold text-white text-base">{cabin}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4 lg:space-y-6">
              <div className="text-center mb-4 lg:mb-6">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2">When are you traveling?</h3>
                <p className="text-gray-300 text-sm">Select your travel dates</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label className="block text-base font-semibold text-white mb-2">Departure Date</label>
                  <input
                    type="date"
                    value={formData.departureDate}
                    onChange={(e) => handleInputChange('departureDate', e.target.value)}
                    className="w-full p-3 lg:p-4 border-2 border-white/20 rounded-lg focus:border-amber-500/70 focus:outline-none text-white bg-white/5 backdrop-blur-sm transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-white mb-2">Return Date (Optional)</label>
                  <input
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) => handleInputChange('returnDate', e.target.value)}
                    className="w-full p-3 lg:p-4 border-2 border-white/20 rounded-lg focus:border-amber-500/70 focus:outline-none text-white bg-white/5 backdrop-blur-sm transition-all duration-300"
                  />
                </div>
              </div>
              <div className="bg-amber-700/20 p-4 rounded-xl border border-white/20">
                <div className="flex items-center space-x-2 text-amber-300 mb-3">
                  <IoCalendar size={18} className="lg:w-5 lg:h-5" />
                  <span className="font-semibold text-lg">Trip Summary</span>
                </div>
                <div className="space-y-1 text-amber-200 text-sm">
                  {formData.flyingFrom && formData.flyingTo && (
                    <div className="font-medium">{formData.flyingFrom} → {formData.flyingTo}</div>
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
        <div className="border-t border-white/10 p-4 lg:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
              currentStep === 1
                ? 'border-white/10 text-white/40 cursor-not-allowed'
                : 'border-white/20 text-white hover:border-amber-500 hover:bg-white/10'
            }`}
          >
            <FaArrowLeft size={16} />
            <span className="font-semibold">Back</span>
          </button>
          
          <button
            onClick={currentStep === 4 ? () => console.log('Search flights:', formData) : handleNext}
            className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold shadow-lg"
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
