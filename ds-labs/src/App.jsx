import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="app">
      <Header />
      <main className="container main-content">
        <h1>Welcome to the Data Structures Lab</h1>
        <p>Explore the fascinating world of data structures and algorithms through interactive demonstrations and clear explanations.</p>
        
        <section className="card">
          <h2>What You'll Find Here</h2>
          <p>Our Data Structures Lab offers a comprehensive learning experience for each algorithm and data structure. Here's what you can expect:</p>
          <ul>
            <li><strong>Interactive Visualizations:</strong> Watch algorithms and data structures come to life with real-time, step-by-step animations.</li>
            <li><strong>Pre-test:</strong> Assess your initial understanding before diving into the topic.</li>
            <li><strong>Concise Theory:</strong> Grasp key concepts with clear, to-the-point explanations.</li>
            <li><strong>Implementation Guide:</strong> Learn how to code the algorithm or data structure with detailed examples.</li>
            <li><strong>Quiz:</strong> Test your knowledge with targeted questions to reinforce your learning.</li>
            <li><strong>Post-test:</strong> Measure your progress and identify areas for further study.</li>
          </ul>
          <p>Whether you're a beginner or looking to refresh your knowledge, our structured approach ensures a thorough understanding of each data structure and algorithm.</p>
        </section>

        <section className="card">
          <h2>Featured Algorithms</h2>
          <ul>
            {[
              { name: "Sorting Algorithms (Merge Sort)", icon: "🔄", href: "/merge-sort" },
              { name: "Linked Lists", icon: "🔗", href: "/linked-lists" },
              { name: "Binary Search Tree", icon: "🌳", href: "/binary-search-tree" },
              { name: "Hashing", icon: "🔐", href: "/hashing" },
              { name: "Floyd's Algorithm", icon: "🛣️", href: "/floyds-algorithm" }
            ].map((algo, index) => (
              <li key={index}>
                <a href={algo.href} target="_blank" rel="noopener noreferrer">
                  <span>{algo.icon}</span>
                  <span>{algo.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Why Data Structures Matter</h2>
          <p>Efficient data structures are the backbone of optimized algorithms. They help in:</p>
          <ol>
            <li>Organizing and storing data effectively</li>
            <li>Reducing time complexity of operations</li>
            <li>Solving complex computational problems</li>
            {expanded && (
              <>
                <li>Improving memory usage and management</li>
                <li>Enhancing code readability and maintainability</li>
              </>
            )}
          </ol>
          <p>Whether you're a student, a coding enthusiast, or a professional developer, understanding data structures is crucial for writing efficient and scalable code.</p>
          {expanded && (
            <div className="mt-4">
              <p>Data structures provide a way to organize and store data that enables efficient access and modification. They are fundamental to computer science and software engineering, forming the building blocks for more complex algorithms and applications.</p>
              <p className="mt-2">By choosing the right data structure for a given problem, developers can significantly improve the performance of their applications. This can mean faster search times, reduced memory usage, or more efficient data manipulation.</p>
            </div>
          )}
          <button 
  onClick={() => setExpanded(!expanded)} 
  className="read-more-btn"
>
  {expanded ? 'Read Less' : 'Read More'}
</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;