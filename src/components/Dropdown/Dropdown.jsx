export default function Dropdown() {
    return (
        // <div>
        //     <div x-data="{ dropdownOpen: true }" className="relative">
        //         <button onClick="dropdownOpen = !dropdownOpen" className="relative z-10 block bg-gray-800 rounded p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
        //           <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        //           </svg>
        //         </button>
        
        //         <div x-show="dropdownOpen" onClick="dropdownOpen = false" className="fixed inset-0 h-full w-full z-10"></div>
        
        //         <div x-show="dropdownOpen" className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-20">
        //           <a href="#" className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">small <span className="text-gray-600">(640x426)</span></a>
        //           <a href="#" className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">medium <span className="text-gray-600">(1920x1280)</span></a>
        //           <a href="#" className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">large <span className="text-gray-600">(2400x1600)</span></a>
        //         </div>
        //     </div>
        // </div>


        <div>
            <div className="flex justify-center h-screen">
                <div className="flex items-center my-32">
                  <div x-data="{ dropdownOpen: true }" className="relative">
                    <button onclick="dropdownOpen = !dropdownOpen" className="relative z-10 block bg-gray-800 rounded p-2 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </button>

                    <div x-show="dropdownOpen" onClick="dropdownOpen = false" className="fixed inset-0 h-full w-full z-10"></div>

                    <div x-show="dropdownOpen" className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-20">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">small <span className="text-gray-600">(640x426)</span></a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">medium <span className="text-gray-600">(1920x1280)</span></a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-800 border-b hover:bg-gray-200">large <span className="text-gray-600">(2400x1600)</span></a>
                    </div>
                  </div>
                </div>
            </div>
        </div>


    )
}