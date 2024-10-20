import React from 'react';
import Header from './Header';

function About() {
  
  const teamMembers = [
    {
      name: "Mrudul chaudhari(lead)",
      role: "Linked List",
      description: "Focuses on advanced linked list structures and their applications. Developing a cache-efficient linked list implementation and exploring the use of skip lists for fast search operations in ordered data."
    },
    {
      name: "Khushi sarda",
      role: "Binary Search Tree",
      description: "Specializes in self-balancing binary search trees. Currently optimizing Red-Black tree implementations for concurrent access and investigating the practical applications of weight-balanced trees in database indexing."
    },
    {
      name: "Himanshu Sinha",
      role: "Floyd's Algorithm",
      description: "Dedicated to optimizing Floyd-Warshall algorithm for all-pairs shortest paths. Working on a distributed version of the algorithm for large-scale graph processing and exploring its applications in network routing protocols."
    },
    {
      name: "Adhishree shiledar",
      role: "Merge Sort",
      description: "Focuses on enhancing merge sort for various data types and architectures. Developing a cache-aware merge sort algorithm and investigating its potential for external sorting of massive datasets that don't fit in main memory."
    },
    {
      name: "Homeshwari Baitlawar",
      role: "Hashing",
      description: "Expert in hash table implementations and collision resolution strategies. Currently working on perfect hashing techniques for static data sets and developing novel approaches for dynamic resizing of hash tables to maintain optimal performance under varying loads."
    }
  ];

  return (
    <>
      <Header />
      <div className="about" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#333', textAlign: 'center' }}>Our Algorithm and Data Structure Specialists</h1>
        
        <section>
          <h2>Our Mission</h2>
          <p>We are dedicated to advancing the field of algorithms and data structures through specialized research and practical applications. Our team of experts each focuses on a particular algorithm or data structure, driving innovation and deeper understanding in their respective areas.</p>
        </section>

        <section>
          <h2>Meet Our Team</h2>
          {teamMembers.map((member, index) => (
            <div key={index} style={{ 
              marginBottom: '20px',
              padding: '10px',
              backgroundColor: '#f0f0f0',
              borderRadius: '5px'
            }}>
              <h3 style={{ margin: '0 0 5px 0' }}>{member.name}</h3>
              <h4 style={{ margin: '0 0 10px 0', color: '#666' }}>{member.role}</h4>
              <p style={{ margin: 0 }}>{member.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2>Our Approach</h2>
          <p>By having each team member specialize in a specific algorithm or data structure, we ensure deep expertise and continuous innovation in key areas of computer science. This focused approach allows us to offer cutting-edge insights and applications for each topic we cover, from fundamental data structures to complex algorithmic problems.</p>
        </section>

        <section>
          <h2>What We Offer</h2>
          <ul>
            <li>In-depth tutorials on classic algorithms</li>
            <li>Interactive visualizations of algorithm operations</li>
            <li>Coding challenges to test your understanding</li>
            <li>Discussion forums for collaborative learning</li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default About;