import React, { useState, useEffect } from 'react';
import BSTVisualizer, { BST } from './BSTVisualizer';
import Header from '../../Header';
import Footer from '../../Footer';

const allQuestions = [
  {
    title: "Pretest",
    questions: [
      {
        question: "What is a Binary Search Tree?",
        options: [
          "A tree where each node has exactly two children",
          "A tree where left child is smaller and right child is larger than the parent",
          "A tree where all leaf nodes are at the same level",
          "A tree where each node has a maximum of two children"
        ],
        correctAnswer: "A tree where left child is smaller and right child is larger than the parent"
      },
      {
        question: "What is the time complexity of searching in a balanced BST?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctAnswer: "O(log n)"
      },
      {
        question: "Which traversal visits the root node between its left and right subtrees?",
        options: ["Inorder", "Preorder", "Postorder", "Level order"],
        correctAnswer: "Inorder"
      },
      {
        question: "What is the main advantage of using a BST over a linked list?",
        options: [
          "Faster insertion at the beginning",
          "Faster searching",
          "Less memory usage",
          "Simpler implementation"
        ],
        correctAnswer: "Faster searching"
      },
      {
        question: "In a BST, where is the smallest element located?",
        options: [
          "At the root",
          "At the leftmost leaf",
          "At the rightmost leaf",
          "It can be anywhere in the tree"
        ],
        correctAnswer: "At the leftmost leaf"
      },
      {
        question: "What happens when you insert a duplicate value in a standard BST?",
        options: [
          "It replaces the existing node",
          "It is typically added to the right subtree",
          "It causes an error",
          "It is typically added to the left subtree"
        ],
        correctAnswer: "It is typically added to the right subtree"
      },
      {
        question: "What is the height of a BST with a single node?",
        options: ["0", "1", "2", "undefined"],
        correctAnswer: "0"
      },
      {
        question: "Which operation in BST requires traversing to a leaf node in most cases?",
        options: ["Search", "Insertion", "Finding minimum", "Finding maximum"],
        correctAnswer: "Insertion"
      }
    ]
  },
  {
    title: "Quiz",
    questions: [
      {
        question: "What is the worst-case time complexity for insertion in a BST?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correctAnswer: "O(n)"
      },
      {
        question: "Which of the following is NOT a self-balancing BST?",
        options: ["AVL Tree", "Red-Black Tree", "B-Tree", "Linked List"],
        correctAnswer: "Linked List"
      },
      {
        question: "What is the inorder traversal of a BST used for?",
        options: [
          "To visit nodes in ascending order",
          "To visit leaf nodes first",
          "To visit the root node first",
          "To visit nodes level by level"
        ],
        correctAnswer: "To visit nodes in ascending order"
      },
      {
        question: "What is the space complexity of a BST?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        correctAnswer: "O(n)"
      },
      {
        question: "Which traversal is most useful for creating a copy of a BST?",
        options: ["Inorder", "Preorder", "Postorder", "Level order"],
        correctAnswer: "Preorder"
      },
      {
        question: "What is the minimum number of nodes in a BST of height h?",
        options: ["h", "h+1", "2^h", "2^(h+1)-1"],
        correctAnswer: "h+1"
      },
      {
        question: "In a BST, which traversal would print the nodes in ascending order?",
        options: ["Preorder", "Inorder", "Postorder", "Level order"],
        correctAnswer: "Inorder"
      }
    ]
  },
  {
    title: "Posttest",
    questions: [
      {
        question: "Explain the process of deleting a node with two children in a BST.",
        options: [
          "Replace with the minimum value in the right subtree",
          "Replace with the maximum value in the left subtree",
          "Replace with either the predecessor or successor",
          "Simply remove the node and reattach its children"
        ],
        correctAnswer: "Replace with either the predecessor or successor"
      },
      {
        question: "How does the height of a balanced BST compare to an unbalanced one?",
        options: [
          "Balanced BST always has a height of log n",
          "Unbalanced BST always has a height of n",
          "Balanced BST has a height of O(log n), while unbalanced can have O(n)",
          "There is no significant difference in height"
        ],
        correctAnswer: "Balanced BST has a height of O(log n), while unbalanced can have O(n)"
      },
      {
        question: "What is the primary benefit of keeping a BST balanced?",
        options: [
          "To reduce memory usage",
          "To maintain O(log n) time complexity for operations",
          "To simplify the implementation of tree operations",
          "To make the tree more visually appealing"
        ],
        correctAnswer: "To maintain O(log n) time complexity for operations"
      },
      {
        question: "What is the relationship between BST height and its performance?",
        options: [
          "Height has no impact on performance",
          "Lower height generally means better performance",
          "Higher height generally means better performance",
          "Height only affects memory usage"
        ],
        correctAnswer: "Lower height generally means better performance"
      },
      {
        question: "Which BST property makes binary search possible?",
        options: [
          "All nodes must have two children",
          "The tree must be balanced",
          "Left subtree values must be less than parent and right subtree values must be greater",
          "All leaf nodes must be at the same level"
        ],
        correctAnswer: "Left subtree values must be less than parent and right subtree values must be greater"
      },
      {
        question: "What makes AVL trees better than standard BSTs?",
        options: [
          "They use less memory",
          "They automatically maintain balance",
          "They allow duplicate keys",
          "They have faster insertion"
        ],
        correctAnswer: "They automatically maintain balance"
      }
    ]
  }
];

