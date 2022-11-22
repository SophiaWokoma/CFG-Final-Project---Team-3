import React from "react";
import "./MainDash.css";
import QuotesGenerator from "../RandomQuotesGenerator/QuotesGenerator";
import TodoList from "../ToDo/TodoList";

export const MainDash = () => {
  const date = new Date();
  const currentTime = date.getHours();

  let userGreeting;

  if (currentTime >= 0 && currentTime <= 12) {
    userGreeting = "Good Morning";
  } else if (currentTime > 12 && currentTime < 18) {
    userGreeting = "Good Afternoon";
  } else {
    userGreeting = "Good Evening";
  }
  return (
    <div className="MainDash">
      <h1>{userGreeting}, User</h1>
      <QuotesGenerator />

      <TodoList />
    </div>
  );
};
