import React, { useState } from 'react';

function LinkedListPage() {
  const [pretestScore, setPretestScore] = useState(null);
  const [quizScore, setQuizScore] = useState(null);
  const [posttestScore, setPosttestScore] = useState(null);

  const QuestionSet = ({ questions, title, setScore }) => {
    const [userAnswers, setUserAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);

    const handleAnswer = (questionId, answer) => {
      if (!submitted) {
        setUserAnswers(prev => ({ ...prev, [questionId]: answer }));
      }
    };

    const handleSubmit = () => {
      if (Object.keys(userAnswers).length !== questions.length) {
        alert("Please answer all questions before submitting.");
        return;
      }
      
      let newScore = 0;
      questions.forEach((q, index) => {
        if (userAnswers[index] === q.correctAnswer) {
          newScore++;
        }
      });
      setCurrentScore(newScore);
      setScore(newScore);
      setSubmitted(true);
    };

    const handleReset = () => {
      setUserAnswers({});
      setSubmitted(false);
      setCurrentScore(0);
      setScore(null);
    };

    return (
      <div className="question-set">
        <h3>{title}</h3>
        {questions.map((q, index) => (
          <div key={index} className="question">
            <p><strong>{index + 1}. {q.question}</strong></p>
            {q.options.map((option, optionIndex) => (
              <div key={optionIndex} className="option">
                <input
                  type="radio"
                  id={`${title}-q${index}-${optionIndex}`}
                  name={`${title}-question-${index}`}
                  value={option}
                  checked={userAnswers[index] === option}
                  onChange={() => handleAnswer(index, option)}
                  disabled={submitted}
                />
                <label htmlFor={`${title}-q${index}-${optionIndex}`}>{option}</label>
                {submitted && option === q.correctAnswer && " ✓"}
              </div>
            ))}
            {submitted && userAnswers[index] !== q.correctAnswer && (
              <p style={{ color: 'red' }}>Your answer: {userAnswers[index]}</p>
            )}
          </div>
        ))}
        {!submitted ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <>
            <p>Your score: {currentScore} out of {questions.length}</p>
            <button onClick={handleReset}>Reset</button>
          </>
        )}
      </div>
    );
  };

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
            <li><a href="#aim" style={{ textDecoration: 'none', color: '#2c3e50' }}>Aim</a></li>
            <li><a href="#overview" style={{ textDecoration: 'none', color: '#2c3e50' }}>Overview</a></li>
            <li><a href="#recap" style={{ textDecoration: 'none', color: '#2c3e50' }}>Recap</a></li>
            <li><a href="#pretest" style={{ textDecoration: 'none', color: '#2c3e50' }}>Pretest</a></li>
            <li><a href="#implementation" style={{ textDecoration: 'none', color: '#2c3e50' }}>Implementation</a></li>
            <li><a href="#further-reading" style={{ textDecoration: 'none', color: '#2c3e50' }}>Reading/References</a></li>
            <li><a href="#quiz" style={{ textDecoration: 'none', color: '#2c3e50' }}>Quiz</a></li>
            <li><a href="#posttest" style={{ textDecoration: 'none', color: '#2c3e50' }}>Posttest</a></li>
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
            <section id="aim">
              <h2>Aim</h2>
              <p>The aim of this page is to provide a comprehensive understanding of Linked Lists, their implementation, and applications.</p>
            </section>

            <section id="overview">
              <h2>Overview</h2>
              <p>A Linked List is a linear data structure in which elements are stored in nodes. Each node contains a data field and a reference (or link) to the next node in the sequence. Linked Lists have the following properties:</p>
              <ul>
                <li>Elements are linked using pointers</li>
                <li>Each node contains a data field and a reference to the next node</li>
                <li>The last node typically points to null</li>
              </ul>
            </section>

            <section id="recap">
              <h2>Recap</h2>
              <p>In previous lessons, we explored various data structures. Linked Lists are significant for their flexibility in memory allocation and efficient insertion and deletion operations.</p>
            </section>

            <section id="pretest">
              <h2>Pretest</h2>
              <p>Before we dive deeper into Linked Lists, take this quick pretest to assess your understanding of linear data structures.</p>
              <QuestionSet questions={pretestQuestions} title="Pretest" setScore={setPretestScore} />
            </section>

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

            <section id="further-reading">
              <h2>Further Reading/References</h2>
              <p>For more detailed information on Linked Lists, refer to the following resources:</p>
<<<<<<< HEAD
              <ul>
                <li><a href="https://www.geeksforgeeks.org/data-structures/linked-list/" target="_blank" rel="noopener noreferrer">GeeksforGeeks - Linked List</a></li>
                <li><a href="https://www.coursera.org/lecture/data-structures/singly-linked-lists-kHhgK" target="_blank" rel="noopener noreferrer">Coursera - Singly Linked Lists</a></li>
              </ul>
=======
              {/* <ul>
                <li><a href="https://www.w3schools.com/dsa/dsa_data_linkedlist.php">W3-schools - Linked List</a></li>
                <li><a href="https://www.geeksforgeeks.org/data-structures/linked-list/">GeeksforGeeks - Linked List</a></li>
              </ul> */}
>>>>>>> parent of 24fd71a (updated some links)
            </section>

            <section id="quiz">
              <h2>Quiz</h2>
              <p>Test your knowledge on Linked Lists with this short quiz. Check your understanding of the data structure and its operations.</p>
              <QuestionSet questions={quizQuestions} title="Quiz" setScore={setQuizScore} />
            </section>

            <section id="posttest">
              <h2>Posttest</h2>
              <p>After completing this section, please take the posttest to evaluate what you have learned about Linked Lists.</p>
              <QuestionSet questions={posttestQuestions} title="Posttest" setScore={setPosttestScore} />
            </section>
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
        <p>© 2024 Linked List Education</p>
      </footer>
    </div>
  );
}

export default LinkedListPage;