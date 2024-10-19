import React, { useState } from 'react';
import MergeSortVisualizer from './MergeSortVisualizer';

const allQuestions = [
  {
    title: "Pretest",
    questions: [
      {
        question: "What is the basic principle behind the merge sort algorithm?",
        options: ["Divide and conquer", "Greedy", "Dynamic programming", "Backtracking"],
        correctAnswer: "Divide and conquer"
      },
      {
        question: "In merge sort, what is the worst-case time complexity?",
        options: ["O(n)", "O(n log n)", "O(n^2)", "O(2^n)"],
        correctAnswer: "O(n log n)"
      },
      {
        question: "Merge sort is a stable sorting algorithm. What does this mean?",
        options: [
          "It maintains the relative order of elements with equal keys.",
          "It always sorts in ascending order.",
          "It has a worst-case time complexity of O(n log n).",
          "It is an in-place sorting algorithm"
        ],
        correctAnswer: "It maintains the relative order of elements with equal keys."
      },
      {
        question: "Which of the following data structures is commonly used to implement merge sort?",
        options: ["Linked list", "Array", "Stack", "Queue"],
        correctAnswer: "Array"
      },
      {
        question: "Merge sort is a recursive algorithm. What is the base case for the recursion?",
        options: [
          "When the array has only one element.",
          "When the array is sorted.",
          "When the array has an even number of elements.",
          "When the array has an odd number of elements."
        ],
        correctAnswer: "When the array has only one element."
      }
    ]
  },
  {
    title: "Quiz",
    questions: [
      {
        question: "In the merge sort algorithm, how are the subarrays merged?",
        options: [
          "By comparing elements one by one and placing them in the correct order.",
          "By using a stack to store the subarrays.",
          "By using a queue to store the subarrays.",
          "By using a heap to store the subarrays."
        ],
        correctAnswer: "By comparing elements one by one and placing them in the correct order."
      },
      {
        question: "What is the space complexity of merge sort? ",
        options: [
          "O(n)", "O(n log n).","O(n^2)","O(1)"
        ],
        correctAnswer: "O(n)"
      },
      {
        question: "Merge sort can be implemented in-place. True or false?",
        options: [
          "True",
          "False"
          
        ],
        correctAnswer: "False"
      },
      {
        question: "In which scenario would merge sort be a good choice over other sorting algorithms?",
        options: [
          "When the data is already partially sorted.",
          "When the data is small.",
          "When the data is large and needs to be sorted stably.",
          "When the data is large and needs to be sorted in-place."
        ],
        correctAnswer: "When the data is large and needs to be sorted stably."
      },
      {
        question: "What is the best-case time complexity of merge sort?",
        options: [
          "O(n)",
          "O(n log n).",
          "O(n^2)",
          "O(1)"
        ],
        correctAnswer: "O(n)"
      }
      
    ]
  },
  {
    title: "Posttest",
    questions: [
      {
        question: "Explain the divide-and-conquer approach used in merge sort.",
        options: [
          "Break the problem into smaller subproblems, solve the subproblems recursively, and combine the solutions.",
          "Find the optimal solution for each subproblem and combine them to find the optimal solution for the whole problem.",
          "Solve the problem by making a series of greedy choices.",
          "Solve the problem by trying all possible solutions and choosing the best one."
        ],
        correctAnswer: "Break the problem into smaller subproblems, solve the subproblems recursively, and combine the solutions."
      }
      // ... other posttest questions
    ]
  }
];

