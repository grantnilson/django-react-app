import React from "react";
import { useLoaderData, Form } from "react-router-dom";
import { Link } from "react-router-dom";
import { CreateAction } from "../router/actions";

export const Index = () => {
  const todos = useLoaderData();
  return (
    <div>
      <h1>My todos</h1>
      <ul>
        {todos.map((todo) => (
          <Link to={`/${todo.id}`}>
            {" "}
            <li>{todo.title}</li>
          </Link>
        ))}
      </ul>
      <h2>
        Create a Todo
        <Form action="/create" method="post">
          <input type="text" name="title" />
          <input type="text" name="details" />
          <button>Create Todo</button>
        </Form>
      </h2>
    </div>
  );
};
