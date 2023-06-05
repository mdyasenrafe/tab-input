import React, { useState } from "react";

export default function Tab({ activeTab, index, item, handleChange }) {
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
              value={item.name}
              onChange={(e) => handleChange(e, "name", index)}
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
              value={item?.gender}
              onChange={(e) => handleChange(e, "gender", index)}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 max-w-[365px] w-full"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </>
      )}
    </div>
  );
}
