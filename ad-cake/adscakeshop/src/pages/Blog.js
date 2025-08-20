// src/pages/Blog.js
import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Tips for Perfect Cake Frosting",
      excerpt: "Learn the secrets to achieving smooth, beautiful frosting every time.",
      date: "June 15, 2023",
      author: "Anna Davis"
    },
    {
      id: 2,
      title: "Seasonal Cake Trends for Summer 2023",
      excerpt: "Discover the hottest cake designs and flavors for the summer season.",
      date: "June 1, 2023",
      author: "David Smith"
    },
    {
      id: 3,
      title: "Behind the Scenes: Creating a Wedding Cake Masterpiece",
      excerpt: "A look at our process for designing and baking an elaborate wedding cake.",
      date: "May 20, 2023",
      author: "Sarah Johnson"
    },
    {
      id: 4,
      title: "Gluten-Free Cake Alternatives That Actually Taste Great",
      excerpt: "Debunking myths about gluten-free baking with our favorite recipes.",
      date: "May 5, 2023",
      author: "Anna Davis"
    }
  ];

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Blog</h2>
            <p>Baking tips, trends, and behind-the-scenes stories</p>
          </div>

          <div className="grid grid-2">
            {blogPosts.map(post => (
              <div className="card" key={post.id}>
                <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5', fontSize: '4rem' }}>
                  📝
                </div>
                <div style={{ padding: '25px' }}>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', fontSize: '0.9rem', color: '#777' }}>
                    <span>{post.date}</span>
                    <span>By {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="btn btn-secondary">Read More</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginTop: '40px' }}>
            <button className="btn btn-secondary">Previous</button>
            <span>
              <span style={{ padding: '8px 12px', backgroundColor: '#8d6e63', color: 'white', borderRadius: '4px' }}>1</span>
              <a href="#" style={{ padding: '8px 12px', textDecoration: 'none', color: '#333' }}>2</a>
              <a href="#" style={{ padding: '8px 12px', textDecoration: 'none', color: '#333' }}>3</a>
            </span>
            <button className="btn btn-secondary">Next</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;