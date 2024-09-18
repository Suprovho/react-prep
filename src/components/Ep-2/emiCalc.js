import React, { useEffect, useState } from "react";

const Emicalc = () => {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [emi, setEmi] = useState(0);

  const handelChange = (e) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "principle") {
      setPrinciple(value);
    } else if (id === "interest") {
      setInterest(value);
    } else {
      setYear(value);
    }
  };

  const calculateEmi=()=>{
    let r=interest;
    if (principle&&interest&&year) {
      r=r/12/100; // per month
      const calcPow=Math.pow(1+r,year*12);
      const amount=principle*((r*calcPow)/(calcPow-1));
      setEmi(Math.round(amount));
    }
  }

  useEffect(()=>{
  calculateEmi();
  },[principle,year,interest])

  return (
    <div className="flex flex-col justify-center  items-center m-2 gap-2">
      <h1 className="text-xl font-bold">Emi-calc</h1>
      <div className="flex-col flex justify-center items-center border-2 border-solid border-black p-2 w-[500px] bg-sky-200">
        <p className="p-3 text-lg font-semibold">principle</p>
        <input className="p-1 border-2 border-solid border-black rounded-md " id="principle" type="number" onChange={handelChange} />
        <p className="p-3  text-lg font-semibold">interest</p>
        <input className="p-1 border-2 border-solid border-black rounded-md " id="interest" type="number" onChange={handelChange} />
        <p className="p-3 text-lg font-semibold">Year</p>
        <input className="p-1 border-2 border-solid border-black rounded-md " id="Year" type="number" onChange={handelChange} />
      </div>
      <div className="flex-col">
        <p className="text-lg font-semibold text-blue-600">Your emi is : {emi}</p>
      </div>
    </div>
  );
};

export default Emicalc;
