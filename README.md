# Study Flow

A full-stack application that helps students organize and track their daily tasks efficiently.

## Link

```bash 
https://study-flow-ziro.onrender.com/https://study-flow-ziro.onrender.com/
```

## 🚀 Features

### Authentication

* User Signup
* User Login
* JWT Authentication
* Protected Routes
* Password Hashing with bcrypt

### Task Management

* Create Tasks
* Update Tasks
* Delete Tasks
* Mark Tasks as Completed
* Mark Tasks as Pending

### Filtering

* View All Tasks
* View Completed Tasks
* View Pending Tasks

### User Experience

* Responsive Design
* Clean UI with Tailwind CSS
* Real-Time Task Updates
* Error Handling

---

## 🛠️ Tech Stack

### Frontend

* Ejs
* Tailwind css

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcrypt.js

---

## 📁 Project Structure

```text
student-task-manager
│── controllers
│── middleware
│── models
│── routes
│── config
│── views
│── server.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/student-task-manager.git
cd student-task-manager
```

### Install Backend Dependencies

```bash
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the server directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Application

### Start Backend

```bash
node server.js
```

---

## 📡 API Endpoints

### Auth Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/signup | Signup User |
| POST   | /api/login    | Login User    |

### Task Routes

| Method | Endpoint       | Description        |
| ------ | -------------- | ------------------ |
| POST   | /api/createTask     | Create Task        |
| PUT    | /api/task/editTask/:id | Update Task        |
| DELETE | /task/deleteTask/:id | Delete Task        |
| PUT  | /api/task/status/:id | Toggle Task Status |

---

## 📚 Learning Outcomes

* REST APIs
* Express Routing
* MongoDB CRUD Operations
* Authentication & Authorization
* JWT Implementation
* Password Security
* Tailwind CSS

---

## 🔮 Future Improvements

* Task Priorities
* Due Dates
* Calendar View
* Email Notifications
* Dark Mode
* Categories & Tags
* Drag and Drop Tasks
* Team Collaboration

---

## 👨‍💻 Contributors

* Yogesh Adhikari
* Bipin Joshi
