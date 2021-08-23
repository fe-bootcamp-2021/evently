import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="max-w-lm inline-block flex flex-col mx-auto bg-white shadow-md items-center ">
        <div className="w-9/12">
          <div className="flex justify-between items-center mt-8 mb-4">
            <h1 className="text-2xl text-blue-900">My Meetings</h1>
            <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              + Create
            </button>
          </div>

          <ul className="flex mb-4">
            <li className="mr-6">
              {/* <Link to="#" className="text-blue-900 hover:text-blue-600"> */}{" "}
              Event Types
              {/* </Link> */}
            </li>
            <li className="mr-6">
              {/* <Link to="#" className="text-blue-900 hover:text-blue-600"> */}{" "}
              Scheduled Events
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </div>

      <div className="w-9/12 mt-6 mx-auto items-center">
        <div className="flex  flex-col  md:flex-row justify-between  flex-wrap gap-3 mt-10">
          <Card />
          <Card />
          <Card />
        </div>

        <Dropdown />
      </div>
    </div>
  );
}
