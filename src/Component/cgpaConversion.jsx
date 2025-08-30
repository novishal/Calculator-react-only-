import { useState } from "react";
import Footer from "./footer";
export default function CgpaConversion() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("percentage");
  const [toUnit, setToUnit] = useState("cgpa");
  const [scheme, setScheme] = useState("cbse");
  const [result, setResult] = useState("");

  const schemes = {
    cbse: 9.5,
    university: 10,
  };

  const conversions = {
    percentage: { cgpa: (val, factor) => val / factor },
    cgpa: { percentage: (val, factor) => val * factor },
    sgpa: {
      cgpa: (arr) => arr.reduce((a, b) => a + b, 0) / arr.length,
    },
  };

  const handleConvert = () => {
    let val = parseFloat(value);
    if (isNaN(val)) return setResult("Invalid Number");

    const factor = schemes[scheme];
    const fn = conversions[fromUnit]?.[toUnit];

    if (!fn) return setResult("Conversion not supported");

    const converted = fn(val, factor);
    setResult(converted.toFixed(4));
    console.log({ value, fromUnit, toUnit, scheme });

  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="flex justify-center text-2xl font-serif font-semibold underline text-gray-900">
        CGPA Conversion
      </h1>
      <div className="flex p-8 m-4 justify-between items-center">
        <input
          className="border-2 p-4 m-2 justify-between text-2xl"
          value={value}
          placeholder="Enter Value"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleConvert();
            }
          }}
          type="text"
        />

        <select
          className="flex flex-row border-2 p-4 m-10 text-2xl justify-center"
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
        >
          <option value="percentage">Percentage </option>
          <option value="cgpa"> CGPA </option>
          <option value="sgpa"> SGPA </option>
        </select>

        <select
          className="flex flex-row border-2 p-4 m-10 text-2xl justify-center"
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
        >
          <option value="percentage">Percentage </option>
          <option value="cgpa"> CGPA </option>
        </select>

        <select
          className="flex flex-row border-2 p-4 m-10 text-2xl justify-center"
          value={scheme}
          onChange={(e) => setScheme(e.target.value)}
        >
          <option value="cbse">CBSE(9.5)</option>
          <option value="university">University(10)</option>
        </select>

        <button
          className="p-4 m-2 border-2 bg-blue-500 text-amber-50 hover:bg-blue-700"
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
