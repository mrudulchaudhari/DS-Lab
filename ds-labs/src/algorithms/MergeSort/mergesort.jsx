import React, { useState } from 'react';

// Question data (outside the function)
const pretestQuestions = [
  {
    question: "What is the basic principle behind the merge sort algorithm?",
    options: ["Divide and conquer", "Greedy", "Dynamic programming", "Backtracking"],
    correctAnswer: "Divide and conquer"
  },
  {
    question: "In merge sort, what is the worst-case time complexity? ",
    options: ["O(n)","O(n log n)","O(n^2)","O(2^n)"],
    correctAnswer: "O(n log n)"
  },
  {
    question: "Merge sort is a stable sorting algorithm. What does this mean?",
    options: ["It maintains the relative order of elements with equal keys.", 
              "It always sorts in ascending order.",
              "It has a worst-case time complexity of O(n log n).",
              "It is an in-place sorting algorithm"],
    correctAnswer: "It maintains the relative order of elements with equal keys."
  },
  {
    question: "Which of the following data structures is commonly used to implement merge sort?",
    options: ["Linked list", "Array", "Stack", "Queue"],
    correctAnswer: "Array"
  },
  {
    question: "Merge sort is a recursive algorithm. What is the base case for the recursion?",
    options: ["When the array has only one element.", 
              "When the array is sorted.",
              "When the array has an even number of elements.",
              "When the array has an odd number of elements."],
    correctAnswer: "When the array has only one element."
  },
  
];

const quizQuestions = [
  {
    question: "In the merge sort algorithm, how are the subarrays merged?",
    options: [
      "By comparing elements one by one and placing them in the correct order.",
      "By using a stack to store the subarrays.",
      "By using a queue to store the subarrays.",
      "By using a heap to store the subarrays.",
    ],
    correctAnswer:
      "By comparing elements one by one and placing them in the correct order.",
  },
  // ... other quiz questions
];

const posttestQuestions = [
  {
    question: "Explain the divide-and-conquer approach used in merge sort.",
    options: [
      "Break the problem into smaller subproblems, solve the subproblems recursively, and combine the solutions.",
      "Find the optimal solution for each subproblem and combine them to find the optimal solution for the whole problem.",
      "Solve the problem by making a series of greedy choices.",
      "Solve the problem by trying all possible solutions and choosing the best one.",
    ],
    correctAnswer:
      "Break the problem into smaller subproblems, solve the subproblems recursively, and combine the solutions.",
  },
  // ... other posttest questions
];

const QuestionSet = ({ questions, title }) => {
  // Implement QuestionSet component logic here (unchanged)
};

function MergeSortPage() {
  const [currentSection, setCurrentSection] = useState('aim'); // Track current section

  const handleSectionClick = (sectionId) => {
    setCurrentSection(sectionId);
  };

  const renderSectionContent = (sectionId) => {
    switch (sectionId) {
      case 'aim':
        return (
          <section id="aim">
            <h2>Aim</h2>
            <p>
              The aim of this page is to provide a comprehensive understanding of
              the Merge Sort algorithm, its implementation, and applications.
            </p>
          </section>
        );
      case 'overview':
        // ... overview content
        break;
      case 'recap':
        // ... recap content
        break;
      // ... other sections
      case 'pretest':
        return (
          <section id="pretest">
            <h2>Pretest</h2>
            <p>
              Before we dive deeper into Merge Sort, take this quick pretest to
              assess your understanding of sorting algorithms.
            </p>
            <QuestionSet questions={pretestQuestions} />
          </section>
        );
      case 'Divide-Conquer':
        // ... Divide and Conquer content
        break;
      case 'Algorithm/implementation':
        // ... Algorithm/implementation content
        break;
      case 'quiz':
        return (
          <section id="quiz">
            <h2>Quiz</h2>
            <p>
              Test your knowledge on Merge Sort with this short quiz. Check your
              understanding of the algorithm and its complexities.
            </p>
            <QuestionSet questions={quizQuestions} />
          </section>
        );
      case 'Analysis':
        // ... Analysis content
        break;
      case 'posttest':
        return (
          <section id="posttest">
            <h2>Posttest</h2>
            <p>
              After completing this section, please take the posttest to evaluate
              what you have learned about Merge Sort.
            </p>
            <QuestionSet questions={posttestQuestions} />
          </section>
        );
      case 'further-reading':
        // ... further reading content
        break;
      case 'feedback':
        // ... feedback content
        break;
      default:
        return null;
    }
  };

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
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            {renderSectionContent(currentSection)}
          </div>
        </main>
      </div>

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