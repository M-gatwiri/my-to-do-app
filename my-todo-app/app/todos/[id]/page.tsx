import React from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface PageProps {
  params: {
    id: string;
  };
}

const TodoDetailPage = async ({ params }: PageProps) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);

  if (!res.ok) {
    return <div className="text-red-600 text-center mt-10">Todo not found</div>;
  }

  const todo: Todo = await res.json();

  return (
    <div className="mt-10 text-center">
      <h1 className="text-2xl font-bold">{todo.title}</h1>
      <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
    </div>
  );
};

export default TodoDetailPage;
