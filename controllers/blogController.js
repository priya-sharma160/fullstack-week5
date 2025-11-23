const Blog = require("../models/blogModel");
const mongoose = require("mongoose");

 // GET /blogs
 const getAllBlogs = async (req, res) => {
    try{
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve blog" });
    }
 };
 
// POST /blogs
const createBlog = async (req, res) => {
    try{
      const newBlog = await Blog.create({ ...req.body });
      res.status(201).json(newBlog);
    } catch (error) {
        res.status(400).json({ message: "Failed to create blog", error: error.message });
    }
 };

// GET /blogs/:blogsId
const getBlogById = async (req, res) => {
  const { blogsId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(blogsId)) {
    return res.status(400).json({ message: "Invalid blog ID" });
    }

try {
    const blogs = await Blog.findById(blogsId);
    if (blogs) {
        res.status(200).json(blogs);
    } else {
        res.status(404).json({ message: "Blog not found" });
    }
    } catch (error) {
    res.status(500).json({ message: "Failed to retrieve blog" });
    }
};

// PUT /blogs/:blogsId
const updateBlog = async (req, res) => {
  const { blogsId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(blogsId)) {
    return res.status(400).json({ message: "Invalid blog ID" });
    }
    try {
    const updatedBlog = await Blog.findOneAndUpdate(
    { _id: blogsId },
    { ...req.body },
    { new: true }
  );
  if (updatedBlog) {
    res.status(200).json(updatedBlog);
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
} catch (error) {
    res.status(500).json({ message: "Failed to update blog" });
}
};

// DELETE /blogs/:blogsId
const deleteBlog = async (req, res) => {
  const { blogsId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(blogsId)) {
    return res.status(400).json({ message: "Invalid blog ID" });
 }

 try {
  const deletedBlog = await Blog.findOneAndDelete({ _id: blogsId });
  if (deletedBlog) {
    res.status(200).json({ message: "Blog deleted successfully" });
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
} catch (error) {
    res.status(500).json({ message: "Failed to delete blog" });
 }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};