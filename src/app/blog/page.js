// Blog list page (NO "use client" needed)
import React from "react";
import Link from "next/link";

const blogs = [
  { id: "1", title: "Top IT Trends to Watch in 2024", img: "/img.jpeg" },
  { id: "2", title: "How AI is Shaping the Future of Tech", img: "/img.jpeg" },
];

export default function BlogPage() {
  return (
    <section id="blog-section" className="container">
      <h1>OUR BLOGS</h1>
      <div className="image-row">
        {blogs.map((b) => (
          <Link key={b.id} href={`/blog/${b.id}`} className="blog-detail">
            <img src={b.img} alt={b.title} />
            <p>{b.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
