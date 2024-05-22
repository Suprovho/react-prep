import React, { useState } from "react";

const Todo = () => {
  const [text, setText] = useState(null);
  const [list, setList] = useState([]);
  const [editingText, setEditingText] = useState(null);
  const [updatedText, setUpdatedText] = useState(null);

  const addItem = () => {
    const newItem={
        id:new Date().getTime(),
        itemName:text
    }
    setList([...list,newItem]);
    setText("");
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const updateItem = (id) => {
    const NewList=[...list].map((item)=>{
        if (item.id===id) {
            item.itemName=updatedText;
        }
        return item;
    })
    setList(NewList)
    setEditingText("");
    setUpdatedText("")
  };

  return (
    <div className="p-4 m-4 flex flex-col items-center justify-center gap-2">
      <h1 className="p-4 font-medium">TODO LIST</h1>
      <input
        type="text"
        placeholder="enter task"
        onChange={(e) => setText(e.target.value)}
        className="w-[30%] p-2 border-2 border-solid border-black"
      />
      <button className="border-2 border-solid border-black p-1 rounded-md" onClick={addItem}>
        Add
      </button>
      {list &&
        list.map((item) => (
          <div key={item.id} className="flex gap-2">
            {editingText === item.id ? (
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
                className="p-2"
              />
            ) : (
              <li className="font-medium text-xl">{item.itemName}</li>
            )}
            <button onClick={() => deleteItem(item.id)} className="p-1 border-2 border-solid border-black rounded-md">Delete</button>
            {editingText === item.id ? (
              <button onClick={() => updateItem(item.id)} className="p-1 border-2 border-solid border-black rounded-md">Update</button>
            ) : (
              <button onClick={() => setEditingText(item.id)} className="p-1 border-2 border-solid border-black rounded-md">Edit</button>
            )}
          </div>
        ))}
    </div>
  );
};

export default Todo;
