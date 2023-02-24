const blogPersistancePort = require("../../ports/BlogPersistancePort");

exports.getAllBlogs = async () => {
  return await blogPersistancePort.getAllBlogs();
};

exports.createBlog = async (blog) => {
  return await blogPersistancePort.createBlog(blog);
};
exports.getBlogById = async (id) => {
  return await blogPersistancePort.getBlogById(id);
};

exports.getBlogByUserId = async (userId) => {
  return await blogPersistancePort.getBlogByUserId(userId);
};

exports.updateBlog = async (id, blog) => {
  return await blogPersistancePort.updateBlog(id, blog);
};

exports.deleteBlog = async (id) => {
  return await blogPersistancePort.deleteBlog(id);
};
