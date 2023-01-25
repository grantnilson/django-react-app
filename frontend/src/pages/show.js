import { Link, useLoaderData, useNavigate, Form } from "react-router-dom";

import React from "react";

export const Show = () => {
  const todo = useLoaderData();
  let navigate = useNavigate();
  return (
    <section>
      <h1>{todo.title}</h1>
      <h1>{todo.details}</h1>
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        {" "}
        back to main page{" "}
      </Link>
      <h2>Update Todo</h2>
      <Form action={`/update/${todo.id}`} method="post">
        <input type="text" name="title" defaultValue={todo.title} />
        <input type="text" name="details" defaultValue={todo.details} />
        <button>Update Todo</button>
      </Form>
      <h2>
        Delete Todo
        <Form action={`/delete/${todo.id}`} method="post">
          <button>Delete</button>
        </Form>
      </h2>
    </section>
  );
};
