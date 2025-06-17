import React from "react";
import { notFound } from "next/navigation";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface Params {
  params: {
    id: string;
  };
}

const TodoDetailPage = async ({ params }: Params) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);

  if (!res.ok) {
    notFound(); // Proper Next.js handling for 404
  }

  const todo: Todo = await res.json();

  return (
    <div className="mt-10 text-center">
      <h1 className="text-2xl font-bold">{todo.title}</h1>
      <p>Status: {todo.completed ? "✅ Completed" : "❌ Pending"}</p>
    </div>
  );
};

export default TodoDetailPage;
