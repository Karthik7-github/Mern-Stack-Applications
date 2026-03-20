# 🔐 PostHub Auth – MERN App with JWT Authentication

PostHub Auth is a secure **MERN Stack** application where users can create and view posts **only after authentication**. This project demonstrates how to implement **JWT-based authentication** with **cookies**, along with protected routes and secure post creation.

---

## 🚀 Features

* 🔐 User authentication using **JWT (JSON Web Tokens)**
* 🍪 Secure token storage using **HTTP-only cookies**
* 🧑‍💻 User registration & login system
* 🛡️ Protected routes (only authenticated users can create posts)
* 📷 Image upload with **Multer**
* ☁️ Image storage using **ImageKit**
* 📝 Create and view posts with captions
* 📡 REST API architecture

---

## 🛠️ Tech Stack

* **MongoDB** – Database
* **Express.js** – Backend framework
* **Node.js** – Runtime
* **JWT** – Authentication
* **Cookies** – Secure session handling
* **Mongoose** – ODM
---

## 📂 Project Structure (Backend)

```id="p1m8qz"
├── Models/
│   ├── user.model.js
│   └── post.model.js
├── Middleware/
│   └── auth.middleware.js
├── Services/
│   └── storage.services.js
├── Routes/
│   └── auth.routes.js
├── app.js
└── server.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash id="9x8k2l"
git clone https://github.com/Karthik7-github/Mern-Stack-Applications.git
cd Mern-Stack-Applications
```

### 2️⃣ Install dependencies

```bash id="6z1h3q"
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file:

```env id="m4t9yb"
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
```

---

### 4️⃣ Run the server

```bash id="g7k2pq"
npm start
```

---

## 🔌 API Endpoints

### 🔑 Auth Routes

#### ➤ Register User

**POST** `/register`

* Create a new user

**Body:**

```json id="9m5l8v"
{
  "username": "karthik",
  "email": "karthik@example.com",
  "password": "123456"
}
```

---

#### ➤ Login User

**POST** `/login`

* Authenticates user and sets JWT in cookie

---

#### ➤ Logout User

**GET** `/logout`

* Clears authentication cookie

---

## 📸 Post Routes (Protected)

### ➤ Create Post

**POST** `/create-post`

* 🔒 Requires authentication
* Upload image + caption

**Form Data:**

* `image` (file)
* `caption` (string)

---

### ➤ Get All Posts

**GET** `/posts`

* Fetch all posts (can be public or protected based on your setup)

---

## 🔐 Authentication Flow

1. User registers or logs in
2. Server generates a **JWT token**
3. Token is stored in **HTTP-only cookies**
4. On protected routes:

   * Middleware verifies the token
   * If valid → request proceeds
   * If invalid → access denied

---

## 🧠 Core Concepts Covered

* ✅ JWT Authentication
* ✅ Cookies & session handling
* ✅ Middleware for route protection
* ✅ Password hashing (if implemented using bcrypt)
* ✅ Secure API design
* ✅ File uploads with Multer
* ✅ MongoDB schema & relationships
* ✅ MERN full-stack integration

---

## 🛡️ Example Auth Middleware

```javascript id="r2x7nc"
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;
```

---

## 🚀 Future Improvements

* 🔐 Refresh tokens
* 📧 Email verification
* 🔑 Forgot/reset password
* ❤️ Likes & comments
* 👥 Follow/unfollow users
* 📱 Better frontend UI

---

## 🤝 Contributing

Feel free to fork and improve this project!

---

## 📄 License

This project is open-source and available under the MIT License.

---

## ⭐ Final Note

This project is a great demonstration of:

* Real-world authentication system
* Secure backend architecture
* Practical MERN stack usage
* merge both projects into **one advanced README (portfolio ready)**
* or help you write a **LinkedIn project post** 🔥
