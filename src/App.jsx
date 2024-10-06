import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container main-content">
        <h1>Welcome to the Data Structures Lab</h1>
        <p>Explore the fascinating world of data structures and algorithms through interactive demonstrations and clear explanations.</p>
        
        <section className="card">
          <h2>What You'll Find Here</h2>
          <ul>
            <li>Interactive Visualizations: See how different data structures work in real-time.</li>
            <li>Step-by-Step Explanations: Understand the logic behind various algorithms.</li>
            <li>Practical Examples: Learn how these concepts apply to real-world problems.</li>
          </ul>
        </section>

        <section className="card">
          <h2>Featured Algorithms</h2>
          <ul>
            <li><Link to="/merge-sort" target="_blank" rel="noopener noreferrer" onClick={(e) => {e.preventDefault(); window.open("/merge-sort", "_blank")}}>Sorting Algorithms (Merge Sort)</Link></li>
            <li><Link to="/linked-lists" target="_blank" rel="noopener noreferrer" onClick={(e) => {e.preventDefault(); window.open("/linked-lists", "_blank")}}>Linked Lists</Link></li>
            <li><Link to="/binary-search-tree" target="_blank" rel="noopener noreferrer" onClick={(e) => {e.preventDefault(); window.open("/binary-search-tree", "_blank")}}>Binary Search Tree</Link></li>
            <li><Link to="/hashing" target="_blank" rel="noopener noreferrer" onClick={(e) => {e.preventDefault(); window.open("/hashing", "_blank")}}>Hashing</Link></li>
            <li><Link to="/floyds-algorithm" target="_blank" rel="noopener noreferrer" onClick={(e) => {e.preventDefault(); window.open("/floyds-algorithm", "_blank")}}>Floyd's Algorithm</Link></li>
          </ul>
        </section>

        <section className="card">
          <h2>Why Data Structures Matter</h2>
          <p>Efficient data structures are the backbone of optimized algorithms. They help in:</p>
          <ol>
            <li>Organizing and storing data effectively</li>
            <li>Reducing time complexity of operations</li>
            <li>Solving complex computational problems</li>
          </ol>
          <p>Whether you're a student, a coding enthusiast, or a professional developer, understanding data structures is crucial for writing efficient and scalable code.</p>
        </section>

        <section className="card">
          <h2>Get Started</h2>
          <p>Browse through our collection of algorithms and data structures. Each page provides:</p>
          <ul>
            <li>A brief introduction to the concept</li>
            <li>Visual representation of how it works</li>
            <li>Time and space complexity analysis</li>
          </ul>
          <p>Happy learning!</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;