const QuestionSet = ({ questionSet }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [quizId, setQuizId] = useState(0); // Add this to force re-render of questions

  useEffect(() => {
    initializeQuiz();
  }, [questionSet]);

  const initializeQuiz = () => {
    const shuffled = [...questionSet.questions].sort(() => 0.5 - Math.random());
    setRandomQuestions(shuffled.slice(0, 5));
    setUserAnswers({});
    setSubmitted(false);
    setScore(0);
    setQuizId(prev => prev + 1); // Increment quiz ID to force re-render
  };

  const handleAnswerChange = (questionIndex, answer) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(userAnswers).length !== randomQuestions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    let newScore = 0;
    randomQuestions.forEach((q, index) => {
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
      {/* Use key={quizId} to force re-render of the entire question set */}
      <div key={quizId}>
        {randomQuestions.map((q, index) => (
          <div key={`${quizId}-${index}`} style={{ marginBottom: '15px' }}>
            <p><strong>{index + 1}. {q.question}</strong></p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {q.options.map((option, optionIndex) => (
                <li key={`${quizId}-${index}-${optionIndex}`}>
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
                      name={`question-${quizId}-${index}`} // Add quizId to name
                      value={option}
                      checked={userAnswers[index] === option}
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
      </div>
      {!submitted && (
        <button 
          onClick={handleSubmit} 
          style={{
            padding: '10px 20px',
            backgroundColor: '#2c3e50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Submit
        </button>
      )}
      {submitted && (
        <div>
          <h4>Your Score: {score} out of {randomQuestions.length}</h4>
          <button 
            onClick={initializeQuiz}
            style={{
              padding: '10px 20px',
              backgroundColor: '#2c3e50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};
function BSTPage() {
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
              This page aims to provide a comprehensive understanding of Binary Search Trees (BSTs), covering their properties, implementation, and applications in computer science and data structures. It includes interactive quizzes to test your knowledge, an interactive visualizer for exploring BST operations, and curated reading materials for deeper insights.
            </p>
          </section>
        );
      case 'overview':
        return (
          <section id="overview">
            <h2>Overview</h2>
            <p>A Binary Search Tree is a node-based binary tree data structure which has the following properties:</p>
            <ul>
              <li>The left subtree of a node contains only nodes with keys lesser than the node's key.</li>
              <li>The right subtree of a node contains only nodes with keys greater than the node's key.</li>
              <li>The left and right subtree each must also be a binary search tree.</li>
            </ul>
            <p>BSTs allow fast lookup, addition and removal of items, and can be used to implement dynamic sets and lookup tables.</p>
          </section>
        );
      case 'recap':
        return (
          <section id="recap">
            <h2>Recap</h2>
            <p>In previous lessons, we've explored various data structures like arrays and linked lists. Binary Search Trees combine the fast insertion of linked lists with the fast searching of sorted arrays, making them a powerful and widely-used data structure in computer science.</p>
          </section>
        );
      case 'pretest':
        return (
          <section id="pretest">
            <h2>Pretest</h2>
            <p>
              Before we dive deeper into Binary Search Trees, take this quick pretest to
              assess your understanding of basic BST concepts.
            </p>
            <QuestionSet questionSet={allQuestions[0]} />
          </section>
        );
      case 'bst-operations':
        return (
          <section id="bst-operations">
            <h2>BST Operations</h2>
            <p>The main operations in a BST are:</p>
            <ul>
              <li>Insertion: O(log n) average, O(n) worst case</li>
              <li>Deletion: O(log n) average, O(n) worst case</li>
              <li>Search: O(log n) average, O(n) worst case</li>
            </ul>
            <p>These operations are efficient for balanced trees. However, in the worst case (when the tree becomes a linear chain), the time complexity degrades to O(n).</p>
          </section>
        );
      case 'traversals':
        return (
          <section id="traversals">
            <h2>Tree Traversals</h2>
            <p>There are three main types of traversals in a BST:</p>
            <ol>
              <li>Inorder (Left, Root, Right): Visits nodes in ascending order</li>
              <li>Preorder (Root, Left, Right): Useful for creating a copy of the tree</li>
              <li>Postorder (Left, Right, Root): Useful for deleting the tree</li>
            </ol>
            <p>Additionally, level order traversal visits nodes level by level from top to bottom.</p>
          </section>
        );
      case 'visualizer':
        return (
          <section id="visualizer">
            <h2>Binary Search Tree Visualizer</h2>
            <p>Visualize the operations of a Binary Search Tree with this interactive tool.</p>
            <BSTVisualizer />
          </section>
        );
      case 'quiz':
        return (
          <section id="quiz">
            <h2>Quiz</h2>
            <p>
              Test your knowledge on Binary Search Trees with this short quiz. Check your
              understanding of BST operations, traversals, and related concepts.
            </p>
            <QuestionSet questionSet={allQuestions[1]} />
          </section>
        );
      case 'analysis':
        return (
          <section id="analysis">
            <h2>Analysis</h2>
            <p>The performance of a BST depends on the height of the tree:</p>
            <ul>
              <li>For a balanced BST, the height is O(log n), where n is the number of nodes</li>
              <li>In the worst case (linear chain), the height is O(n)</li>
              <li>Self-balancing trees like AVL trees and Red-Black trees ensure O(log n) height</li>
            </ul>
            <p>BSTs provide a good compromise between ease of implementation and performance, making them suitable for many applications.</p>
          </section>
        );
      case 'posttest':
        return (
          <section id="posttest">
            <h2>Posttest</h2>
            <p>
              After completing this section, please take the posttest to evaluate
              what you have learned about Binary Search Trees.
            </p>
            <QuestionSet questionSet={allQuestions[2]} />
          </section>
        );
      case 'FurtherReading':
        return (
          <section id="FurtherReading">
            <h2>Further Reading/References</h2>
            <h2>Binary tree in C++</h2>
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ScdwdSCnXDU?si=qLLX8b7RM57Xpirm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <h2>Links</h2>
            <ul>
              <li><a href="https://en.wikipedia.org/wiki/Binary_search_tree">Wikipedia - Binary Search Tree</a></li>
              <li><a href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/">GeeksforGeeks - Binary Search Tree</a></li>
              <li><a href="https://algs4.cs.princeton.edu/32bst/">Algorithms, 4th Edition by Robert Sedgewick and Kevin Wayne - Binary Search Trees</a></li>
            </ul>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
        <header style={{ padding: '10px', backgroundColor: '#2c3e50', color: 'white' }}>
          <h1>Binary Search Trees in Data Structures</h1>
        </header>

        <div style={{ display: 'flex', marginTop: '20px' }}>
          <nav style={{
            width: '200px',
            marginRight: '20px',
            backgroundColor: '#fff',
            padding: '15px',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}>
            <h2>Contents</h2>
            <ul style={{
              listStyleType: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column'
            }}>
              {['aim', 'overview', 'recap', 'pretest', 'bst-operations', 'traversals', 'visualizer', 'quiz', 'analysis', 'posttest', 'FurtherReading'].map((section) => (
                <li key={section} style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleSectionClick(section)}>
                  {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                </li>
              ))}
            </ul>
          </nav>

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
      <Footer />
    </>
  );
}

export default BSTPage;
