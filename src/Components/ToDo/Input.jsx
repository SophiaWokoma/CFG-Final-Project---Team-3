import React, { useState } from "react";
import './Input.css'

// This is a child component to get todo items from users by input
export default function Input({ addItem }) {
  const [text, setText] = useState("");
  // Get the value when user enter text in input, store the value in text
  const getValue = (evt) => {
    setText(evt.target.value);
  };
  // Pass text to parent component
  const clickAdd = () => {
    if (!text) return;
    addItem(text);
    setText("");
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="input-container">
        <div className="todo-input">
        <input
          type="text"
          placeholder="Add task..."
          value={text}
          onChange={getValue}
        />
        </div>
        
        <button className="add-button" onClick={clickAdd}>Add</button>
      </div>
    </form>
  );
}
