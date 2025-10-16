// [id]/page.js
"use client";
import React from "react";
import { useParams } from "next/navigation";

const blogData = {
  "1": { title: "Top IT Trends to Watch in 2024", img: "/img.jpeg", des: "Full blog description..." },
  "2": { title: "How AI is Shaping the Future of Tech", img: "/img.jpeg", des: "Full blog description..." },
};

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) return <h1>Blog Not Found</h1>;

  return (
    <section id="blog-detail-page" className="container">
      <img src={blog.img} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p>{blog.des}</p>
    </section>
  );
};

export default BlogPost;
