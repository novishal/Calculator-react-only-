import { useState } from "react";
import Footer from "./footer";

export default function WeightConversion() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("gm");
  const [toUnit, setToUnit] = useState("kg");
  const [result, setResult] = useState("");

  //Conversion Rate change in kg
  const weightConversionRates = {
    mg: 0.000001, // 1 mg = 0.000001 kg
    g: 0.001, // 1 g = 0.001 kg
    kg: 1, // 1 kg = 1 kg
    tonne: 1000, // 1 tonne = 1000 kg
    oz: 0.0283495, // 1 ounce = 0.0283495 kg
    lb: 0.453592, // 1 pound = 0.453592 kg
    stone: 6.35029, // 1 stone = 6.35029 kg
    quintal: 100, // 1 quintal = 100 kg
  };

  const handleConvert = () => {
    let val = parseFloat(value);
    if (isNaN(val)) return setResult("Invalid Number");

    const fromRate = weightConversionRates[fromUnit];
    const toRate = weightConversionRates[toUnit];

    if (!fromRate || !toRate) {
      return setResult("Conversion Not Supported");
    }

    const inKg = val * fromRate;
    const converted = inKg / toRate;

    setResult(converted.toFixed(4));
  };

  return (
    <div className="flex flex-col item-center">
      <h1 className="flex justify-center text-2xl font-semibold underline font-serif text-gray-900">
        Weight Conversion Section
      </h1>
      <div className="flex p-8 m-4 justify-between items-center">
        <input
          className="border-2 p-4 m-2 text-2xl justify-center"
          placeholder="Enter Conversion value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === "Enter") {
              handleConvert();
            }
          }}
          type="text" />
        {/* DropDown-FromUnit */}
        <select
          className="flex flex-row border-2 p-4 m-10 text-2xl justify-center"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          <option value="mg">Milligram</option>
          <option value="g">Gram</option>
          <option value="kg">Kilogram</option>
          <option value="tonne">Ton</option>
          <option value="oz">Ounce</option>
          <option value="lb">Pound</option>
          <option value="stone">Stone</option>
          <option value="quintal">Quintal</option>
        </select>
        <span className="text-2xl font-medium">To</span>
        {/* Dropdown-toUnit */}
        <select
          className="flex flex-row border-2 p-4 m-10 text-2xl justify-center"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          <option value="mg">Milligram</option>
          <option value="g">Gram</option>
          <option value="kg">Kilogram</option>
          <option value="tonne">Ton</option>
          <option value="oz">Ounce</option>
          <option value="lb">Pound</option>
          <option value="stone">Stone</option>
          <option value="quintal">Quintal</option>
        </select>
        <button
          className="flex flex-col justify-between items-center rounded p-4 m-6 bg-blue-500 text-amber-50 font-semibold "
          onClick={handleConvert}
        >
          Convert
        </button>
      </div>
      {result && (
        <p className="text-3xl font-mono p-2 m-2 text-gray-900">
          Result:{result}
          {toUnit}
        </p>
      )}
      <Footer />
    </div>
  );
}
