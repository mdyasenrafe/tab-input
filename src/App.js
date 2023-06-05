import { tab } from "@testing-library/user-event/dist/tab";
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import Tab from "./components/Tab";
import "./index.css";

const App = () => {
  const [tabs, setTabs] = useState([0]);
  const [activeTab, setActiveTab] = useState(0);

  const addTab = () => {
    if (tabs.length < 5) {
      setTabs([...tabs, tabs.length]);
      setActiveTab(tabs.length);
    }
  };

  const switchTab = (index) => {
    setActiveTab(index);
  };

  const removeTab = (index) => {
    const newTabs = tabs.filter((tab) => tab !== index);
    console.log(newTabs);
    setTabs(newTabs);
    setActiveTab(0);
  };
  console.log(tabs, "active tab", activeTab);

  return (
    <div className="m-[16px]">
      <div className="tab-bar flex space-x-2">
        {tabs.map((tabIndex, index) => (
          <div
            key={tabIndex}
            className={`cursor-pointer rounded px-4 py-2  ${
              activeTab === index
                ? "bg-blue-500 text-white"
                : "border border-blue-500"
            } flex items-center`}
            onClick={() => switchTab(index)}
          >
            <p>TAB {index + 1}</p>
            {tabs.length > 1 && (
              <GrFormClose
                className="ml-2 text-red-600"
                onClick={() => removeTab(tabIndex)}
                color="red"
              />
            )}
          </div>
        ))}
        {tabs.length < 5 && (
          <button
            onClick={addTab}
            className="add-button bg-blue-500 text-white px-4 py-2 rounded"
          >
            +
          </button>
        )}
      </div>

      {tabs.map((tabIndex, index) => (
        <Tab
          key={tabIndex}
          index={index}
          activeTab={activeTab === index}
          removeTab={removeTab}
        />
      ))}
    </div>
  );
};

export default App;
