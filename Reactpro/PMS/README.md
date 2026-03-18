# 🗂️ Task Management System (React App)

This is a **Task Management System** built using React, where tasks can be created and assigned to different users (employees). The application includes role-based access for **Admin** and **Employees**, providing different dashboards and functionalities.

## 🚀 Features

* 🔐 User Authentication (Admin & Employee login)
* 👨‍💼 Admin Dashboard to manage and assign tasks
* 👨‍🔧 Employee Dashboard to view assigned tasks
* 💾 Local storage used to persist login sessions
* 🔄 Dynamic UI rendering based on user role

## 🛠️ Tech Stack

* **Frontend:** React.js
* **State Management:** React Hooks & Context API
* **Styling:** CSS
* **Storage:** Browser LocalStorage

## ⚙️ How It Works

1. User logs in using email and password
2. System checks credentials:

   * Admin login (fixed credentials)
   * Employee login (validated from stored user data)
3. Based on role:

   * Admin is redirected to Admin Dashboard
   * Employee is redirected to Employee Dashboard
4. User session is saved in localStorage
5. On reload, user remains logged in

## 🔑 Default Credentials

### Admin:

```
Email: admin@me.com
Password: 123
```

### Employees:

* Credentials are stored in the application data (via Context API)

## 📁 Project Structure

```id="q7xk29"
/src
  ├── components
  │     ├── Auth/Login.js
  │     ├── Dashboard/AdminDashboard.js
  │     └── Dashboard/EmployeeDashboard.js
  ├── context/AuthProvider.js
  ├── App.js
  └── index.js
```

## ▶️ Setup Instructions

1. Clone the repository
2. Navigate to the project folder
3. Install dependencies:

   ```
   npm install
   ```
4. Start the development server:

   ```
   npm run dev
   ```

   or

   ```
   npm start
   ```
5. Open in browser:

   ```
   http://localhost:3000
   ```

## 📌 Notes

* Admin credentials are hardcoded for demo purposes
* Employee data is managed via Context API
* LocalStorage is used for session persistence (not secure for production)

## 💡 Future Improvements

* Add backend integration (Node.js + MongoDB)
* Implement secure authentication (JWT)
* Add task editing, deletion, and status tracking
* Improve UI/UX with modern design

---

## 📖 Description

This project demonstrates a simple yet effective **role-based task management system** using React. It is ideal for learning **authentication flow, state management, and component-based architecture**.

---

Feel free to explore and enhance this project 🚀
