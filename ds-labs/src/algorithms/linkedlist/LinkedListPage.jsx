import React, { useState } from 'react';

const allQuestions = [
  {
    title: "Pretest",
    questions: [
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
        question: "Which of the following is NOT a type of linked list?",
        options: ["Singly linked list", "Doubly linked list", "Circular linked list", "Binary linked list"],
        correctAnswer: "Binary linked list"
      },
      {
        question: "What is the time complexity of accessing an element in a linked list?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctAnswer: "O(n)"
      }
    ]
  },
  {
    title: "Quiz",
    questions: [
      {
        question: "What is the time complexity of inserting an element at the beginning of a linked list?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        correctAnswer: "O(1)"
      },
      {
        question: "In a doubly linked list, each node has:",
        options: ["One pointer", "Two pointers", "Three pointers", "No pointers"],
        correctAnswer: "Two pointers"
      },
      {
        question: "Which operation is more efficient in a linked list compared to an array?",
        options: ["Random access", "Insertion at the beginning", "Sorting", "Binary search"],
        correctAnswer: "Insertion at the beginning"
      },
      {
        question: "What is a sentinel node in a linked list?",
        options: ["The first node", "The last node", "A dummy node", "A node with maximum value"],
        correctAnswer: "A dummy node"
      },
      {
        question: "In a circular linked list:",
        options: ["The first node points to null", "The last node points to null", "The last node points to the first node", "There are no pointers"],
        correctAnswer: "The last node points to the first node"
      }
    ]
  },
  {
    title: "Posttest",
    questions: [
      {
        question: "What is the main advantage of a doubly linked list over a singly linked list?",
        options: ["Faster insertion", "Bidirectional traversal", "Less memory usage", "Faster searching"],
        correctAnswer: "Bidirectional traversal"
      },
      {
        question: "Which of the following applications would benefit most from using a linked list?",
        options: ["Implementing a stack", "Binary search", "Random access to elements", "Storing a fixed-size dataset"],
        correctAnswer: "Implementing a stack"
      },
      {
        question: "What is the space complexity of a singly linked list with n elements?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctAnswer: "O(n)"
      },
      {
        question: "In which scenario would you prefer an array over a linked list?",
        options: ["Frequent insertions at the beginning", "Dynamic size requirements", "Random access to elements", "Memory is severely limited"],
        correctAnswer: "Random access to elements"
      },
      {
        question: "What is a self-organizing list?",
        options: ["A list that sorts itself automatically", "A list that deletes unused elements", "A list that moves frequently accessed elements to the front", "A list that balances itself like a tree"],
        correctAnswer: "A list that moves frequently accessed elements to the front"
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

function LinkedListPage() {
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
            <p>The aim of this page is to provide a comprehensive understanding of Linked Lists, their implementation, and applications.</p>
          </section>
        );
      case 'overview':
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
      case 'recap':
        return (
          <section id="recap">
            <h2>Recap</h2>
            <p>In previous lessons, we explored various data structures. Linked Lists are significant for their flexibility in memory allocation and efficient insertion and deletion operations.</p>
          </section>
        );
      case 'pretest':
        return (
          <section id="pretest">
            <h2>Pretest</h2>
            <p>Before we dive deeper into Linked Lists, take this quick pretest to assess your understanding:</p>
            <QuestionSet questionSet={allQuestions[0]} />
          </section>
        );
      case 'implementation':
        return (
          <section id="implementation">
            <h2>Implementation</h2>
            <p>This section discusses how to implement a Linked List, including node creation, insertion, deletion, and traversal algorithms.</p>
            <p>There are 3 major implementations with each having their own applications and their own advantages:</p>
            <ol>
              <li><h3>Linear Linked List</h3></li>
              <li><h3>Doubly Linked List</h3></li>
              <li><h3>Circular Linked List</h3></li>
            </ol>
          </section>
        );
      case 'further-reading':
        return (
          <section id="further-reading">
            <h2>Further Reading/References</h2>
            <p>For more detailed information on Linked Lists, refer to the following resources:</p>
            <ul>
              <li><a href="https://www.w3schools.com/dsa/dsa_theory_linkedlists.php">W3-schools - Linked List</a></li>
              <li><a href="https://www.geeksforgeeks.org/linked-list-in-c/">GeeksforGeeks - Linked List in C</a></li>
            </ul>
          </section>
        );
      case 'quiz':
        return (
          <section id="quiz">
            <h2>Quiz</h2>
            <p>Test your knowledge on Linked Lists with this short quiz:</p>
            <QuestionSet questionSet={allQuestions[1]} />
          </section>
        );
      case 'posttest':
        return (
          <section id="posttest">
            <h2>Posttest</h2>
            <p>After completing this section, please take the posttest to evaluate what you have learned about Linked Lists:</p>
            <QuestionSet questionSet={allQuestions[2]} />
          </section>
        );
      case 'code':
        return (
          <section id="code">
            <h2>Code</h2>
            <p>We will have a sample code for this in C, C++, Java and Python for this.</p>
          </section>
        );
      case 'feedback':
        return (
          <section id="feedback">
            <h2>Feedback</h2>
            <p>Your feedback is valuable! Please let us know your thoughts on this lesson about Linked Lists.</p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <header style={{ padding: '10px', backgroundColor: '#2c3e50', color: 'white' }}>
        <h1>Linked List</h1>
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
            {['aim', 'overview', 'recap', 'pretest', 'implementation', 'further-reading', 'quiz', 'posttest', 'code', 'feedback'].map((section) => (
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
        &copy; 2024 Linked List Learning Platform
      </footer>
    </div>
  );
}

export default LinkedListPage;