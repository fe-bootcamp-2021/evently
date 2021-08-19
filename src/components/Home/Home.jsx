import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Logo from "../Logo/Logo";
import Button from "../Button/Button"

export default function Home() {
    return (
        <div>
            <div className="max-w-lm h-48 inline-block flex flex-col mx-auto bg-white shadow-md items-center ">
                <div className="w-9/12">
                    <div className="mt-5 flex justify-between">
                        <Logo />
                        <div className="flex justify-between items-center">
                            <Router>
                                <Link to="#" className="mr-8 text-blue-900 hover:text-purple-800 hover:font-extrabold">Home</Link> 
                                <Link to="#" className="mr-8 text-blue-900 hover:text-purple-800 hover:font-extrabold">Help</Link>
                                <Link to="#" className="text-blue-900 hover:text-purple-800 hover:font-extrabold">Log Out</Link> 
                            </Router>
                        </div>
                    </div>
                    <div className="flex justify-between items-center  mt-8 mb-4">
                        <div className="flex flex-col justify-between items-left mb-4">
                            <h1 className="text-2xl text-blue-900 mb-4">My Meetings</h1>
                            <div className="flex mb-6">
                                <Button name="Event Types" style="text-sm mr-4 font-semibold text-blue-700 hover:text-purple-700" />
                                <Button name="Scheduled Events" style="text-sm mr-4 font-semibold text-blue-700 hover:text-purple-700" />
                            </div>
                        </div>
                    
                        <div className="h-36">
                            <Dropdown buttonName="Create +" />
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="w-9/12 mt-6 mx-auto items-center">
                <div className="flex  flex-col  md:flex-row justify-between  flex-wrap gap-3 mt-10">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            


        </div>
        




    )
}