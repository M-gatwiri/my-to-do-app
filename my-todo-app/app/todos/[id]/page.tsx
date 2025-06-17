import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function TodoDetailPage({ params }: Props) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);

  if (!res.ok) {
    notFound();
  }

  const todo = await res.json();

  return (
    <div className="mt-10 text-center">
      <h1 className="text-2xl font-bold">{todo.title}</h1>
      <p>Status: {todo.completed ? "✅ Completed" : "❌ Pending"}</p>
    </div>
  );
}
