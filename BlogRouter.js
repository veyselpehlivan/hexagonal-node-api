const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
  getBlogByUserId,
} = require("./adapters/BlogWebAdapter");

const router = express.Router();

router.route("/").get(getAllBlogs).post(createBlog);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
router.route("/find-by-user/:userId").get(getBlogByUserId);

module.exports = router;
