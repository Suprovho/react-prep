import { useState } from "react";

export default function SyncedInputs() {
    const [text, setText] = useState('');
    function handleChange(e) {
      setText(e.target.value);
    }
    return (
      <div className="p-2 flex gap-2">
        <Input label="First input" value={text}  onChange={handleChange} />
        <Input label="Second input" value={text}  onChange={handleChange} />
      </div>
    );
  }
  
  function Input({ label , value, onChange }) {
    return (
      <label>
        {label}
        {' '}
        <input
        className="border-2 border-solid border-gray-400"
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }