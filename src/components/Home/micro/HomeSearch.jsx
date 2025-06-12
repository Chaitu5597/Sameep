import { MapPinIcon } from '@heroicons/react/24/outline'
import React from 'react'

function HomeSearch() {
    return (
        <section className='container' >
            <h1 className='text-3xl mx-7 mt-8'>Search across '‘4.7 Crore+‘ Businesses</h1>
            <div className='flex justify-start'>

                <div className='flex justify-center mt-4 -ms-64 '>
                    <button type="button" className="text-black w-60 h-14 p-3 ps-10 ms-70 me-10 hover:ring-black-50 focus:ring-4 focus:outline-none focus:ring-black-50 font-medium rounded-lg text-sm px-16 py-3.5 text-center border border-black inline-flex items-center ">
                        <MapPinIcon className='h-7 w-7 me-5' />
                        Buy now
                    </button>

                    <form className="w-80px mx-auto">
                        <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="w-lg p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-white-700 hover:bg-amber-50-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default HomeSearch