import React from 'react';

function ImplementationSection() {
  return (
    <section id="implementation">
      <h2>Implementation</h2>
      <p>This section discusses how to implement a Linked List, including node creation, insertion, deletion, and traversal algorithms.</p>
      <p>There are 3 major implementations with each having their own applications and their own advantages:</p>
      <ol>
        <li><h3>Linear Linked List</h3></li>
        <ol>
          <li>Definition:
            <ul>
              <li>A linear data structure where elements are stored in nodes</li>
              <li>Each node contains data and a reference (or link) to the next node</li>
              <li>Elements are linked using pointers</li>
            </ul>
          </li>
          <li>Structure:
            <ul>
              <li>Head: Points to the first node of the list</li>
              <li>Nodes: Contains Data and Next pointer</li>
              <li>Tail: The last node that points to NULL</li>
            </ul>
          </li>
          <li>Types:
            <ul>
              <li>Singly Linked List: Each node points only to the next node</li>
              <li>Doubly Linked List: Each node points to both next and previous nodes</li>
            </ul>
          </li>
          <li>Basic Operations:
            <ul>
              <li>Insertion: Add a new node to the list</li>
              <li>Deletion: Remove a node from the list</li>
              <li>Traversal: Visit each node in the list</li>
              <li>Search: Find a specific node in the list</li>
            </ul>
          </li>
          <li>Advantages:
            <ul>
              <li>Dynamic size</li>
              <li>Efficient insertion and deletion</li>
              <li>Flexible memory allocation</li>
            </ul>
          </li>
          <li>Disadvantages:
            <ul>
              <li>No random access to elements</li>
              <li>Extra memory needed for storing links</li>
            </ul>
          </li>
        </ol>
        <li><h3>Doubly Linked List</h3></li>
        <li><h3>Circular Linked List</h3></li>
      </ol>
    </section>
  );
}

export default ImplementationSection;