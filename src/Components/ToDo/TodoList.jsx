import React, { useEffect, useState } from "react";
import List from "./List";
import Input from "./Input";
import { useCallback } from "react";
import "./ToDo.css";
import { getListFromApi } from "./GetListFromApi"

// This is the parent component of TodoList
export default function TodoLlist() {
  // A state contains todo items. Data of list is from fetchData()
  const [list, setList] = useState([]);
  // A state recording fetch data error
  const [error, setError] = useState(null);

  // useCallback to prevent funcition be executed everytime
  // catch error and give a hint to users if cannot get a correct response
  const fetchData = useCallback(() => {
    setError(null);
    getListFromApi()
      .then((data) => {
        setList(data.data);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  // use useEffect() to load data from server at the first rendering
  useEffect(() => fetchData(), []);

  // add item by receive text from child component Input.clickAdd
  // post data to server and re-render
  const addItem = (text) => {
    setError(null);
    fetch("http://localhost:1337/api/todos", {
      method: "post",
      body: JSON.stringify({ data: { todo_item: text, done: false } }),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed to add task.");
        }
        fetchData(); //re-render the page
      })
      .catch((e) => {
        setError(e.message); //set an error message shown on the page
      });
  };

  // delete item by receive a specific item from child component 'List' when click delete button
  const deleteItem = (item) => {
    setError(null);
    fetch(`http://localhost:1337/api/todos/${item.id}`, {
      method: "delete",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed to delete task.");
        }
        fetchData(); //re-render the page
      })
      .catch((e) => {
        setError(e.message); //set an error message shown on the page
      });
  };

  // edit item by receive a specific item from child component 'List' when click edit button
  const editItem = (item) => {
    setError(null);
    const input = window.prompt(
      "Update your Task: ",
      item.attributes.todo_item
    );
    if (input) {
      fetch(`http://localhost:1337/api/todos/${item.id}`, {
        method: "put",
        body: JSON.stringify({ data: { todo_item: input, done: false } }),
        headers: { "Content-type": "application/json" },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("failed to update task.");
          }
          fetchData(); //re-render the page
        })
        .catch((e) => {
          setError(e.message); //set an error message shown on the page
        });
    }
  };

  // clear the entire list by clear button
  const clearList = () => {
    setError(null);
    list.forEach((item) => {
      fetch(`http://localhost:1337/api/todos/${item.id}`, {
        method: "delete",
      }).then((response) => {
        if (!response.ok) {
          throw new Error("failed to delete task");
        }
        fetchData();
      });
    });
  };

  // handle checkbox
  const checkDone = (item) => {
    setError(null);
    fetch(`http://localhost:1337/api/todos/${item.id}`, {
      method: "put",
      body: JSON.stringify({
        data: { todo_item: item.todo_item, done: !item.attributes.done },
        // when tick checkbox, done will become undo, vice versa
      }),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("failed to connect server");
        }
        fetchData(); //re-render the page
      })
      .catch((e) => {
        setError(e.message); //set an error message shown on the page
      });
  };

  return (
    <div className="task-container">
      <h1>My Tasks</h1>
      <Input addItem={addItem} />
      <div className="todo-container">
        <List
          list={list}
          editItem={editItem}
          deleteItem={deleteItem}
          checkDone={checkDone}
        />
      </div>
      <div className="todo-clear">
        {/* only show clear button when the list is not empty*/}
        {list.length > 0 && (
          <button className="clear-button" onClick={clearList}>
            Clear tasks
          </button>
        )}
        {error && <p>{error}</p>}{" "}
        {/* show the error when cannot connect server*/}
      </div>
    </div>
  );
}
