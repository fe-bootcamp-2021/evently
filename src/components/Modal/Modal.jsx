import React from "react";
import Button from "../Button/Button";

export default function Modal({ showModal, setShowModal,title,body }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-custom-current">{title}</h3>
                  <Button
                    variant="custom"
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                    name={`×`}
                  />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {body}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <Button
                    onClick={() => setShowModal(false)}
                    name={`Close`}
                  />
                   <Button
                    className="ml-2 px-5"
                    onClick={() => setShowModal(false)}
                    name={`Send`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
