const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// ---------------- DB CONNECTION ----------------
mongoose.connect(Connection-string)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ---------------- MODEL ----------------
const DiarySchema = new mongoose.Schema({
  date: { type: String, unique: true },
  content: String
});

const Diary = mongoose.model("Diary", DiarySchema);

// ---------------- ROUTES ----------------

// WRITE
app.post("/write", async (req, res) => {
  const { date, content } = req.body;

  try {
    const saved = await Diary.create({ date, content });
    res.json(saved);
  } catch (err) {
    res.json({ message: "Already exists or error", error: err });
  }
});

// READ
app.get("/read/:date", async (req, res) => {
  const data = await Diary.findOne({ date: req.params.date });

  if (!data) return res.json({ message: "No data found" });

  res.json(data);
});


// UPDATE
app.put("/update", async (req, res) => {
  const { date, content } = req.body;

  const updated = await Diary.findOneAndUpdate(
    { date },
    { content },
    { new: true }
  );

  res.json(updated || { message: "No record found" });
});

// DELETE
app.delete("/delete/:date", async (req, res) => {
  await Diary.deleteOne({ date: req.params.date });
  res.json({ message: "Deleted" });
});

// ---------------- START SERVER ----------------
app.listen(5000, () => console.log("Server running on port 5000"));


// Contact Submisiions 

// ---------------- CONTACT SCHEMA ----------------
const ContactSchema = new mongoose.Schema({
  fullname: String,
  phone: String,
  email: String,
  suggestion: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Contact = mongoose.model("Contact", ContactSchema);


// SAVE CONTACT FORM
app.post("/contact", async (req, res) => {
  try {
    const { fullname, phone, email, suggestion } = req.body;

    const saved = await Contact.create({
      fullname,
      phone,
      email,
      suggestion
    });

    res.json({ message: "Contact Saved", data: saved });
  } 
  catch (err) {
    res.status(500).json({ message: "Error Saving Contact", error: err });
  }
});
