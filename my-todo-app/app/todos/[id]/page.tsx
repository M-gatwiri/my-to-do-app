import { notFound } from "next/navigation";

async function getTodo(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) return undefined;
  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id);

  if (!todo) return notFound();

  return (
    <div>
      <h1>Todo #{todo.id}</h1>
      <p>{todo.title}</p>
      <p>Status: {todo.completed ? "Completed ✅" : "Incomplete ❌"}</p>
    </div>
  );
}
