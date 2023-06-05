import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";

export default function Tab({ activeTab, index, removeTab }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleTabRemove = () => {
    removeTab(index);
  };
  return (
    <div className={`tab ${activeTab ? "active" : ""} mt-[16px]`}>
      {activeTab && (
        <>
          <div className="mb-[16px]">
            <div className="mb-[8px]">
              <label htmlFor={`name${index}`} className="text-gray-800">
                Name
              </label>
            </div>
            <input
              type="text"
              id={`name${index}`}
              value={name}
              onChange={handleNameChange}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500  max-w-[365px] w-full"
            />
          </div>
          <div>
            <div className="mb-[8px]">
              <label htmlFor={`gender${index}`} className="text-gray-800">
                Gender
              </label>
            </div>
            <select
              id={`gender${index}`}
              value={gender}
              onChange={handleGenderChange}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 max-w-[365px] w-full"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </>
      )}

      {/* <button
        onClick={handleTabSwitch}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Switch Tab
      </button> */}
      {/* {index > 0 && (
        <button
          onClick={handleTabRemove}
          className="cancel-button text-red-600 bg-transparent border-0 p-0 mt-2"
        >
          <GrFormClose size={20} />
        </button>
      )} */}
    </div>
  );
}
