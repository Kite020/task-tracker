# 📋 MERN Task Tracker

A modern, full-stack Task Tracker web application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. The application enables users to efficiently manage daily tasks with complete CRUD functionality, real-time updates, responsive design, and additional productivity features such as search, filtering, and sorting.

---

## 🌐 Live Demo

### Frontend
https://task-tracker-roan-six.vercel.app/

### Backend API
https://task-tracker-9gsu.onrender.com/

---

## 📸 Project Overview

The Task Tracker application provides a simple and intuitive interface for managing tasks. Users can create, edit, update, delete, search, filter, and organize tasks seamlessly. The application communicates with a RESTful backend API connected to a cloud-hosted MongoDB Atlas database.

---

## ✨ Features

### Core Features

- ✅ Create Tasks
- ✅ View All Tasks
- ✅ Update Existing Tasks
- ✅ Delete Tasks
- ✅ RESTful API Integration
- ✅ MongoDB Atlas Database
- ✅ Form Validation
- ✅ Responsive User Interface
- ✅ Dynamic Updates Without Page Refresh

### Bonus Features

- 🔍 Search Tasks by Title
- 🎯 Filter Tasks by Status
- 📅 Sort Tasks by Creation Date
- 🔔 Toast Notifications
- ⏳ Loading Spinner
- 🎨 Modern Responsive UI
- ⚙ Environment Variable Configuration
- ☁ Cloud Deployment (Render & Vercel)

---

## 🛠 Tech Stack

### Frontend

- React.js
- Bootstrap 5
- Axios
- React Toastify
- React Icons

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS
- Dotenv

### Deployment

- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## 📂 Project Structure

```
TaskTracker/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Kite020/task-tracker.git

cd task-tracker
```

---

## Backend Setup

```bash
cd backend

npm install

npm start
```

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5001/api/tasks
```

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/tasks` | Retrieve all tasks |
| GET | `/api/tasks/:id` | Retrieve a task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task |

---

## 💡 Application Workflow

1. User submits a task using the React frontend.
2. Axios sends the request to the Express backend.
3. Express processes the request and communicates with MongoDB Atlas using Mongoose.
4. MongoDB stores or updates the task.
5. The backend returns the updated response.
6. React updates the UI instantly without requiring a page refresh.

---

## 🎯 Future Improvements

- User Authentication (JWT)
- User-specific Task Management
- Dark Mode
- Task Categories
- Drag-and-Drop Task Organization
- Due Date Notifications
- Pagination
- Unit & Integration Testing

---

## 📷 Screenshots

### ➕ Add New Task

<p align="center">
  <img src="./screenshots/add-task.png" width="850">
</p>

---

### 📋 Task List

<p align="center">
  <img src="./screenshots/task-list.png" width="850">
</p>

---

## 👩‍💻 Author

**Ankita Dash**

B.Tech Computer Science Engineering  
Indian Institute of Technology Jammu

GitHub:
https://github.com/Kite020

---

## 📄 License

This project is developed for educational and internship evaluation purposes.
