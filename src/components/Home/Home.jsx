import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Logo from "../Logo/Logo";

export default function Home() {
    return (
        <div>
            <div>
                <div className="m-6 flex justify-between">
                    <Logo />
                    <div>
                        <ul className="flex ml-8 mb-4">
                            <li className="mr-6">
                              <a className="text-gray-500 hover:text-gray-800" href="#">Home</a>
                            </li>
                            <li className="mr-6">
                              <a className="text-gray-500 hover:text-gray-800" href="#">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center m-8 shadow-lg">
                    <h1 className="text-3xl">My Calendly</h1>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">+ Create</button>
                </div>

                <ul className="flex ml-8 mb-4">
                    <li className="mr-6">
                      <a className="text-gray-500 hover:text-gray-800" href="#">Event Types</a>
                    </li>
                    <li className="mr-6">
                      <a className="text-gray-500 hover:text-gray-800" href="#">Scheduled Events</a>
                    </li>
                </ul>
            </div>


            {/* <Card /> */}
            {/* <Dropdown /> */}

            

        </div>




    )
}