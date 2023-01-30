import React from 'react'

export function About(){

    return(
        <>
            <div className="w-full h-screen bg-[#2a192f] text-gray-300">
                {/* about container */}
                <div className="flex flex-col justify-center items-center w-full h-full px-8">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                        <div className="sm:text-right pb-8">
                            <p className="text-4xl font-bold inline border-b-4 border-pink-600">About</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
                        <div className="sm:text-right text-4xl font-bold">
                            <p>Lorem Ipsum is dummy text.Lorem Ipsum industry.</p>
                        </div>
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}