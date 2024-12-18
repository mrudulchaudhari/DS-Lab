import React, { useState } from 'react';
import MergeSortVisualizer from './MergeSortVisualizer';
import Header from '../../Header';
import Footer from '../../Footer';

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
      },
      {
        question: "Compare and contrast merge sort with quicksort.",
        options: [
          "Both are divide-and-conquer algorithms, but merge sort is stable while quicksort is not.",
          "Both are stable sorting algorithms, but merge sort has a worst-case time complexity of O(n log n) while quicksort has a worst-case time complexity of O(n^2).",
          "Both have a worst-case time complexity of O(n log n), but merge sort is stable while quicksort is not.",
          "Both are stable sorting algorithms with a worst-case time complexity of O(n log n)."
        ],
        correctAnswer: "Both are divide-and-conquer algorithms, but merge sort is stable while quicksort is not."
      },
      {
        question: "What is the time complexity of the merge sort algorithm in the worst case?",
        options: [
          "O(n)",
          "O(n²)",
          "O(log n)",
          "O(n log n)"
        ],
        correctAnswer: "O(n log n)"
      },
      {
        question: "During the merge process in merge sort, how are two subarrays combined?",
        options: [
          "By comparing the smallest elements of both subarrays",
          "By adding all elements of the first subarray, then the second",
          "By sorting the entire array again",
          "By randomly picking elements from each subarray"
        ],
        correctAnswer: "By comparing the smallest elements of both subarrays"
      },
      {
        question: "Which of the following best describes merge sort?",
        options: [
          "In-place sorting algorithm",
          "Stable sorting algorithm",
          "Non-recursive sorting algorithm.",
          "Slower than selection sort"
        ],
        correctAnswer: "Stable sorting algorithm"
      }
      
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
  const tableHeaderStyle = {
    padding: '12px',
    textAlign: 'left',
    borderBottom: '2px solid #ddd',
    color: '#333',
    fontWeight: 'bold'
  };
  
  const tableCellStyle = {
    padding: '12px',
    borderBottom: '1px solid #ddd'
  };

  const renderSectionContent = (sectionId) => {
    switch (sectionId) {
      case 'aim':
        return (
          <section id="aim">
            <h2>Aim</h2>
            <p>To develop an interactive visualization tool that demonstrates the structure and operations of merge sort,
               enhancing understanding through visual representation and reinforcing knowledge with integrated quizzes.</p>
          </section>
        );
      case 'overview':
        return (
          <section id="overview">
            <h2>Overview</h2>
            <p>Merge Sort is an efficient, stable, divide-and-conquer sorting algorithm. It works by dividing the unsorted list into n sublists, each containing one element, then repeatedly merging sublists to produce new sorted sublists until there is only one sublist remaining.</p>
          </section>
        );
      // case 'recap':
      //   return (
      //     <section id="recap">
      //       <h2>Recap</h2>
      //       <p>In previous lessons, we've explored various sorting algorithms. Merge Sort stands out for its efficiency and stability, making it a popular choice for sorting large datasets.</p>
      //     </section>
      //   );
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
              <li>Divide: Find the middle point of the array: mid = len(array) // 2. Split the array into left and right subarrays</li>
              <li>Conquer: Recursively call merge sort on the left and right subarrays</li>
              <li>Combine: Create temporary arrays for left and right halves. Compare elements from both halves and place them in the correct order in the original array. Copy any remaining elements from either half</li>
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
    
    <h2>Merge Sort vs Quick Sort</h2>
    <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '20px',
          boxShadow: '0 2px 3px rgba(0,0,0,0.1)',
          border: '1px solid #ddd'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={tableHeaderStyle}>Aspect</th>
              <th style={tableHeaderStyle}>Merge Sort</th>
              <th style={tableHeaderStyle}>Quick Sort</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCellStyle}>Basic Principle</td>
              <td style={tableCellStyle}>Divide array in two, sort, then merge</td>
              <td style={tableCellStyle}>Choose pivot, partition array, sort</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Time Complexity (Average)</td>
              <td style={tableCellStyle}>O(n log n)</td>
              <td style={tableCellStyle}>O(n log n)</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Time Complexity (Worst)</td>
              <td style={tableCellStyle}>O(n log n)(O(n))</td>
              <td style={tableCellStyle}>O(n^2)</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Space Complexity</td>
              <td style={tableCellStyle}>O(n)</td>
              <td style={tableCellStyle}>O(log n)</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>In-place</td>
              <td style={tableCellStyle}>Not In-place (requires extra space)</td>
              <td style={tableCellStyle}>In-place (with stack space)</td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Cache Performance</td>
              <td style={tableCellStyle}>Not cache friendly</td>
              <td style={tableCellStyle}>Cache friendly</td>
            </tr>
          </tbody>
        </table>
      </div>
    <h2>Code in C</h2>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ytK4Biw-CW4?si=5T0yefFw7GRsVc-Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    <h2>Reading/References Links</h2>

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
    <>
    <Header/>
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
            {['aim', 'overview', 'pretest', 'Divide-Conquer', 'Algorithm/implementation','visualizer', 'quiz', 'Analysis', 'posttest', 'further-reading'].map((section) => (
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
    </div>
    <Footer/></>
  );
}

export default MergeSortPage;