import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import room from '../../assets/room.Png';
import room2 from '../../assets/room2.Png';
import room3 from '../../assets/room3.Png';
import { RiBookmark3Fill } from 'react-icons/ri';
 

const Home = () => {



    return (
        <>
            <section>
                <div >
                    <div >
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
                    </div>



                    <div className='flex justify-baseline mt-4'>

                        <div id="default-carousel" className="relative w-lg" data-carousel="slide">

                            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src={room} className="absolute block w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>
                                {/* <!-- Item 2 --> */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src={room2} className="absolute block w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>
                                {/* <!-- Item 3 --> */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src={room3} className="absolute block w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>
                                {/* <!-- Item 4 --> */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src={room} classNAme="absolute block w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>
                                {/* <!-- Item 5 --> */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <img src={room2} className="absolute block w-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                                </div>
                            </div>
                            {/* <!-- Slider indicators --> */}
                            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                            </div>
                            {/* <!-- Slider controls --> */}
                            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                    <span className="sr-only">Previous</span>
                                </span>
                            </button>
                            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="sr-only">Next</span>
                                </span>
                            </button>
                        </div>

                        

                        <div className='card_room ' >
                                <p>Room</p>
                        </div>
                      

                    </div>
                    

                  

                </div>
            </section >
        </>
    )
}

export default Home