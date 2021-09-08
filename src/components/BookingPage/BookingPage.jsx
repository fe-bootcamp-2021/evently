import Button from "../Button/Button";
import Input from "../Input/Input";
import Navbar from "../Navbar/Navbar";
import Time from "../../images/Icons/Time.svg"
import Location from "../../images/Icons/Location.svg"

export default function BookingPage() {
    return (
        <div className="h-screen">
            
            <div className="max-w-lm inline-block flex flex-col mx-auto bg-white shadow-md items-center ">
            </div>

            <section class="container my-8 w-9/12 max-w-lm mx-auto">
                <div className="text-right my-2 h-24 flex flex-col justify-between my-4 py-1">
                    <h2 className="text-3xl px-4 text-blue-900">Title Name</h2>
                    <div className="flex mx-4 justify-end">
                        <img src={Location} className="w-6 h-6 mx-1" alt=""/>
                        <h3 className="text-ml text-blue-700">40 Marshal Baghramyan Ave, Yerevan 0019</h3>
                    </div>
                    <div className="flex mx-4 justify-end">
                        <img src={Time} className="w-6 h-6 mx-1" alt=""/>
                        <h3 className="text-ml text-blue-700">30 min.</h3>
                    </div>
                </div>
                <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                              <tr class="text-md font-semibold tracking-wide text-right text-white bg-blue-900 uppercase border-b border-gray-600">
                                <th class="px-4 py-3">Date</th>
                                <th class="px-4 py-3">Time</th>
                                <th class="px-4 py-3">Name</th>
                                <th class="px-4 py-3">Surname</th>
                                <th class="px-4 py-3">Phone Number</th>
                                <th class="px-4 py-3">Submit</th>
                              </tr>
                            </thead>
                            <tbody class="bg-white">
                                <tr class="text-gray-700  text-right">
                                    <td class="px-4 py-3 border">
                                        <p class="font-semibold text-blue-900">27/08/21</p>
                                    </td>
                                    <td class="px-4 py-3 font-semibold text-blue-900 border">10:00 - 10:30</td>
                                    <td class="border text-blue-900">
                                        <Input className="px-4 py-3 text-right outline-none" placeholder="User Name" />
                                    </td>
                                    <td class="border text-blue-900">
                                        <Input className="px-4 py-3 text-right outline-none" placeholder="User Surname" />
                                    </td>
                                    <td class="border text-blue-900">
                                    <Input className="px-4 py-3 text-right outline-none" placeholder="User Phone" />
                                    </td>
                                    <td class="px-4 py-3 border"><Button variant="custom" className="bg-white border border-blue-900 text-blue-900 rounded-full px-4 py-2 hover:bg-blue-900 hover:text-white" name="Submit" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>

    )
}