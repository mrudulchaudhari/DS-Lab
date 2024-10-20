import React, { useState } from 'react';
import HashingVisualizer from './hashingvisualizer';
import Header from '../../Header';
import Footer from '../../Footer';

const allQuestions = [
  {
    title: "Pretest",
    questions: [
      {
        question: "What is the primary purpose of hashing?",
        options: ["To sort data", "To compress data", "To encrypt data", "To efficiently store and retrieve data"],
        correctAnswer: "To efficiently store and retrieve data"
      },
      {
        question: "What is a hash function?",
        options: [
          "A function that sorts data",
          "A function that compresses data",
          "A function that maps data of arbitrary size to fixed-size values",
          "A function that encrypts data"
        ],
        correctAnswer: "A function that maps data of arbitrary size to fixed-size values"
      },
      {
        question: "What is a collision in hashing?",
        options: [
          "When two different keys hash to the same index",
          "When a hash function fails to generate a value",
          "When the hash table is full",
          "When a key can't be found in the hash table"
        ],
        correctAnswer: "When two different keys hash to the same index"
      },
      {
        question: "Which of the following is NOT a common method for handling collisions?",
        options: ["Chaining", "Linear probing", "Quadratic probing", "Binary search"],
        correctAnswer: "Binary search"
      },
      {
        question: "What is the ideal time complexity for insertion and retrieval in a hash table?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctAnswer: "O(1)"
      }
    ]
  },
  {
    title: "Quiz",
    questions: [
      {
        question: "In open addressing, what does linear probing mean?",
        options: [
          "Searching for the next empty slot sequentially",
          "Using a linked list to handle collisions",
          "Rehashing the key with a different hash function",
          "Doubling the size of the hash table"
        ],
        correctAnswer: "Searching for the next empty slot sequentially"
      },
      {
        question: "What is the load factor in a hash table?",
        options: [
          "The ratio of the number of stored elements to the size of the hash table",
          "The number of collisions in the hash table",
          "The size of the largest cluster in the hash table",
          "The average number of elements in each bucket"
        ],
        correctAnswer: "The ratio of the number of stored elements to the size of the hash table"
      },
      {
        question: "Which of the following is true about perfect hash functions?",
        options: [
          "They never produce collisions",
          "They are easy to construct for any given set of keys",
          "They always have O(1) time complexity",
          "They are commonly used in practical applications"
        ],
        correctAnswer: "They never produce collisions"
      }
    ]
  },
  {
    title: "Posttest",
    questions: [
      {
        question: "Explain the difference between chaining and open addressing for collision resolution.",
        options: [
          "Chaining uses linked lists at each index, while open addressing searches for empty slots in the table",
          "Chaining rehashes the key, while open addressing uses linked lists",
          "Chaining is only used for strings, while open addressing is used for numbers",
          "There is no difference; they are two names for the same technique"
        ],
        correctAnswer: "Chaining uses linked lists at each index, while open addressing searches for empty slots in the table"
      },
      {
        question: "What is the purpose of rehashing in a hash table?",
        options: [
          "To reduce the number of collisions",
          "To increase the size of the hash table when it becomes too full",
          "To change the hash function when it's not performing well",
          "All of the above"
        ],
        correctAnswer: "All of the above"
      },
      {
        question: "How does quadratic probing differ from linear probing?",
        options: [
          "It uses a quadratic function to determine the next probe position",
          "It only works with hash tables of prime size",
          "It always resolves collisions in constant time",
          "It uses chaining instead of open addressing"
        ],
        correctAnswer: "It uses a quadratic function to determine the next probe position"
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

function HashingPage() {
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
              hashing, its implementation, and applications in computer science and data structures.
            </p>
          </section>
        );
      case 'overview':
        return (
          <section id="overview">
            <h2>Overview</h2>
            <p>Hashing is a technique used to map data of arbitrary size to fixed-size values. It's commonly used for implementing associative arrays, database indexing, caching, and more. This page will cover the basics of hashing, hash functions, collision resolution techniques, and their applications.</p>
          </section>
        );
      case 'recap':
        return (
          <section id="recap">
            <h2>Recap</h2>
            <p>In previous lessons, we've explored various data structures. Hashing stands out for its efficiency in storing and retrieving data, making it a crucial concept in computer science and software engineering.</p>
          </section>
        );
      case 'pretest':
        return (
          <section id="pretest">
            <h2>Pretest</h2>
            <p>
              Before we dive deeper into hashing, take this quick pretest to
              assess your understanding of basic hashing concepts.
            </p>
            <QuestionSet questionSet={allQuestions[0]} />
          </section>
        );
        case 'visualizer':
          return (
            <section id="visualizer">
              <h2>Hashing Visualizer</h2>
              <HashingVisualizer />
            </section>
          );
      case 'hash-functions':
        return (
          <section id="hash-functions">
            <h2>Hash Functions</h2>
            <p>A hash function is a function that maps data of arbitrary size to fixed-size values. Good hash functions have the following properties:</p>
            <ul>
              <li>Deterministic: The same input should always produce the same output.</li>
              <li>Efficiency: It should be quick to compute.</li>
              <li>Uniform distribution: It should map the expected inputs as evenly as possible over its output range.</li>
              <li>Non-invertible: It should be infeasible to reconstruct the input from the output.</li>
            </ul>
          </section>
        );
      case 'collision-resolution':
        return (
          <section id="collision-resolution">
            <h2>Collision Resolution</h2>
            <p>Collisions occur when two different keys hash to the same index. There are two main approaches to handle collisions:</p>
            <ol>
              <li>Chaining: Each cell of the hash table points to a linked list of records that have the same hash function value.</li>
              <li>Open Addressing: All elements are stored in the hash table itself. When a collision occurs, we probe for next empty slot.</li>
            </ol>
            <p>Common open addressing methods include:</p>
            <ul>
              <li>Linear Probing: If a collision occurs at h(k), then we try h(k)+1, h(k)+2, and so on.</li>
              <li>Quadratic Probing: If a collision occurs at h(k), then we try h(k)+1^2, h(k)+2^2, h(k)+3^2, and so on.</li>
              <li>Double Hashing: If a collision occurs, it uses a second hash function to determine the probe sequence.</li>
            </ul>
          </section>
        );
      case 'quiz':
        return (
          <section id="quiz">
            <h2>Quiz</h2>
            <p>
              Test your knowledge on hashing with this short quiz. Check your
              understanding of hash functions, collision resolution, and related concepts.
            </p>
            <QuestionSet questionSet={allQuestions[1]} />
          </section>
        );
      case 'analysis':
        return (
          <section id="analysis">
            <h2>Analysis</h2>
            <p>The performance of hashing depends on the load factor α = n/m, where n is the number of entries and m is the number of slots.</p>
            <ul>
              <li>Expected time for search/insert/delete is O(1) if α is constant</li>
              <li>If all n keys map to the same slot, the worst case is O(n)</li>
              <li>Load factor is kept low (typically &lt; 0.75) by resizing the hash table when it becomes too full</li>
            </ul>
          </section>
        );
      case 'posttest':
        return (
          <section id="posttest">
            <h2>Posttest</h2>
            <p>
              After completing this section, please take the posttest to evaluate
              what you have learned about hashing.
            </p>
            <QuestionSet questionSet={allQuestions[2]} />
          </section>
        );
      case 'further-reading':
        return (
          <section id="further-reading">
            <h2>Further Reading/References</h2>
            <ul>
              <li><a href="https://en.wikipedia.org/wiki/Hash_table">Wikipedia - Hash Table</a></li>
              <li><a href="https://www.geeksforgeeks.org/hashing-data-structure/">GeeksforGeeks - Hashing Data Structure</a></li>
              <li><a href="https://algs4.cs.princeton.edu/34hash/">Algorithms, 4th Edition by Robert Sedgewick and Kevin Wayne - Hash Tables</a></li>
            </ul>
          </section>
        );
      case 'feedback':
        return (
          <section id="feedback">
            <h2>Feedback</h2>
            <p>Your feedback is valuable! Please let us know your thoughts on this lesson about hashing.</p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <><Header/>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <header style={{ padding: '10px', backgroundColor: '#2c3e50', color: 'white' }}>
        <h1>Hashing </h1>
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
            {['aim', 'overview', 'recap', 'pretest', 'hash-functions', 'collision-resolution','visualizer', 'quiz', 'analysis', 'posttest', 'further-reading'].map((section) => (
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

export default HashingPage;
