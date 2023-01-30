import React from 'react'

import House1 from '../../../img/1.avif'
import House2 from '../../../img/2.avif'
import House3 from '../../../img/3.avif'
import House4 from '../../../img/4.avif'

export function Work(){

    return(
        <>
            <div className="w-full h-screen bg-[#2a192f] text-gray-300">
                <div  className="mx-w-[1000px] mx-auto  flex flex-col justify-center items-center w-full h-full px-8">
                    <div className="max-w-[1000px] w-full flex flex-col">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-600">Work</p>
                        <p className="py-2">Checkout</p>
                    </div>
                    <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div style={{ backgroundImage: `url(${House1})` }} className="shadow-lg shadow-[#5b2b644b] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-no-repeat bg-cover bg-center w-full content-div">
                            {/* hover */}
                            <div className="opacity-0 group-hover:opacity-100">
                                <span className="text-2xl font-bold text-white tracking-wider">
                                    React Js
                                </span>

                                <div className="pt-0 text-center">
                                    <a href="/">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">Content</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div style={{ backgroundImage: `url(${House2})` }} className="shadow-lg shadow-[#5b2b644b] group container rounded-md flex justify-center items-center mx-auto h-[250px] bg-no-repeat bg-cover bg-center w-full content-div">
                            {/* hover */}
                            <div className="opacity-0 group-hover:opacity-100">
                                <span className="text-2xl font-bold text-white tracking-wider">
                                    New One
                                </span>

                                <div className="pt-0 text-center">
                                    <a href="/">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">Content</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}