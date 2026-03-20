# 🚀 PostHub – MERN Social Media Post Creator

PostHub is a simple **MERN Stack** application that allows users to create and view social media posts with images and captions. This project demonstrates core backend concepts like building an Express server, performing CRUD operations using MongoDB, and integrating image storage using ImageKit.

---

## 📌 Features

* 📷 Upload images using **Multer**
* ☁️ Store images using **ImageKit**
* 📝 Add captions to posts
* 📡 REST API for creating and fetching posts
* 🌐 View all posts in a feed
* 🔗 MongoDB integration with Mongoose

---

## 🛠️ Tech Stack

* **MongoDB** – Database
* **Express.js** – Backend framework
* **React.js** – Frontend (MERN stack)
* **Node.js** – Runtime environment
* **Multer** – File upload handling
* **ImageKit** – Image storage service
* **Mongoose** – MongoDB ODM

---

## 📂 Project Structure (Backend)

```
├── Models/
│   └── post.model.js
├── Services/
│   └── storage.services.js
├── app.js
└── server.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Karthik7-github/Mern-Stack-Applications.git
cd Mern-Stack-Applications
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_url
```

### 4️⃣ Run the server

```bash
npm start
```

---

## 🔌 API Endpoints

### ➤ Create a Post

**POST** `/create-post`

* Upload an image and caption

**Form Data:**

* `image` (file)
* `caption` (string)

---

### ➤ Get All Posts

**GET** `/posts`

* Fetch all posts for feed display

---

## 💡 Core Concepts Covered

This project demonstrates:

* ✅ Creating an **Express server**
* ✅ Building REST APIs
* ✅ Handling file uploads with **Multer**
* ✅ Connecting to **MongoDB**
* ✅ Creating **Mongoose schema & models**
* ✅ Storing and retrieving data
* ✅ Integrating third-party service (**ImageKit**)
* ✅ Building a basic **MERN application flow**

---

## 🧠 Core Backend Logic

```javascript
const express = require('express');
const multer = require('multer');
const uploadFile = require("./Services/storage.services")
const postModel = require("./Models/post.model")
const cors = require("cors")

const app = express();
app.use(cors())
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post', upload.single("image"), async (req, res) => {
    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "Post created successfully",
        post
    })
})

app.get("/posts", async (req, res) => {
    const posts = await postModel.find()

    return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
})

module.exports = app;
```

---

## 🚀 Future Improvements

* 🔐 User authentication (JWT)
* ❤️ Like & comment system
* 🗑️ Delete & update posts
* 📱 Better UI/UX in frontend
* ⏱️ Post scheduling feature

---

## 🤝 Contributing

Feel free to fork this repo and improve it. Contributions are welcome!

---

## 📄 License

This project is open-source and available under the MIT License.
