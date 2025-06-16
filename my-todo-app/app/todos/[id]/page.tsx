// File: app/todos/[id]/page.tsx

import React from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoDetailPage = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);

  if (!res.ok) {
    return <div className="text-red-600 text-center mt-10">Todo not found</div>;
  }

  const todo: Todo = await res.json();

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Todo Details</h1>

      <div className="bg-white p-6 rounded shadow mb-4">
        <p><strong>ID:</strong> {todo.id}</p>
        <p><strong>Title:</strong> {todo.title}</p>
        <p>
          <strong>Status:</strong>{' '}
          <span className={todo.completed ? 'text-green-600' : 'text-yellow-600'}>
            {todo.completed ? 'Completed' : 'Pending'}
          </span>
        </p>
      </div>

      
      <a
        href="/"
        className="inline-block mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
      >
        ← Back to Todos
      </a>
    </main>
  );
};

export default TodoDetailPage;
