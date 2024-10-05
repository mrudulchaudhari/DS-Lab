import React from 'react';

function OverviewSection() {
  return (
    <section id="overview">
      <h2>Overview</h2>
      <p>A Linked List is a linear data structure in which elements are stored in nodes. Each node contains a data field and a reference (or link) to the next node in the sequence. Linked Lists have the following properties:</p>
      <ul>
        <li>Elements are linked using pointers</li>
        <li>Each node contains a data field and a reference to the next node</li>
        <li>The last node typically points to null</li>
      </ul>
    </section>
  );
}

export default OverviewSection;