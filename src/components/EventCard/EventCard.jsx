import React from "react";
import { useState } from "react";
import Input from "../Input/Input";
import Trash from "../../images/Icons/Trash.svg"


export default function EventCard() {

    let [date, setDate] = useState(new Date().toLocaleDateString('en-GB').toString());
    let [time, setTime] = useState(new Date().toLocaleTimeString('en-US').toString())


    return (
        <>
            <div className="w-4/12 mx-auto flex flex-col border border-red-200 bg-gradient-to-t from-red-200 via-white to-white px-4 py-4 my-12">
                
                <div className="flex justify-between">
                    <div className="text-blue-900">
                        <div>
                            <p>Date: {date}</p>
                        </div>
                        <div>
                            <p>Start Time: {time}</p>
                        </div>
                        <div>
                            <p>End Time: {time}</p>
                        </div>
                    </div>
                    <div className="w-5 h-5 ">
                        <img src={Trash} className="-inset-4" alt="" />
                    </div>
                </div>

                <div className="flex flex-col ">
                    <div className="mt-4 flex flex-col">
                        <Input className="border border-blue-200 outline-none px-2 py-1 rounded" placeholder="First Name" />
                    </div>
                    <div className="mt-4 flex flex-col">
                        <Input className="border border-blue-200 outline-none px-2 py-1 rounded" placeholder="Last Name" /> 
                    </div>
                </div>
            </div>
        </>
    )
}