import Button from "../Button/Button"

export default function Card() {
    return (
        <div>
          <div className="bg-white w-96 max-w-xl rounded-2xl border-t-8 border-blue-800 px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <div className="flex justify-between items-center">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <Button name={
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                } style="none" />
            </div>
            <div className="mt-4">
                <h1 className="text-lg text-gray-700 font-semibold">Product Review</h1>
                <Button name="View booking page" style="mt-4 text-md text-blue-700" />
                <hr className="mt-8 py-3" />
                <div className=" flex justify-between items-center">
                    <Button name="Copy Link" style="text-sm font-semibold text-blue-700" />
                    <Button name="Share" style="bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" />
                    
                </div>
            </div>
          </div>
        </div>
    )
}