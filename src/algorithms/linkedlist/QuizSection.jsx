import React from 'react';
import QuestionSet from './QuestionSet';

function QuizSection() {
  const quizQuestions = [
    {
      question: "What is the time complexity of inserting an element at the beginning of a linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
      correctAnswer: "O(1)"
    },
    {
      question: "Which type of linked list allows traversal in both directions?",
      options: ["Singly linked list", "Circular linked list", "Doubly linked list", "Binary linked list"],
      correctAnswer: "Doubly linked list"
    },
    {
      question: "What is a sentinel node in a linked list?",
      options: ["The first node", "The last node", "A dummy node", "A node containing important data"],
      correctAnswer: "A dummy node"
    },
    {
      question: "In a circular linked list:",
      options: ["The last node points to null", "The last node points to the first node", "There is no last node", "The first node points to null"],
      correctAnswer: "The last node points to the first node"
    },
    {
      question: "Which of these applications would benefit most from using a linked list?",
      options: ["Random access of elements", "Storing a fixed number of elements", "Implementing a stack or queue", "Binary search"],
      correctAnswer: "Implementing a stack or queue"
    }
  ];

  return (
    <section id="quiz">
      <h2>Quiz</h2>
      <p>Test your knowledge on Linked Lists with this short quiz. Check your understanding of the data structure and its operations.</p>
      <QuestionSet questions={quizQuestions} title="Quiz" />
    </section>
  );
}

export default QuizSection;