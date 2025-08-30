import { useState } from "react";
import LengthConversion from "./lengthConversion";
import SimpleMathematics from "./simpleMathematics";
import WeightConversion from "./weightConversion";
import CgpaConversion from "./cgpaConversion";
import TemperatureConversion from "./temperatureConversion";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Simple Mathematics");
  return (
    <div>
      <div className="flex justify-between bg-blue-400 border-gray-800 ">
        <button
          className={`p-4  text-gray-900 font-sans
                ${activeTab === 'Simple Mathematics' ? ' bg-blue-500 border-b-blue-600 underline text-white font-semibold' : 'bg-transparent border-b-transparent text-gray-900 hover:bg-blue-500'}`}
          onClick={() => setActiveTab("Simple Mathematics")}
        >
          Simple Mathematics
        </button>
        <button className={`p-4 text-gray-900 font-sans
            ${activeTab === 'Length Conversion' ?  'bg-blue-500 border-b-blue-600 underline text-white font-semibold': 'bg-transparent border-b-transparent text-gray-900 hover:bg-blue-500'}`}
            onClick={() => setActiveTab("Length Conversion")}
            >
          Length Conversion
        </button>
        <button className={`p-4  text-gray-900 font-sans
           ${activeTab === 'Weight Conversion' ? 'bg-blue-500 border-b-blue-600 underline text-white font-semibold' : 'bg-transparent border-b-transparent text-gray-900 hover:bg-blue-500'}`}
           onClick= {() => setActiveTab("Weight Conversion")}
           >
          Weight Conversion
        </button>
        <button className={`p-4  text-gray-900 font-sans
		        ${activeTab === 'Cgpa Conversion' ? 'bg-blue-500 border-b-blue-600 underline text-white font-semibold':'bg-transparent border-b-transparent text-gray-900 hover:bg-blue-500'}`}
		        onClick ={() => setActiveTab("Cgpa Conversion")}
	          >
          CGPA Conversion
        </button> 
        <button className={`p-4  text-gray-900 font-sans
          ${activeTab === 'Temperature Conversion' ? 'bg-blue-500 border-b-blue-600 underline text-white font-semibold': 'bg-transparent border-b-transparent text-gray-900 hover:bg-blue-500'}`}
          onClick = {() => setActiveTab('Temperature Conversion')}
          >
          Temperature Conversion
        </button>
      </div>
      {/* Render Section */}
      <div className="p-8">
        {activeTab === "Simple Mathematics" && <SimpleMathematics/>}
        {activeTab === "Length Conversion" && <LengthConversion />}
        {activeTab === "Weight Conversion" && <WeightConversion />}
        {activeTab === "Cgpa Conversion" && <CgpaConversion />}
        {activeTab === "Temperature Conversion" && <TemperatureConversion />}
      </div>
    </div>
  );
}
