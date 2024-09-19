import React from 'react';

function BinarySearchTreePage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <header style={{ padding: '10px', backgroundColor: '#2c3e50', color: 'white' }}>
        <h1>Binary Search Tree</h1>
      </header>

      <div style={{ display: 'flex', marginTop: '20px' }}>
        {/* Sidebar Navigation */}
        <nav style={{
          width: '200px',
          marginRight: '20px',
          backgroundColor: '#fff',
          padding: '15px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}>
          <h2>Contents</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="#aim" style={{ textDecoration: 'none', color: '#2c3e50' }}>Aim</a></li>
            <li><a href="#overview" style={{ textDecoration: 'none', color: '#2c3e50' }}>Overview</a></li>
            <li><a href="#recap" style={{ textDecoration: 'none', color: '#2c3e50' }}>Recap</a></li>
            <li><a href="#pretest" style={{ textDecoration: 'none', color: '#2c3e50' }}>Pretest</a></li>
            <li><a href="#implementation" style={{ textDecoration: 'none', color: '#2c3e50' }}>Implementation</a></li>
            <li><a href="#further-reading" style={{ textDecoration: 'none', color: '#2c3e50' }}>Reading/References</a></li>
            <li><a href="#quiz" style={{ textDecoration: 'none', color: '#2c3e50' }}>Quiz</a></li>
            <li><a href="#posttest" style={{ textDecoration: 'none', color: '#2c3e50' }}>Posttest</a></li>
            <li><a href="#feedback" style={{ textDecoration: 'none', color: '#2c3e50' }}>Feedback</a></li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main style={{ flexGrow: 1 }}>
          {/* Content Box */}
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <section id="aim">
              <h2>Aim</h2>
              <p>The aim of this page is to provide a comprehensive understanding of Binary Search Trees, their implementation, and applications.</p>
            </section>

            <section id="overview">
              <h2>Overview</h2>
              <p>A Binary Search Tree (BST) is a node-based binary tree data structure which has the following properties:</p>
              <ul>
                <li>The left subtree of a node contains only nodes with keys lesser than the node's key.</li>
                <li>The right subtree of a node contains only nodes with keys greater than the node's key.</li>
                <li>The left and right subtree each must also be a binary search tree.</li>
              </ul>
            </section>

            <section id="recap">
              <h2>Recap</h2>
              <p>In previous lessons, we explored various data structures. Binary Search Trees are significant for their efficient searching, insertion, and deletion operations, especially when the tree is balanced.</p>
            </section>

            <section id="pretest">
              <h2>Pretest</h2>
              <p>Before we dive deeper into Binary Search Trees, take this quick pretest to assess your understanding of tree data structures.</p>
            </section>

            <section id="implementation">
              <h2>Implementation</h2>
              <p>This section discusses how to implement a Binary Search Tree, including node creation, insertion, deletion, and traversal algorithms.</p>
            </section>

            <section id="further-reading">
              <h2>Further Reading/References</h2>
              <p>For more detailed information on Floyd's algorithm, refer to the following resources:</p>
              <ul>
                <li><a href="https://www.w3schools.com/dsa/dsa_data_binarysearchtrees.php">W3-schools - Binary search tree</a></li>
                <li><a href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/">GeeksforGeeks - Binary search tree</a></li>
              </ul>
            </section>

            <section id="quiz">
              <h2>Quiz</h2>
              <p>Test your knowledge on Binary Search Trees with this short quiz. Check your understanding of the data structure and its operations.</p>
            </section>

            <section id="posttest">
              <h2>Posttest</h2>
              <p>After completing this section, please take the posttest to evaluate what you have learned about Binary Search Trees.</p>
            </section>

            <section id="feedback">
              <h2>Feedback</h2>
              <p>Your feedback is valuable! Please let us know your thoughts on this lesson about Binary Search Trees.</p>
            </section>

          </div>

        </main>

      </div>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "10px",
        backgroundColor: "#2c3e50",
        color: "white",
        marginTop: "20px"
      }}>
        <p>© 2024 Binary Search Tree Education</p>
      </footer>

    </div>
  );
}

export default BinarySearchTreePage;

        

