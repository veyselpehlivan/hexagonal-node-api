const blogPersistanceAdapter = require("../adapters/BlogPersistanceAdapter");

exports.getAllBlogs = async () => {
  return await blogPersistanceAdapter.getAllBlogs();
};

exports.createBlog = async (blog) => {
  return await blogPersistanceAdapter.createBlog(blog);
};
exports.getBlogById = async (id) => {
  return await blogPersistanceAdapter.getBlogById(id);
};

exports.getBlogByUserId = async (userId) => {
  return await blogPersistanceAdapter.getBlogByUserId(userId);
};

exports.updateBlog = async (id, blog) => {
  return await blogPersistanceAdapter.updateBlog(id, blog);
};

exports.deleteBlog = async (id) => {
  return await blogPersistanceAdapter.deleteBlog(id);
};
