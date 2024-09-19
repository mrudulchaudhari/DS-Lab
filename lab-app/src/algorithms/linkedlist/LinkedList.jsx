import React from 'react';

function LinkedListPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <header style={{ padding: '10px', backgroundColor: '#2c3e50', color: 'white' }}>
        <h1>Linked List</h1>
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
              <p>The aim of this page is to provide a comprehensive understanding of Linked Lists, their implementation, and applications.</p>
            </section>

            <section id="overview">
              <h2>Overview</h2>
              <p>A Linked List is a linear data structure in which elements are stored in nodes. Each node contains a data field and a reference (or link) to the next node in the sequence. Linked Lists have the following properties:</p>
              <ul>
                <li>Elements are linked using pointers</li>
                <li>Each node contains a data field and a reference to the next node</li>
                <li>The last node typically points to null</li>
              </ul>
            </section>

            <section id="recap">
              <h2>Recap</h2>
              <p>In previous lessons, we explored various data structures. Linked Lists are significant for their flexibility in memory allocation and efficient insertion and deletion operations.</p>
            </section>

            <section id="pretest">
              <h2>Pretest</h2>
              <p>Before we dive deeper into Linked Lists, take this quick pretest to assess your understanding of linear data structures.</p>
            </section>

            <section id="implementation">
              <h2>Implementation</h2>
              <p>This section discusses how to implement a Linked List, including node creation, insertion, deletion, and traversal algorithms.</p>
            </section>

            <section id="further-reading">
              <h2>Further Reading/References</h2>
              <p>For more detailed information on Linked Lists, refer to the following resources:</p>
              {/* <ul>
                <li><a href="https://www.w3schools.com/dsa/dsa_data_linkedlist.php">W3-schools - Linked List</a></li>
                <li><a href="https://www.geeksforgeeks.org/data-structures/linked-list/">GeeksforGeeks - Linked List</a></li>
              </ul> */}
            </section>

            <section id="quiz">
              <h2>Quiz</h2>
              <p>Test your knowledge on Linked Lists with this short quiz. Check your understanding of the data structure and its operations.</p>
            </section>

            <section id="posttest">
              <h2>Posttest</h2>
              <p>After completing this section, please take the posttest to evaluate what you have learned about Linked Lists.</p>
            </section>

            <section id="feedback">
              <h2>Feedback</h2>
              <p>Your feedback is valuable! Please let us know your thoughts on this lesson about Linked Lists.</p>
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
        <p>© 2024 Linked List Education</p>
      </footer>

    </div>
  );
}

export default LinkedListPage;