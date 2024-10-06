import React from 'react';

function MergeSortPage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
            <header style={{ padding: '10px', backgroundColor: '#2c3e50', color: 'white' }}>
                <h1>Merge Sort Algorithm</h1>
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
                        <li><a href="#Divide-Conquer" style={{ textDecoration: 'none', color: '#2c3e50' }}>Divide and Conquer</a></li>
                        <li><a href="#Algorithm/implementation" style={{ textDecoration: 'none', color: '#2c3e50' }}>Algorithm/implementation</a></li>
                        <li><a href="#quiz" style={{ textDecoration: 'none', color: '#2c3e50' }}>Quiz</a></li>
                        <li><a href="#Analysis" style={{ textDecoration: 'none', color: '#2c3e50' }}>Analysis</a></li>
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
                            <p>The aim of this page is to provide a comprehensive understanding of the Merge Sort algorithm, its implementation, and applications.</p>
                        </section>

                        <section id="overview">
                            <h2>Overview</h2>
                            <p>Merge Sort is a divide-and-conquer algorithm that sorts an array by recursively dividing it into halves until each sub-array consists of a single element and then merging those sub-arrays back together in sorted order.</p>
                        </section>

                        <section id="recap">
                            <h2>Recap</h2>
                            <p>In previous lessons, we covered sorting algorithms and their importance in computer science. Merge Sort is particularly notable for its efficiency and stability.</p>
                        </section>

                        <section id="pretest">
                            <h2>Pretest</h2>
                            <p>Before we dive deeper into Merge Sort, take this quick pretest to assess your understanding of sorting algorithms.</p>
                        </section>

                        <section id="Divide-Conquer">
                            <h2>Divide and Conquer</h2>
                            <p>This section discusses how Merge Sort works on divide and conquer rule.</p>
                        </section>

                        <section id="Algorithm/implementation">
                            <h2>Algorithm/implementation</h2>
                            <p>This section discusses algorithm and implementation process of Merge Sort .</p>
                        </section>

                        <section id="quiz">
                            <h2>Quiz</h2>
                            <p>Test your knowledge on Merge Sort with this short quiz. Check your understanding of the algorithm and its complexities.</p>
                        </section>

                        <section id="Analysis">
                            <h2>Analysis</h2>
                            <p>This section provides the overall analysis of the experiment and quizes performed.</p>
                        </section>

                        <section id="posttest">
                            <h2>Posttest</h2>
                            <p>After completing this section, please take the posttest to evaluate what you have learned about Merge Sort.</p>
                        </section>

                        <section id="further-reading">
                            <h2>Further Reading/References</h2>
                            <p>For more detailed information on Merge Sort, refer to the following resources:</p>
                            <ul>
                                <li><a href="https://www.javatpoint.com/merge-sort">JavaTpoint - Merge Sort Algorithm</a></li>
                                <li><a href="https://www.geeksforgeeks.org/merge-sort/">GeeksforGeeks - Merge Sort Tutorial</a></li>
                                <li><a href="https://www.w3schools.com/dsa/dsa_algo_mergesort.php">W3Schools - Merge Sort Algorithm Overview</a></li>
                            </ul>
                        </section>

                        <section id="feedback">
                            <h2>Feedback</h2>
                            <p>Your feedback is valuable! Please let us know your thoughts on this lesson about Merge Sort.</p>
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
                &copy; 2024 Merge Sort Learning Platform
            </footer>

        </div>
    );
}

export default MergeSortPage;