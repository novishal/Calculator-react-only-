  import { useState } from "react";
import Footer from "./footer";

  export default function SimpleMathematics() {
    const [value, setValue] = useState("");
    const [result,setResult] = useState("");

    const handleChange = (e) => {
      const newValue = e.target.value;

      // Regex to allow only num  bers and basic operators
      const regex = /^[0-9+\-*/.]*$/;
      if (regex.test(newValue)) {
        setValue(newValue);
      }
    };
    return (
        <div className="flex flex-col items-center">
          <h1 className="flex justify-center font-semibold text-2xl underline text-gray-950 font-serif">
            Simple Mathematics Section
          </h1>
          <input
            className="border-2 p-8 m-16 text-2xl justify-center"
            type="text"
            placeholder="Enter Your Problem"
            value={value}
            onChange={handleChange}
            // to be continued
            onKeyDown={(e) => {
                  if (e.key === 'Enter'){
                      try{
                          setResult(eval(value).toString());
                      }
                      catch {
                          setResult("Error");     
                      }
                  }
              }}  
          />
          <button 
            className="rounded p-4 bg-blue-500 text-amber-50 font-semibold"
            onClick={() => {
              try{
                  setResult(eval(value).toString())
              }
              catch{
                  setResult("Error");
              }
            }}
          >
              Solution
          </button>
          <p className="text-3xl font-mono p-2 m-2 text-gray-900">
            Result:{result} 
          </p>
          <Footer />
        </div>

    );
  }
