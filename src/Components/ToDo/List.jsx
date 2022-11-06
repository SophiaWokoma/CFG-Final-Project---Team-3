import React from "react";
import "./List.css";
import * as MiIcons from "react-icons/md";

// This is a child component to render the todo list
// This component contains function of edit, delete and handle checkbox
export default function List({ list, editItem, deleteItem, checkDone }) {
  return (
    <div className="list-container">
      <ul>
        {list.map((item) => (
          <li key={item.id} className="field-group">
            <input
              id="checkbox-field"
              checked={item.attributes.done}
              type="checkbox"
              onChange={() => {
                checkDone(item);
              }}
            />

            <label
              htmlFor="checkbox-field"
              className="checkbox-label"
              style={{
                textDecoration: item.attributes.done ? "line-through" : "",
              }}
            >
              {item.attributes.todo_item}
            </label>
            <div className="todo-features">
              <button
                className="edit"
                onClick={() => {
                  editItem(item);
                }}
              >
                <MiIcons.MdEdit size={16} />
              </button>
              <button className="delete" onClick={() => deleteItem(item)}>
                <MiIcons.MdDelete size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {!list.length && <div>No tasks...</div>}
    </div>
  );
}
