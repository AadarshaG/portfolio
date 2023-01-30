import React from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'

export function ShortInfo(){

    return(
        <>
            <div className="w-full h-screen bg-[#2a192f]">
                {/* container */}
                <div className="max-w-[1024px] mx-auto px-8 flex flex-col justify-center h-full">
                    <p className="text-pink-600">Hello</p>
                    <h1 className="text-4xl sm:text-7xl font-bold">I am Admin</h1>
                    <h2 className="text-4xl sm:text-7xl font-bold text-[#0092c4]">I am React Developer</h2>
                    <p className="py-4 mx-w-[200px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <div>
                        <button className="text-white border-2 px-2 py-2 hover:bg-pink-700 hover:border-pink-700 flex items-center group ">View Work
                        <span className="group-hover:rotate-90 duration-300 ml-2"><FaLongArrowAltRight></FaLongArrowAltRight></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}