import { notFound } from 'next/navigation';

async function getTodo(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) return undefined;
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const todos: { id: number }[] = await res.json();

  return todos.map((todo) => ({
    id: todo.id.toString(),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id);

  if (!todo) return notFound();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Todo #{todo.id}</h1>
      <p className="mb-2">{todo.title}</p>
      <p>Status: {todo.completed ? '✅ Completed' : '❌ Incomplete'}</p>
    </div>
  );
}
