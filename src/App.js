import { tab } from "@testing-library/user-event/dist/tab";
import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import Tab from "./components/Tab";
import "./index.css";

const demoObj = {
  name: "",
  gender: "",
};

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabsData, setTabsData] = useState([demoObj]);

  const addTab = () => {
    if (tabsData.length < 5) {
      setTabsData([...tabsData, demoObj]);
      setActiveTab(tabsData.length);
    }
  };

  const switchTab = (index) => {
    setActiveTab(index);
  };

  const removeTab = (index) => {
    // delete tabs data
    const newTabsData = tabsData.filter((_, i) => i !== index);
    setTabsData(newTabsData);
    setActiveTab(index - 1);
  };

  const handleChange = (e, name, index) => {
    setTabsData((prev) => [
      ...prev.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            [name]: e.target.value,
          };
        }
        return item;
      }),
    ]);
  };

  console.log(tabsData);
  return (
    <div className="m-[16px]">
      <div className="tab-bar flex space-x-2">
        {tabsData.map((tabIndex, index) => (
          <div
            key={index}
            className={`cursor-pointer rounded   ${
              activeTab === index
                ? "bg-blue-500 text-white"
                : "border border-blue-500"
            } flex items-center px-4`}
          >
            <div onClick={() => switchTab(index)} className="px-2 py-2">
              <p>TAB {index + 1}</p>
            </div>
            {tabsData.length > 1 && (
              <GrFormClose
                className="ml-2 text-red-600"
                onClick={() => removeTab(index)}
                color="red"
              />
            )}
          </div>
        ))}
        {tabsData.length < 5 && (
          <button
            onClick={addTab}
            className="add-button bg-blue-500 text-white px-4 py-2 rounded"
          >
            +
          </button>
        )}
      </div>

      {tabsData.map((item, index) => (
        <Tab
          key={index}
          index={index}
          activeTab={activeTab === index}
          removeTab={removeTab}
          item={item}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export default App;
