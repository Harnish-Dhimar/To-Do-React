import React from "react";
import todo_icon from "../assets/todo_icon.png";
import Todo_item from "./Todo_item";
import { useRef, useState, useEffect } from "react";

const Todo = () => {
  const [list, setlist] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  
  //can get value of input field in the variable
  const inputRef = useRef();

  const add = () => {
    const inputTxt = inputRef.current.value.trim();
    console.log(inputTxt);

    if (inputTxt === "") {
      return null;
    }
    
      const addNewTodo = {
        id: Date.now(),
        text: inputTxt,
        isComplete: false,
      };
      setlist((prev) => [...prev, addNewTodo]);
    
    inputRef.current.value = "";
  };

  const Delete = (id) => {
    setlist((prevtodo) => {
      return prevtodo.filter((todo) => todo.id !== id);
    });
  };

  const complete = (id) => {
    setlist((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };



  useEffect(() => {
    // console.log(list);
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  return (
    <div className="main">
      {/* Title */}
      <div className="title">
        <img src={todo_icon} alt="" className="img" />
        <h1 className="text">To-do List</h1>
      </div>

      {/* input */}
      <div className="input">
        <input
          type="text"
          placeholder="Add Task Here"
          name=""
          id=""
          ref={inputRef}
          maxLength={30}
          
        />
        <button onClick={add}>Add +</button>
        
      </div>

      {/* List of items */}
      <div className="disp-item">
        {list.map((item, index) => {
          return (
            <Todo_item
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              del={Delete}
              complete={complete}
            />
          );
        })}
        {/* <Todo_item text="learn code"/> */}
      </div>
    </div>
  );
};

export default Todo;
