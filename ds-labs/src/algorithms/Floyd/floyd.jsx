import React from 'react';

function FloydsAlgorithmPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <header style={{ padding: '10px', backgroundColor: '#2c3e50', color: 'white' }}>
        <h1>Floyd's Algorithm</h1>
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
            <li><a href="#quiz" style={{ textDecoration: 'none', color: '#2c3e50' }}>Quiz</a></li>
            <li><a href="#posttest" style={{ textDecoration: 'none', color: '#2c3e50' }}>Posttest</a></li>
            <li><a href="#further-reading" style={{ textDecoration: 'none', color: '#2c3e50' }}>Further Reading/References</a></li>
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
              <p>The aim of this page is to provide a comprehensive understanding of Floyd's algorithm, its implementation, and applications.</p>
            </section>

            <section id="overview">
              <h2>Overview</h2>
              <p>Floyd's algorithm is a dynamic programming algorithm used to find the shortest paths between all pairs of vertices in a weighted graph. It works by iteratively improving the shortest path estimates between vertices.</p>
            </section>

            <section id="recap">
              <h2>Recap</h2>
              <p>In previous lessons, we covered weighted graphs and their applications in detail. This algorithm is a simple yet powerful algorithm to determine the shortest paths between two vertices of a graph.</p>
            </section>

            <section id="pretest">
              <h2>Pretest</h2>
              <p>Before we dive deeper into Floyd's algorithm, take this quick pretest to assess your understanding of Floyd's algorithm.</p>
            </section>

            <section id="quiz">
              <h2>Quiz</h2>
              <p>Test your knowledge on Floyd's algorithm with this short quiz. Check your understanding of the algorithm and its complexities.</p>
            </section>

            <section id="posttest">
              <h2>Posttest</h2>
              <p>After completing this section, please take the posttest to evaluate what you have learned about Floyd's algorithm.</p>
            </section>

            <section id="further-reading">
              <h2>Further Reading/References</h2>
              <p>For more detailed information on Floyd's algorithm, refer to the following resources:</p>
              <ul>
                <li><a href="https://www.javatpoint.com/floyd-warshall-algorithm">JavaTpoint - Floyd's Algorithm</a></li>
                <li><a href="https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/">GeeksforGeeks - Floyd's Algorithm Tutorial</a></li>
              </ul>
            </section>

            <section id="feedback">
              <h2>Feedback</h2>
              <p>Your feedback is valuable! Please let us know your thoughts on this lesson about Floyd's algorithm.</p>
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
        &copy; 2024 Floyd's Algorithm Learning Platform
      </footer>
    </div>
  );
}

export default FloydsAlgorithmPage;