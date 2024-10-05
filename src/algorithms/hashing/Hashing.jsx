import React from 'react';

function HashingPage() {
return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
            <header style={{ padding: '10px', backgroundColor: '#2c3e50', color: 'white' }}>
                <h1>Hashing</h1>
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
                        <li><a href="#collision-resolution" style={{ textDecoration: 'none', color: '#2c3e50' }}>Collision Resolution</a></li>
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
                            <p>The aim of this page is to provide a comprehensive understanding of Hashing, its implementation, and applications.</p>
                        </section>

                        <section id="overview">
                            <h2>Overview</h2>
                            <p>Hashing is a technique used to uniquely identify data by converting it into a fixed-size string of characters, typically using a hash function. This process allows for fast data retrieval, as hashed values can be used as indexes in data structures like hash tables, enabling efficient storage and lookup of data</p>
                        </section>

                        <section id="recap">
                            <h2>Recap</h2>
                            <p>In previous lessons, we explored data structures and their roles in organizing and accessing information. Hashing is significant for its speed in data retrieval and its ability to handle large datasets efficiently, while also addressing issues like collisions through various strategies.</p>
                        </section>

                        <section id="pretest">
                            <h2>Pretest</h2>
                            <p>Before we dive deeper into Hashing, take this quick pretest to assess your understanding of hashing algorithms.</p>
                        </section>

                        <section id="collision-resolution">
                            <h2>Collision Resolution</h2>
                            <p>This section discusses how Hashing handles data collisions.</p>
                        </section>

                        <section id="quiz">
                            <h2>Quiz</h2>
                            <p>Test your knowledge on Hashing with this short quiz. Check your understanding of the algorithm and its complexities.</p>
                        </section>

                        <section id="posttest">
                            <h2>Posttest</h2>
                            <p>After completing this section, please take the posttest to evaluate what you have learned about Hashing.</p>
                        </section>

                        

                        <section id="feedback">
                            <h2>Feedback</h2>
                            <p>Your feedback is valuable! Please let us know your thoughts on this lesson about Hashing.</p>
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
            
            </footer>

        </div>
    
);
}

export default HashingPage;
