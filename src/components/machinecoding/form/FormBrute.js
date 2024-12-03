import React, { useEffect, useState } from "react";

const data = ["profile", "interest", "settings"];

const FormBrute = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [checkedValues, setCheckedValues] = useState({
    male: false,
    female: false,
  });
  const [selectedCountry, setSelectedCountry] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    age: "",
  });

  const [mode, setMode] = useState("light");

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("checkboxState"));
    if (savedState) {
      setCheckedValues(savedState);
    }
  }, []);

  useEffect(() => {
    const savedCountry = JSON.parse(localStorage.getItem("selectedCountry"));
    if (savedCountry) {
      setSelectedCountry(savedCountry);
    }
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    const updatedValues = { ...checkedValues, [name]: checked };
    setCheckedValues(updatedValues);
    localStorage.setItem("checkboxState", JSON.stringify(updatedValues));
  };

  const handleRadioChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    localStorage.setItem("selectedCountry", JSON.stringify(country));
  };

  const handelProfile = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  const handleSelectChange = (e) => {
    const selectedMode = e.target.value;
    setMode(selectedMode);
    localStorage.setItem("mode", selectedMode);
  };

  const handelSubmit = () => {
    if (currIndex === data.length - 1) {
      alert("form submitted");
    } else {
      setCurrIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="border-2 border-solid border-black rounded-md m-4 p-2 w-[50%]">
      <div className="flex items-center justify-start gap-2">
        {data.map((name, i) => (
          <button
            className={`border-2 border-solid border-black rounded-md p-1 ${
              currIndex === i ? `bg-black text-white` : ``
            }`}
            key={i}
            onClick={() => setCurrIndex((prev) => i)}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="content border-2 border-solid border-black rounded-md flex flex-col m-2">
        <form
          className="flex flex-col gap-2 p-2 rounded-md"
          onSubmit={(e) => e.preventDefault()}
        >
          {currIndex === 0 && (
            <>
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handelProfile}
              />
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handelProfile}
              />
            </>
          )}
          {currIndex === 1 && (
            <>
              <label>country</label>
              <div className="flex gap-2 items-center">
                <input
                  type="radio"
                  value="IND"
                  checked={selectedCountry === "IND"}
                  onChange={handleRadioChange}
                />
                <span>IND</span>
                <input
                  type="radio"
                  value="AUS"
                  checked={selectedCountry === "AUS"}
                  onChange={handleRadioChange}
                />
                <span>AUS</span>
                <input
                  type="radio"
                  value="SA"
                  onChange={handleRadioChange}
                  checked={selectedCountry === "SA"}
                />
                <span>SA</span>
              </div>
              <label>gender</label>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="male"
                  checked={checkedValues.male}
                  onChange={handleCheckChange}
                />
                <span>male</span>
                <input
                  type="checkbox"
                  name="female"
                  checked={checkedValues.male}
                  onChange={handleCheckChange}
                />
                <span>female</span>
              </div>
            </>
          )}
          {currIndex === 2 && (
            <>
              <label>mode</label>
              <select value={mode} onChange={handleSelectChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </>
          )}
          <button
            className="border-2 border-solid border-black rounded-md p-1"
            onClick={handelSubmit}
          >
            {currIndex === data.length - 1 ? "submit" : "next"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormBrute;
