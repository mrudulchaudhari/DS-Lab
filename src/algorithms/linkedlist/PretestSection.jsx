import React from 'react';
import QuestionSet from './QuestionSet';

function PretestSection() {
  const pretestQuestions = [
    {
      question: "What is a linked list?",
      options: ["An array of elements", "A collection of nodes", "A type of tree", "A database structure"],
      correctAnswer: "A collection of nodes"
    },
    {
      question: "In a singly linked list, each node contains:",
      options: ["Only data", "Data and a pointer to the previous node", "Data and a pointer to the next node", "Two pointers"],
      correctAnswer: "Data and a pointer to the next node"
    },
    {
      question: "What is the main advantage of a linked list over an array?",
      options: ["Faster access to elements", "Dynamic size", "Less memory usage", "Simpler implementation"],
      correctAnswer: "Dynamic size"
    },
    {
      question: "Which operation is typically more efficient in a linked list compared to an array?",
      options: ["Accessing elements by index", "Inserting elements at the beginning", "Sorting elements", "Searching for an element"],
      correctAnswer: "Inserting elements at the beginning"
    },
    {
      question: "What does the 'head' of a linked list refer to?",
      options: ["The last node", "The first node", "The middle node", "All nodes"],
      correctAnswer: "The first node"
    }
  ];

  return (
    <section id="pretest">
      <h2>Pretest</h2>
      <p>Before we dive deeper into Linked Lists, take this quick pretest to assess your understanding of linear data structures.</p>
      <QuestionSet questions={pretestQuestions} title="Pretest" />
    </section>
  );
}

export default PretestSection;