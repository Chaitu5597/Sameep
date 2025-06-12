import React from 'react';
import { 
  MdOutlineElectricalServices, 
  MdWaterDrop, 
  MdLocalGasStation,
  MdWifi,
  MdPhoneIphone,
  MdTv,
  MdHealthAndSafety,
  MdCreditCard,
  MdSchool,
  MdDirectionsCar,
  MdLocalAtm,
  MdReceipt
} from 'react-icons/md';

const UtilityServices = () => {
  // Utility services data with icons
  const services = [
    { name: "Electricity", icon: <MdOutlineElectricalServices className="text-blue-500" /> },
    { name: "Water", icon: <MdWaterDrop className="text-blue-400" /> },
    { name: "Gas", icon: <MdLocalGasStation className="text-orange-500" /> },
    { name: "Internet", icon: <MdWifi className="text-purple-500" /> },
    { name: "Mobile", icon: <MdPhoneIphone className="text-green-500" /> },
    { name: "Cable TV", icon: <MdTv className="text-red-500" /> },
    { name: "Insurance", icon: <MdHealthAndSafety className="text-yellow-500" /> },
    { name: "Credit Card", icon: <MdCreditCard className="text-indigo-500" /> },
    { name: "Education", icon: <MdSchool className="text-teal-500" /> },
    { name: "Transport", icon: <MdDirectionsCar className="text-gray-600" /> },
    { name: "Loan", icon: <MdLocalAtm className="text-amber-600" /> },
    { name: "Municipal", icon: <MdReceipt className="text-lime-600" /> }
  ];

  return (
    <section className="bg-gray-50 pb-6 pt-3 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left side - Heading and description */}
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Bills & Recharge</h2>
              <p className="text-gray-600">
                Pay your bills & recharge instantly with our secure payment platform.
                Manage all your utilities in one place.
              </p>
            </div>
            
            {/* Right side - Services grid */}
            <div className="md:w-2/3">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <div className="text-4xl mb-2">
                      {service.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-700 text-center">{service.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UtilityServices;