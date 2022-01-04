import React, { useState } from "react";
// import "./input.css";
// import { connect } from "react-redux";
import { saveTodo, removeTodo, deleteAll } from "../redux/todoAction";
import { useDispatch, useSelector } from "react-redux";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoList);
  console.log(list);

  const addTodo = () => {
    console.log(`adding ${input}`);
    dispatch(saveTodo(input));
    setInput("");
  };
  return (
    <div>
      <div className="container">
        <div className="app-wrapper">
          <div className="addItems">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="task-input"
            />
            <button className="button-add" onClick={addTodo}>
              Add!
            </button>
          </div>

          <div className="showItems">
            {list.map((item) => {
              return (
                <div className="list-item" key={item.id}>
                  <h2>{item.data}</h2>
                  <button
                    className="button-delete"
                    onClick={() => dispatch(removeTodo(item.id))}
                  >
                    delete
                  </button>
                </div>
              );
            })}

            {
              <div
                className={
                  list.length > 0 ? "clear-btn-container show-btn" : "hide-btn"
                }
              >
                <button
                  className="clearBtn"
                  onClick={() => dispatch(deleteAll())}
                >
                  Delete All
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
