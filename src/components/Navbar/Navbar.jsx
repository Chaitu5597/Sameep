import React from 'react'
import { 
  ChartBarIcon,
  UserGroupIcon,
  DocumentPlusIcon,
  BriefcaseIcon,
  ArrowRightOnRectangleIcon,
  BellIcon
} from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="#" className="flex items-center text-gray-900 dark:text-white hover:underline space-x-1"><BellIcon className="h-5 w-5"/></a>
                </li>
                
                <li>
                  <a href="#" className="flex items-center text-gray-900 dark:text-white hover:underline space-x-1">
                    <ChartBarIcon className="h-5 w-5" />
                    <span>Investor Relations</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-900 dark:text-white hover:underline space-x-1">
                    <UserGroupIcon className="h-5 w-5" />
                    <span>Leads</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-900 dark:text-white hover:underline space-x-1">
                    <DocumentPlusIcon className="h-5 w-5" />
                    <span>Free Listing</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-900 dark:text-white hover:underline space-x-1">
                    <BriefcaseIcon className="h-5 w-5" />
                    <span>Business</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <a href="#" className="flex items-center text-sm text-blue-600 dark:text-blue-500 hover:underline space-x-1">
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span>Login</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar