"use client";

import { Button } from "antd";
import React from "react";
import { useState } from "react";
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([
        ...todos,
        { id: todos.length + 1, text: input, completed: false },
      ]);
      setInput("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        className="border border-1 p-2"
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="border border-1 p-2" onClick={addTodo}>
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            className="flex justify-between py-2"
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <div className="flex gap-2">
              <Button>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
