import React from 'react'
import Wedding from '../../../assets/Wedding.Png';

const Homegrid = () => {
    return (
        <>
            <section class="bg-white container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-rows-1">
                    <div className="grid grid-cols-1 mb-3">
                        <div class=" p-3 rounded-2xl ring  ">
                          <p className='text-2xl mb-2'>Wedding Requisites</p>
                          <div className='gap-2 flex justify-center items-cente  '>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src={Wedding} alt="" />
                                <p className='text-2xl text-center'>wedding</p>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src={Wedding} alt="" />
                                <p className='text-2xl text-center'>wedding</p>
                            </div>
                            <div>
                                <img class="h-auto max-w-full rounded-lg" src={Wedding} alt="" />
                                <p className='text-2xl text-center'>wedding</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Homegrid