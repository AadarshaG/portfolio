import React from 'react'

import Java from '../../../img/javascript.png'
import Mongo from '../../../img/mongo.png'
import Node from '../../../img/node.png'
import Reacts from '../../../img/react.png'

export function Skill(){

    return(
        <>
            <div className="w-full h-screen bg-[#2a192f] text-gray-300">
                <div className="max-w-[1024px] mx-auto px-8 flex flex-col justify-center h-full">
                    <div>
                        <p className="text-4xl font-bold text-gray-600 border-b-4 border-pink-800">Skill</p>
                        <p className="py-4">Technologies</p>
                    </div>
                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-4 px-8">
                        <div className="shadow-md shadow-[#040c50] hover:scale-110 duration-500">
                            <img src={Java} alt="" className="w-20 mx-auto"></img>
                            <p className="py-4">Java</p>
                        </div>
                        <div className="shadow-md shadow-[#040c50] hover:scale-110 duration-500">
                            <img src={Mongo} alt="" className="w-20 mx-auto"></img>
                            <p className="py-4">Mongo</p>
                        </div>
                        <div className="shadow-md shadow-[#040c50] hover:scale-110 duration-500">
                            <img src={Node} alt="" className="w-20 mx-auto"></img>
                            <p className="py-4">Node</p>
                        </div>
                        <div className="shadow-md shadow-[#040c50] hover:scale-110 duration-500">
                            <img src={Reacts} alt="" className="w-20 mx-auto"></img>
                            <p className="py-4">React</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}