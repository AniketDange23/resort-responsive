const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/blogDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Define MongoDB schema
const blogSchema = new mongoose.Schema({
  title: String,
  dateTime: String,
  description: String,
  subTitle1: String,
  content1: String,
  content2: String,
  content3: String,
  userImage: String,
  postImage: String,
});

const Blog = mongoose.model("Blog", blogSchema);

// Routes
app.post("/blogs", async (req, res) => {
  try {
    console.log("Received blog data:", req.body); // Debug
    const newBlog = new Blog(req.body);
    await newBlog.save();
    console.log("New blog created:", newBlog);
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error.message);
    res.status(400).json({ message: error.message });
  }
});

app.get("/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    console.log("Blogs retrieved successfully:", blogs); // Debug
    res.json(blogs);
  } catch (error) {
    console.error("Error retrieving blogs:", error.message);
    res.status(500).json({ message: error.message });
  }
});

app.delete("/blogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    console.log("Blog deleted successfully"); // Debug
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error.message);
    res.status(404).json({ message: "Blog not found" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
