import React from 'react'
// import categories from '../../../assets/categories.jpg';
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
export const HomeServises = () => {
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
        <section className='container'>
             <div className="md:w-2/3 ms-9 mb-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center p-3 rounded-lg ring-gray-600 ring-1 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <div className="text-4xl mb-2">
                      {service.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-700 text-center">{service.name}</p>
                  </div>
                ))}
              </div>
            </div>
        </section>
    )
}
