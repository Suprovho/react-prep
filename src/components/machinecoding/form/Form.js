import React, { useState } from "react";
import useForm from "./useForm";
const data = ["profile", "interest", "settings"];
const Form = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const { formState, errors, handleChange, validateField, validateAll } =
    useForm({
      email: "",
      age: "",
      selectedCountry: "",
      gender: { male: false, female: false },
      mode: "light",
    });

  const handleSubmit = () => {
    if (currIndex >= 0 && !validateAll()) {
      alert("invalid format");
      return;
    }
    if (currIndex === data.length - 1 && validateAll()) {
      alert("Form submitted");
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
            onClick={() => setCurrIndex(i)}
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
                value={formState.email}
                onChange={handleChange}
                onBlur={(e) => validateField("email", e.target.value)}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={formState.age}
                onChange={handleChange}
              />
            </>
          )}
          {currIndex === 1 && (
            <>
              <label>Country</label>
              <div className="flex gap-2 items-center">
                {["IND", "AUS", "SA"].map((country) => (
                  <label key={country}>
                    <input
                      type="radio"
                      name="selectedCountry"
                      value={country}
                      checked={formState.selectedCountry === country}
                      onChange={handleChange}
                    />
                    <span>{country}</span>
                  </label>
                ))}
              </div>
              <label>Gender</label>
              <div className="flex gap-2 items-center">
                {["male", "female"].map((gender) => (
                  <label key={gender}>
                    <input
                      type="checkbox"
                      name="gender"
                      value={gender}
                      checked={formState.gender[gender]}
                      onChange={handleChange}
                    />
                    <span>{gender}</span>
                  </label>
                ))}
              </div>
            </>
          )}
          {currIndex === 2 && (
            <>
              <label>Mode</label>
              <select
                name="mode"
                value={formState.mode}
                onChange={handleChange}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </>
          )}
          <button
            className="border-2 border-solid border-black rounded-md p-1"
            onClick={handleSubmit}
          >
            {currIndex === data.length - 1 ? "Submit" : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
