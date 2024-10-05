import React from 'react';
import QuestionSet from './QuestionSet';

function PosttestSection() {
  const posttestQuestions = [
    {
      question: "What is the main advantage of a doubly linked list over a singly linked list?",
      options: ["Faster insertion", "Bidirectional traversal", "Less memory usage", "Faster searching"],
      correctAnswer: "Bidirectional traversal"
    },
    {
      question: "In implementing a linked list, what is used to represent a node?",
      options: ["An array", "A struct or class", "A primitive data type", "A function"],
      correctAnswer: "A struct or class"
    },
    {
      question: "What happens if you try to access the 'next' pointer of the last node in a singly linked list?",
      options: ["It points to the first node", "It causes an error", "It returns null", "It points to itself"],
      correctAnswer: "It returns null"
    },
    {
      question: "Which of these is NOT a common use case for linked lists?",
      options: ["Implementing undo functionality", "Representing polynomials", "Binary search", "Managing memory allocation"],
      correctAnswer: "Binary search"
    },
    {
      question: "What is the space complexity of a linked list with n elements?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: "O(n)"
    }
  ];

  return (
    <section id="posttest">
      <h2>Posttest</h2>
      <p>After completing this section, please take the posttest to evaluate what you have learned about Linked Lists.</p>
      <QuestionSet questions={posttestQuestions} title="Posttest" />
    </section>
  );
}

export default PosttestSection;