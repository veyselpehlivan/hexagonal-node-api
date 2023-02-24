const blogService = require("../domains/services/BlogService");

exports.getAllBlogs = async () => {
  return await blogService.getAllBlogs();
};

exports.createBlog = async (blog) => {
  return await blogService.createBlog(blog);
};
exports.getBlogById = async (id) => {
  return await blogService.getBlogById(id);
};

exports.getBlogByUserId = async (userId) => {
  return await blogService.getBlogByUserId(userId);
};

exports.updateBlog = async (id, blog) => {
  return await blogService.updateBlog(id, blog);
};

exports.deleteBlog = async (id) => {
  return await blogService.deleteBlog(id);
};
