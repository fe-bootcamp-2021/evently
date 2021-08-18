import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import classNames from "classnames/bind";

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
        <button onClick={showFn} className="mt-4 border-0 block bg-blue-600 bg-blue-600 text-gray-200 rounded-lg px-11 text-sm py-3 overflow-hidden focus:outline-none focus:border-white">
          {buttonName}
        </button>
        
        <div className={dropDownMenu}> 
          <Router>
            <Link to="#" className="block text-sl px-4 py-2 rounded-t-lg text-gray-800 hover:bg-purple-200 hover:text-white">One-on-One</Link> 
            <Link to="#" className="block text-sl px-4 py-2 rounded-b-lg text-gray-800 hover:bg-purple-200 hover:text-white">Group Meeting</Link> 
          </Router>
        </div>
      </div>
    </div>
    
  )
}