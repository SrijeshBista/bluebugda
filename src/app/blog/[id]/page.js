// Blog detail page (server component for static export)
import React from "react";

const blogData = {
  "1": { title: "Top IT Trends to Watch in 2024", img: "/img.jpeg", des: "Full blog description..." },
  "2": { title: "How AI is Shaping the Future of Tech", img: "/img.jpeg", des: "Full blog description..." },
};

// ✅ Add static params for export
export async function generateStaticParams() {
  return Object.keys(blogData).map((id) => ({ id }));
}

export default function BlogPost({ params }) {
  const blog = blogData[params.id];

  if (!blog) return <h1>Blog Not Found</h1>;

  return (
    <section id="blog-detail-page" className="container">
      <img src={blog.img} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p>{blog.des}</p>
    </section>
  );
}
