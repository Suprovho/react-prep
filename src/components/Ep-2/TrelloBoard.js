import React, { useState } from "react";

const TrelloBoard = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState({
    NewTask: [],
    Inprogress: [],
    Review: [],
    Completed: [],
  });

  const handelAdd = () => {
    setTask({
      ...task,
      [category]: [...task[category], description],
    });
  };

  const handelEdit = (e) => {
    console.log(e.target.dataset.description);
  };

  return (
    <>
      <div className="p-4">
        <input
          type="text"
          placeholder="enter desctiption"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 w-[40%] border-solid border-2 border-black "
        />
        <select
          className="border-2 border-solid border-black ml-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option selected={true} value={"NewTask"}>
            New Task
          </option>
          <option value={"Inprogress"}>In progress</option>
          <option value={"Review"}>Review</option>
          <option value={"Completed"}>Completed</option>
        </select>

        <button
          className="border-solid border-2 border-black p-1 rounded-lg m-1"
          onClick={handelAdd}
        >
          Add Task
        </button>
      </div>
      <div className="p-2">
        {Object.keys(task).map((key) => {
          return (
            <>
              <div className="p-4">
                <h2 className="bg-black text-white font-bold text-2xl">
                  {key}
                </h2>
              </div>
              {task[key].map((task, index) => {
                return (
                  <div className="flex justify-start items-center" key={index}>
                    <h1 className="font-semibold text-xl m-4">{task}</h1>
                    <button
                      className="border-2 border-solid border-black p-1 w-[4%] h-[1%] rounded-xl hover:bg-slate-100 hover:shadow-lg"
                      onClick={handelEdit}
                      data-category={key}
                      data-description={task}
                    >
                      Edit
                    </button>
                    {/* <input
                      type="text"
                      placeholder="enter desctiption"
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="p-2 ml-4 rounded-lg w-[20%] border-solid border-2 border-black "
                    /> */}
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
};

export default TrelloBoard;
