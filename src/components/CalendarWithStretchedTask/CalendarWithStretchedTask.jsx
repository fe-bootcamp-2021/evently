const CalendarWithStretchedTask = (props) => (
    <div>
        <div className="mx-auto container py-20 px-6">
            <div className="w-full flex items-cente justify-between">
                <div>
                    <h4 className="text-xs xl:text-base text-gray-900 dark:text-gray-100">September 2018</h4>
                </div>
                <div className="md:flex justify-center hidden w-1/2">
                    <div className="flex items-center">
                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#353F47" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="15 6 9 12 15 18" />
                        </svg>
                        <svg className="cursor-pointer ml-20" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#353F47" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="9 6 15 12 9 18" />
                        </svg>
                    </div>
                </div>
                <div>
                    <a href="javascript:void(0)">
                        <h4 className="text-indigo-700 cursor-pointer text-xs lg:text-base font-light text-right">Month view</h4>
                    </a>
                </div>
                <div>
                    <a href="javascript:void(0)">
                        <h4 className="text-xs lg:text-base cursor-pointer text-gray-700 dark:text-gray-200 font-light text-right ml-6">Week view</h4>
                    </a>
                </div>
                <div>
                    <a href="javascript:void(0)">
                        <h4 className="text-xs lg:text-base cursor-pointer text-gray-700 dark:text-gray-200 font-light text-right ml-6">Day view</h4>
                    </a>
                </div>
            </div>
            <div className="w-full overflow-x-scroll xl:overflow-x-hidden mt-4">
                <table className="min-w-full bg-white dark:bg-gray-900">
                    <thead className="items-center">
                        <tr className="h-20">
                            <th className="px-10">
                                <p className="text-xs text-left text-gray-900 dark:text-gray-100 uppercase cursor-pointer">Monday</p>
                            </th>
                            <th className="px-10">
                                <p className="text-xs text-left text-gray-900 dark:text-gray-100 uppercase cursor-pointer">Tuesday</p>
                            </th>
                            <th className="px-10">
                                <p className="text-xs text-left text-gray-900 dark:text-gray-100 uppercase cursor-pointer">Wednesday</p>
                            </th>
                            <th className="px-10">
                                <p className="text-xs text-left text-gray-900 dark:text-gray-100 uppercase cursor-pointer">Thursday</p>
                            </th>
                            <th className="px-10">
                                <p className="text-xs text-left text-gray-900 dark:text-gray-100 uppercase cursor-pointer">Friday</p>
                            </th>
                            <th className="px-10">
                                <p className="text-xs text-left text-gray-900 dark:text-gray-100 uppercase cursor-pointer">Saturday</p>
                            </th>
                            <th className="px-10">
                                <p className="text-xs text-left text-gray-900 dark:text-gray-100 uppercase cursor-pointer">Sunday</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-300 dark:border-gray-700">
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">27</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">28</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">29</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">30</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">31</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700 bg-indigo-100">
                                <p className="text-xs text-gray-800  pt-2 pl-2 pb-16">1</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700 bg-indigo-100">
                                <p className="text-xs text-gray-800  pt-2 pl-2 pb-16">2</p>
                            </td>
                        </tr>
                        <tr className="border-b relative w-full border-gray-300 dark:border-gray-700">
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">3</p>
                            </td>
                            <td className="border-r relative xl:static border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">4</p>
                                <div className="absolute w-64 xl:w-1/5 ml-3 -mt-16 flex items-center bg-gray-100 dark:bg-gray-800 border-l-4 border-indigo-700 rounded py-1">
                                    <div className="ml-1">
                                        <p className="text-xs dark:text-gray-100 text-gray-900">4 Sept – 5 Sept</p>
                                        <p className="text-xs text-gray-800 dark:text-gray-100 mt-0.5">Vacation</p>
                                    </div>
                                </div>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">5</p>
                            </td>
                            <td className="border-r relative border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">6</p>
                                <div className="flex items-center -mt-16 absolute ml-4">
                                    <div className="w-3 h-3 bg-indigo-700 rounded" />
                                    <div className="ml-2">
                                        <p className="text-xs dark:text-gray-100 text-gray-900">13:00 - 14:40</p>
                                        <p className="text-xs text-gray-800 dark:text-gray-100 mt-1">Doctor’s</p>
                                    </div>
                                </div>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">7</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700 bg-indigo-100">
                                <p className="text-xs text-gray-800  pt-2 pl-2 pb-16">8</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700 bg-indigo-100">
                                <p className="text-xs text-gray-800  pt-2 pl-2 pb-16">9</p>
                            </td>
                        </tr>
                        <tr className="border-b relative border-gray-300 dark:border-gray-700">
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">10</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">11</p>
                            </td>
                            <td className="border-r relative xl:static border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">12</p>
                                <div className="absolute custom-width ml-3 -mt-16 flex items-center bg-gray-100 dark:bg-gray-800 border-l-4 border-indigo-700 rounded py-1">
                                    <div className="ml-1">
                                        <p className="text-xs dark:text-gray-100 text-gray-900">12 Sept – 15 Sept</p>
                                        <p className="text-xs text-gray-800 dark:text-gray-100 mt-0.5">Tokyo - Business Trip</p>
                                    </div>
                                </div>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">13</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">14</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700 bg-indigo-100">
                                <p className="text-xs text-gray-800  pt-2 pl-2 pb-16">15</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700 bg-indigo-100">
                                <p className="text-xs text-gray-800  pt-2 pl-2 pb-16">16</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-300 dark:border-gray-700">
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">17</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">18</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">19</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">20</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">21</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700 bg-indigo-100">
                                <p className="text-xs text-gray-800  pt-2 pl-2 pb-16">22</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700 bg-indigo-100">
                                <p className="text-xs text-gray-800  pt-2 pl-2 pb-16">23</p>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-300 dark:border-gray-700">
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">24</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">25</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">26</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">27</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700">
                                <p className="text-xs text-gray-800 dark:text-gray-100 pt-2 pl-2 pb-16">28</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700 bg-indigo-100">
                                <p className="text-xs text-gray-800  pt-2 pl-2 pb-16">29</p>
                            </td>
                            <td className="border-r border-gray-300 dark:border-gray-700 bg-indigo-100">
                                <p className="text-xs text-gray-800  pt-2 pl-2 pb-16">30</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <style>
            {`
        @media screen and (min-width: 375px) {
            .custom-width {
                width: 40rem;
            }
        }

        @media screen and (min-width: 1300px) {
            .custom-width {
                width: 50%;
            }
        }`}
        </style>
    </div>
);
export default CalendarWithStretchedTask;
