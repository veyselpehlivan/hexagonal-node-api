const blogInputPort = require("../ports/BlogInputPort");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogInputPort.getAllBlogs();
    res.json({ data: blogs, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await blogInputPort.createBlog(req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogInputPort.getBlogById(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlogByUserId = async (req, res) => {
  try {
    const blog = await blogInputPort.getBlogByUserId(
      parseInt(req.params.userId)
    );
    res.json({ data: blog, status: "success" });
    console.log(parseInt(req.params.userId));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blog = await blogInputPort.updateBlog(req.params.id, req.body);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await blogInputPort.deleteBlog(req.params.id);
    res.json({ data: blog, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
