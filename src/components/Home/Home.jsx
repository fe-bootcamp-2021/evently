import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Logo from "../Logo/Logo";
import Button from "../Button/Button"

export default function Home() {
    return (
        <div>
            <div className="max-w-lm h-48 inline-block flex flex-col mx-auto bg-white shadow-md items-center ">
                <div className="w-9/12">
                    <div className="mt-4 flex justify-between">
                        <Logo />
                        <div>
                            <ul className="flex justify-between items-center">
                                <li className="mr-6">
                                  <a className="text-blue-900 hover:text-purple-800 hover:font-extrabold" href="#">Home</a>
                                </li>
                                <li className="mr-6">
                                  <a className="text-blue-900 hover:text-purple-800 hover:font-extrabold" href="#">Help</a>
                                </li>
                                <li className="mr-6">
                                  <a className="text-blue-900 hover:text-purple-800 hover:font-extrabold" href="#">Log Out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between items-center  mt-8 mb-4">
                        <div className="flex flex-col justify-between items-left mt-4 mb-4">
                            <h1 className="text-2xl text-blue-900 mb-4">My Meetings</h1>
                            {/* <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">+ Create</button> */}
                            <ul className="flex mb-6">
                                <li className="mr-6">
                                  <a className="text-blue-800 hover:text-blue-600" href="#">Event Types</a>
                                </li>
                                <li className="mr-6">
                                  <a className="text-blue-800 hover:text-blue-600" href="#">Scheduled Events</a>
                                </li>
                            </ul>
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