const QuestionSet = ({ questionSet }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionIndex, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(userAnswers).length !== questionSet.questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    let newScore = 0;
    questionSet.questions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div>
      <h3>{questionSet.title}</h3>
      {questionSet.questions.map((q, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <p><strong>{index + 1}. {q.question}</strong></p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {q.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label style={{
                  color: submitted
                    ? userAnswers[index] === option
                      ? option === q.correctAnswer
                        ? 'green'
                        : 'red'
                      : 'inherit'
                    : 'inherit'
                }}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleAnswerChange(index, option)}
                    disabled={submitted}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          {submitted && userAnswers[index] !== q.correctAnswer && (
            <p style={{ color: 'green' }}>Correct answer: {q.correctAnswer}</p>
          )}
        </div>
      ))}
      {!submitted && (
        <button onClick={handleSubmit} style={{
          padding: '10px 20px',
          backgroundColor: '#2c3e50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Submit
        </button>
      )}
      {submitted && (
        <div>
          <h4>Your Score: {score} out of {questionSet.questions.length}</h4>
          <button onClick={() => {
            setSubmitted(false);
            setUserAnswers({});
            setScore(0);
          }} style={{
            padding: '10px 20px',
            backgroundColor: '#2c3e50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Retake Quiz
          </button>
        </div>
      )}
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
            <p>Merge Sort is an efficient, stable, divide-and-conquer sorting algorithm. It works by dividing the unsorted list into n sublists, each containing one element, then repeatedly merging sublists to produce new sorted sublists until there is only one sublist remaining.</p>
          </section>
        );
      case 'recap':
        return (
          <section id="recap">
            <h2>Recap</h2>
            <p>In previous lessons, we've explored various sorting algorithms. Merge Sort stands out for its efficiency and stability, making it a popular choice for sorting large datasets.</p>
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
            <QuestionSet questionSet={allQuestions[0]} />
          </section>
        );
      case 'Divide-Conquer':
        return (
          <section id="Divide-Conquer">
            <h2>Divide and Conquer</h2>
            <p>Merge Sort follows the divide-and-conquer paradigm:</p>
            <ol>
              <li>Divide: The array is divided into two halves.</li>
              <li>Conquer: Each half is recursively sorted.</li>
              <li>Combine: The sorted halves are merged to produce a sorted array.</li>
            </ol>
          </section>
        );
      case 'visualizer':
        return (
          <section id="visualizer">
            <h2>Merge Sort Visualizer</h2>
            <p>Use this interactive visualizer to see how Merge Sort works step-by-step:</p>
            <MergeSortVisualizer />
          </section>
        );
      case 'Algorithm/implementation':
        return (
          <section id="Algorithm/implementation">
            <h2>Algorithm/Implementation</h2>
            <p>Here's a high-level overview of the Merge Sort algorithm:</p>
            <ol>
              <li>If the array has less than two elements, return.</li>
              <li>Divide the array into two halves.</li>
              <li>Recursively sort the two halves.</li>
              <li>Merge the sorted halves.</li>
            </ol>
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
            <QuestionSet questionSet={allQuestions[1]} />
          </section>
        );
      case 'Analysis':
        return (
          <section id="Analysis">
            <h2>Analysis</h2>
            <p>Merge Sort has the following time complexities:</p>
            <ul>
              <li>Best Case: O(n log n)</li>
              <li>Average Case: O(n log n)</li>
              <li>Worst Case: O(n log n)</li>
            </ul>
            <p>Space Complexity: O(n)</p>
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
            <QuestionSet questionSet={allQuestions[2]} />
          </section>
        );
      case 'further-reading':
        return (
          <section id="further-reading">
            <h2>Further Reading/References</h2>
            <ul>
              <li><a href="https://en.wikipedia.org/wiki/Merge_sort">Wikipedia - Merge Sort</a></li>
              <li><a href="https://www.geeksforgeeks.org/merge-sort/">GeeksforGeeks - Merge Sort</a></li>
            </ul>
          </section>
        );
      case 'feedback':
        return (
          <section id="feedback">
            <h2>Feedback</h2>
            <p>Your feedback is valuable! Please let us know your thoughts on this lesson about Merge Sort.</p>
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
            {['aim', 'overview', 'recap', 'pretest', 'Divide-Conquer', 'Algorithm/implementation','visualizer', 'quiz', 'Analysis', 'posttest', 'further-reading', 'feedback'].map((section) => (
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