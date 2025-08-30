    import { useState } from "react"
    import Footer from "./footer";

    export default function LengthConversion(){
        const [value,setValue] = useState("");
        const [toUnit,setToUnit] = useState("cm");
        const [fromUnit,setFromUnit] = useState("m"); 
        const [result,setResult] = useState("");

        // Change this to meter
        const conversionRates = {
            cm: 0.01,
            m: 1,   
            ft: 0.3048,
            km: 1000,
            miles: 1609.34,
            "nautical miles": 1852

        };

        const handleConvert = () => {
            let val = parseFloat(value)
            if(isNaN(val)) return setResult("Invalid number");


            const fromRate = conversionRates[fromUnit];
            const toRate = conversionRates[toUnit];

            if(!fromRate || !toRate){
                return setResult("Conversion not supported");
        }

        // Convert to meters first, then to target unit
        const inMeters = val * fromRate;
        const converted = inMeters / toRate;


        setResult(converted.toFixed(4));
        };

        // const handleConvert = () => {
        //     let val = parseFloat(value);
        //     if(isNaN(val)) return setResult("Invalid number");

        //     if (fromUnit === "cm" && toUnit === "m"){
        //         setResult((val / 100).toFixed(2))  
        //     } else if( fromUnit === "m" && toUnit === "cm") {
        //         setResult((val * 1000).toFixed(2))
        //     } else if (fromUnit === "cm" && toUnit === "ft") {
        //         setResult((val / 30.48).toFixed(2))
        //     } else if (fromUnit === "ft" && toUnit === "cm") {
        //         setResult((val * 30.48).toFixed(2))
        //     } else if (fromUnit === "m" && toUnit === "ft") {
        //         setResult((val * 3.28084).toFixed(2))
        //     } else if (fromUnit === "ft" && toUnit === "m") {
        //         setResult((val / 3.28084).toFixed(2))
        //     } else if  (fromUnit === "m" && toUnit === "km") {
        //         setResult((val / 1000).toFixed(2))
        //     } else if (fromUnit === "km" && toUnit === "m") {
        //         setResult((val * 1000).toFixed(2))
        //     } else if (fromUnit === "km" && toUnit === "miles"){
        //         setResult((val / 1.609).toFixed(2))
        //     } else if (fromUnit === "miles" && toUnit === "km"){
        //         setResult((val * 1.609).toFixed(2))
        //     } else if (fromUnit === "km" && toUnit === "nautical miles"){
        //         setResult((val / 1.852).toFixed(2))
        //     } else if (fromUnit === "nautical miles" && toUnit === "km"){
        //         setResult((val * 1.852).toFixed(2))
        //     } else {
        //         setResult("Conversion not supported")
        //     }
        // };

        return(
            <div className="flex flex-col items-center">
                <h1 className = "flex justify-center text-2xl font-semibold underline font-serif text-gray-900">
                    Length Conversion Section   
                </h1>   
                <div className="flex  p-8 m-4  justify-between items-center">
                {/* Right now the only one input */}
                    <input className="border-2 p-4 m-2 text-2xl justify-center"
                    placeholder="Enter Value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {if(e.key === 'Enter') { handleConvert()}}}
                    type="text" />

                    
                    {/* Select from the dropmenu that need to be changed */}
                    <select className="flex flex-row border-2 p-4 m-10 text-2xl justify-center"
                        value={fromUnit}
                        onChange={(e) => setFromUnit(e.target.value)}
                    >
                        <option value ="cm">Centimeter</option>
                        <option value ="m">Meter</option>
                        <option value ="ft">Feet</option>
                        <option value ="km">Kilometer</option>
                        <option value ="miles">Miles</option>
                        <option value ="nautical miles">Nautical Miles</option>                      
                    </select>
                    <span className="text-2xl font-medium">To</span>

                    <select className="flex fl  ex-row border-2 p-4 m-10 text-2xl justify-center"
                        value={toUnit}
                        onChange={(e) => setToUnit(e.target.value)}
                    >
                        <option value ="cm">Centimeter</option>
                        <option value ="m">Meter</option>
                        <option value ="ft">Feet</option>
                        <option value ="km">Kilometer</option>
                        <option value ="miles">Miles</option>
                        <option value ="nautical miles">Nautical Miles</option>
                    </select>   

                    <button className="flex flex-col justify-between items-center rounded p-4 m-6 bg-blue-500 text-amber-50 font-semibold hover:bg-blue-700 text-amber-100"
                    onClick={handleConvert}>    
                        Convert
                    </button>
                </div>
                {/* Result */}
                {result && (
                    <p className="text-3xl font-mono p-2 m-2 text-gray-900" >
                    Result: {result} {toUnit} 
                    </p>
                )}
                <Footer />
            </div>    
        );
    }