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
  // Implement QuestionSet component logic here
  return (
    <div>
      <h3>{title}</h3>
      {/* Render questions and options here */}
    </div>
  );
};

function MergeSortPage() {
  const [currentSection, setCurrentSection] = useState('aim');

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
        return (
          <section id="overview">
            <h2>Overview</h2>
            {/* Add overview content */}
          </section>
        );
      case 'recap':
        return (
          <section id="recap">
            <h2>Recap</h2>
            {/* Add recap content */}
          </section>
        );
      case 'pretest':
        return (
          <section id="pretest">
            <h2>Pretest</h2>
            <p>
              Before we dive deeper into Merge Sort, take this quick pretest to
              assess your understanding of sorting algorithms.
            </p>
            <QuestionSet questions={pretestQuestions} title="Pretest Questions" />
          </section>
        );
      case 'Divide-Conquer':
        return (
          <section id="Divide-Conquer">
            <h2>Divide and Conquer</h2>
            {/* Add Divide and Conquer content */}
          </section>
        );
      case 'Algorithm/implementation':
        return (
          <section id="Algorithm/implementation">
            <h2>Algorithm/Implementation</h2>
            {/* Add Algorithm/implementation content */}
          </section>
        );
      case 'quiz':
        return (
          <section id="quiz">
            <h2>Quiz</h2>
            <p>
              Test your knowledge on Merge Sort with this short quiz. Check your
              understanding of the algorithm and its complexities.
            </p>
            <QuestionSet questions={quizQuestions} title="Quiz Questions" />
          </section>
        );
      case 'Analysis':
        return (
          <section id="Analysis">
            <h2>Analysis</h2>
            {/* Add Analysis content */}
          </section>
        );
      case 'posttest':
        return (
          <section id="posttest">
            <h2>Posttest</h2>
            <p>
              After completing this section, please take the posttest to evaluate
              what you have learned about Merge Sort.
            </p>
            <QuestionSet questions={posttestQuestions} title="Posttest Questions" />
          </section>
        );
      case 'further-reading':
        return (
          <section id="further-reading">
            <h2>Further Reading/References</h2>
            {/* Add further reading content */}
          </section>
        );
      case 'feedback':
        return (
          <section id="feedback">
            <h2>Feedback</h2>
            {/* Add feedback content */}
          </section>
        );
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
            {['aim', 'overview', 'recap', 'pretest', 'Divide-Conquer', 'Algorithm/implementation', 'quiz', 'Analysis', 'posttest', 'further-reading', 'feedback'].map((section) => (
              <li key={section}>
                <a 
                  href={`#${section}`} 
                  style={{ textDecoration: 'none', color: '#2c3e50' }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(section);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                </a>
              </li>
            ))}
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