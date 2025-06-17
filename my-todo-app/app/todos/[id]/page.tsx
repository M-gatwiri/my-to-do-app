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
      <h1 className="text-3xl font-bold mb-4">Todo Item</h1>
      <p>
        <strong>ID:</strong> {todo.id}
      </p>
      <p>
        <strong>Title:</strong> {todo.title}
      </p>
      <p>
        <strong>Completed:</strong> {todo.completed ? "Yes" : "No"}
      </p>
    </div>
  );
}
