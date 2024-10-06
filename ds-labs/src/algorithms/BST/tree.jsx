import React from 'react';

function BSTPage() {
return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
            <header style={{ padding: '10px', backgroundColor: '#2c3e50', color: 'white' }}>
                <h1>Binary Search Trees</h1>
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
                        <li><a href="#operations" style={{ textDecoration: 'none', color: '#2c3e50' }}>Basic Operations</a></li>
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
                            <p>The aim of this page is to provide a comprehensive understanding of Binary Search Trees (BST), their implementation, operations, and applications in computer science.</p>
                        </section>

                        <section id="overview">
                            <h2>Overview</h2>
                            <p>A Binary Search Tree is a hierarchical data structure where each node has at most two children. The key property of a BST is that for any given node, all nodes in the left subtree have values less than the node's value, and all nodes in the right subtree have values greater than the node's value. This property enables efficient searching, insertion, and deletion operations.</p>
                        </section>

                        <section id="recap">
                            <h2>Recap</h2>
                            <p>In previous lessons, we explored linear data structures like arrays and linked lists. Binary Search Trees build upon these concepts by introducing a hierarchical organization that allows for more efficient searching and maintains sorted data automatically.</p>
                        </section>

                        <section id="pretest">
                            <h2>Pretest</h2>
                            <p>Before we dive deeper into Binary Search Trees, take this quick pretest to assess your understanding of tree data structures and binary search algorithms.</p>
                        </section>

                        <section id="operations">
                            <h2>Basic Operations</h2>
                            <p>This section covers the fundamental operations in a Binary Search Tree:</p>
                            <ul>
                                <li>Insertion - O(log n) average case</li>
                                <li>Deletion - O(log n) average case</li>
                                <li>Search - O(log n) average case</li>
                                <li>Traversal - Inorder, Preorder, Postorder</li>
                            </ul>
                        </section>

                        <section id="quiz">
                            <h2>Quiz</h2>
                            <p>Test your knowledge on Binary Search Trees with this short quiz. Check your understanding of tree operations, time complexities, and common applications.</p>
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

            <footer style={{
                textAlign: "center",
                padding: "10px",
                backgroundColor: "#2c3e50",
                color: "white",
                marginTop: "20px"
            }}>
            </footer>
        </div>
);
}

export default BSTPage;