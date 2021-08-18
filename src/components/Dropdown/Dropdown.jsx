import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import classNames from "classnames/bind";
import Button from "../Button/Button"

export default function Dropdown({buttonName}) {
  const [show, setShow] = useState(false); 

  let showFn = () => {
    setShow(!show);
    return show
  }
  let dropDownMenu = classNames({
    "rounded-lg": true,
    "bg-white": true, 
    "shadow-xl": true,
    hidden: !show,
    "block": show
  })

  return (
    <div>
      <div className="flex flex-col justify-end"> 
        <Button name={buttonName} onClick={showFn} style="mt-4 border-0 block bg-blue-800 hover:bg-blue-600 text-white font-bold rounded-full px-11 py-3 overflow-hidden focus:outline-none focus:border-white" />
        
        <div className={dropDownMenu}> 
          <Router>
            <Link to="#" className="block text-sl px-4 py-2 rounded-t-lg text-gray-800 hover:text-purple-700 hover:underline">One-on-One</Link> 
            <Link to="#" className="block text-sl px-4 py-2 rounded-b-lg text-gray-800 hover:text-purple-700 hover:underline">Group Meeting</Link> 
          </Router>
        </div>
      </div>
    </div>
    
  )
}