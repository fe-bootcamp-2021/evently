import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

export default function Dropdown() {
  const [show, setShow] = useState(false); 

  let showFn = () => {
    setShow(!show);
    return show
  }
  let dropDownMenu = classNames({
    "w-44 ":true,
    "rounded-lg": true,
    "bg-white": true, 
    "shadow-xl": true,
    hidden:show,
    block: !show
  })

  return (
    <div>  
      <div > 
        <button onClick={showFn} className="mt-4 border-0 block bg-blue-600 bg-blue-600 text-gray-200 rounded-lg px-6 text-sm py-3 overflow-hidden focus:outline-none focus:border-white">
          <div className="flex justify-between"> 
            <span>Dashboard</span> 
            <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
              <path d="M7 10l5 5 5-5z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg> 
          </div>
        </button>

        <div className={dropDownMenu}> 
          {/* <Link to="#" className="block px-4 py-2 rounded-t-lg text-gray-800 hover:bg-blue-600 hover:text-white">One-on-One</Link>  */}
          {/* <Link to="#" className="block px-4 py-2 rounded-b-lg text-gray-800 hover:bg-blue-600 hover:text-white">Group Meeting</Link>  */}
        </div>
      </div>
    </div>
  )
}