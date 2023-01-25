import URL from "./baseURL";

export const indexLoader = async () => {
  const response = await fetch(URL);
  const todos = response.json();
  return todos;
};

export const showLoader = async ({ params }) => {
  const response = await fetch(URL + `${params.id}/`);
  const todo = response.json();
  return todo;
};
