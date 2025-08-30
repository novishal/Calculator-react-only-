  import { useState } from "react";
import Footer from "./footer";

  export default function TemperatureConversion() {
    const [value, setValue] = useState("");
    const [fromUnit, setFromUnit] = useState("celsius");
    const [toUnit, setToUnit] = useState("fahrenheit");
    const [result, setResult] = useState("");

    const tempConversion = {
      toKelvin: {
        celsius: (val) => val + 273.15,
        fahrenheit: (val) => ((val - 32) * 5) / 9 + 273.15,
        kelvin: (val) => val,
      },
      fromKelvin: {
        celsius: (val) => val - 273.15,
        fahrenheit: (val) => ((val - 273.15) * 9) / 5 + 32,
        kelvin: (val) => val,
      },
    };

    const handleConvert = () => {
      let val = parseFloat(value);
      if (isNaN(val)) return setValue("Invalid Number");

      const kelvinVal = tempConversion.toKelvin[fromUnit](val);
      const finalVal = tempConversion.fromKelvin[toUnit](kelvinVal);

      setResult(finalVal);
    };
    return (
      <div className="flex flex-col justify-center">
        <h1 className="flex justify-center text-2xl font-semibold underline font-serif text-gray-900 ">
          Temperature Conversion
        </h1>
        <div className="flex p-4 m-2 item-center justify-between space-x-4">
          <input
            className="p-4 m-10 flex border-2 text-2xl"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleConvert();
              }
            }}
            placeholder="Enter Temperature"
            type="text"
          />
          <select
            className="flex flex-row border-2 p-4 m-10 text-2xl justify-center"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            <option value="kelvin"> Kelvin </option>
            <option value="celsius"> Celsius </option>
            <option value="fahrenheit"> Fahrenheit </option>
          </select>
          <span className="text-2xl p-2 m-12 font-semibold justify-between items-center"> To </span>
          <select
            className="flex flex-row border-2 p-4 m-10 text-2xl justify-center"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            <option value="kelvin"> Kelvin </option>
            <option value="celsius"> Celsius </option>
            <option value="fahrenheit"> Fahrenheit </option>
          </select>
          <button className="p-4 m-10 border-2 bg-blue-500 text-amber-50 hover:bg-blue-700"
              onClick={handleConvert}
          >
            Convert
          </button>
        </div>
        {result && (
          <p className="text-3xl font-mono p-2 m-2 text-gray-900">
            Result:{result} {toUnit}
          </p>
        )}
        <Footer />
      </div>
    );
  }
