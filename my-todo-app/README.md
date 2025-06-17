 # 📝 My Todo App

A full-featured todo list application built using *React, **Next.js, and **TypeScript, styled with **Tailwind CSS*. This app lets users manage tasks with pagination, completion tracking, and dynamic routing for individual todos.

---

## 📋 Project Description

This todo application helps users stay organized by managing tasks efficiently. It showcases practical usage of:
- Next.js App Router with TypeScript
- State management
- Async data fetching and pagination
- Component-based design and modular CSS

---

## ✨ Features

- ✅ Add, complete, and remove todos
- 🔄 Pagination for improved performance on long lists
- 🧭 Dynamic routing for todo details (/todos/[id])
- ⚡ Fast, responsive UI with Tailwind CSS
- 🔐 Error boundary and custom 404 page
- 🧪 Easy to expand with future backend or authentication

---

## Screenshots

### screenshot 1
![Homepage] (./images/images.png)

### screenshot 2
![Todo List] (./images/image2.png)

## 🛠 Installation & Setup

bash
# Clone the repo
git clone https://github.com/M-gatwiri/my-todo-app.git

# Navigate to project folder
cd my-todo-app

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
http://localhost:3000


## 📜 Available Scripts


| Command           | Description                               |
|-------------------|-------------------------------------------|
| npm run dev     | Runs the app in development mode          |
| npm run build   | Builds the app for production             |
| npm start       | Starts the production server              |
| npm run lint    | Lints the codebase using ESLint           |


## 🧱 Technology Stack & 🏗 Architecture Decisions

### 🛠 Tech Stack

- ⚛ *React* – UI library for building components
- 🧪 *TypeScript* – Type-safe JavaScript
- ⚡ *Next.js* – React framework with server-side rendering
- 🎨 *Tailwind CSS* – Utility-first CSS framework
- 🧭 *App Router* – Next.js routing system

---

### 🧠 Architecture Decisions

- I used the App router for modern routing
- I separeted components by route
- No backend connected 
- The pagination is kept in the UI component for easy access


## 📡 API Usage

This project currently uses *mocked API data*. In future versions, this will be replaced with a backend API


## Known Issues

Here are the current limitations and known issues in the application:

- No backend implemented
- No authentication
- No database intergration yet
- Only basic error handling is implemented


## Future Improvements

- Add user authentication (sign up, log in, logout)
- Integrate a backend service and database
- Improve mobile responsiveness and accessibility
- Enhance UI with animations and user feedback on actions
- Add filtering, sorting, and search capabilities
- Enable drag-and-drop reordering of todos
- Create a dashboard to track task completion status


## Collaborators

This project is maintained by the following contributors:

- Mercy Gatwiri (https://github.com/M-gatwiri)

- Collaborator 
Mr Setemi Ojo(https://github.com/Oluwasetemi)