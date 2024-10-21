import React, { useState } from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

const allQuestions = [
  {
    title: "Pretest",
    questions: [
      {
        question: "What is Floyd's Algorithm primarily used for?",
        options: [
          "Finding the shortest path between two vertices",
          "Finding shortest paths between all pairs of vertices",
          "Finding the minimum spanning tree",
          "Finding the longest path in a graph"
        ],
        correctAnswer: "Finding shortest paths between all pairs of vertices"
      },
      {
        question: "What is the time complexity of Floyd's Algorithm?",
        options: ["O(n)", "O(n²)", "O(n³)", "O(2ⁿ)"],
        correctAnswer: "O(n³)"
      },
      {
        question: "Floyd's Algorithm can work with:",
        options: [
          "Only positive edge weights",
          "Only negative edge weights",
          "Both positive and negative edge weights",
          "Only integer weights"
        ],
        correctAnswer: "Both positive and negative edge weights"
      },
      {
        question: "Which programming paradigm does Floyd's Algorithm use?",
        options: [
          "Greedy approach",
          "Dynamic programming",
          "Divide and conquer",
          "Backtracking"
        ],
        correctAnswer: "Dynamic programming"
      },
      {
        question: "What type of graph structure is required for Floyd's Algorithm?",
        options: [
          "Tree",
          "Directed Acyclic Graph (DAG)",
          "Any weighted graph",
          "Unweighted graph only"
        ],
        correctAnswer: "Any weighted graph"
      }
    ]
  },
  {
    title: "Quiz",
    questions: [
      {
        question: "What happens if there's a negative cycle in the graph when using Floyd's Algorithm?",
        options: [
          "The algorithm still works correctly",
          "The algorithm detects and reports the negative cycle",
          "The algorithm enters an infinite loop",
          "The algorithm produces incorrect results"
        ],
        correctAnswer: "The algorithm detects and reports the negative cycle"
      },
      {
        question: "Which data structure is primarily used in Floyd's Algorithm implementation?",
        options: [
          "Adjacency List",
          "Binary Tree",
          "2D Matrix/Array",
          "Priority Queue"
        ],
        correctAnswer: "2D Matrix/Array"
      },
      {
        question: "What is the space complexity of Floyd's Algorithm?",
        options: ["O(n)", "O(n²)", "O(n³)", "O(2ⁿ)"],
        correctAnswer: "O(n²)"
      },
      {
        question: "Floyd's Algorithm is also known as:",
        options: [
          "Dijkstra's Algorithm",
          "Floyd-Warshall Algorithm",
          "Bellman-Ford Algorithm",
          "Prim's Algorithm"
        ],
        correctAnswer: "Floyd-Warshall Algorithm"
      },
      {
        question: "Which of these is NOT a characteristic of Floyd's Algorithm?",
        options: [
          "Works with directed graphs",
          "Can detect negative cycles",
          "Requires a source vertex",
          "Uses dynamic programming"
        ],
        correctAnswer: "Requires a source vertex"
      }
    ]
  },
  {
    title: "Posttest",
    questions: [
      {
        question: "In Floyd's Algorithm, what does the value d[i][j] represent?",
        options: [
          "Number of edges between vertices i and j",
          "Shortest path weight between vertices i and j",
          "Direct edge weight between vertices i and j",
          "Number of possible paths between vertices i and j"
        ],
        correctAnswer: "Shortest path weight between vertices i and j"
      },
      {
        question: "Which algorithm would be more efficient for finding the shortest path between just two vertices?",
        options: [
          "Floyd's Algorithm",
          "Dijkstra's Algorithm",
          "Breadth-First Search",
          "Depth-First Search"
        ],
        correctAnswer: "Dijkstra's Algorithm"
      },
      {
        question: "What is the main advantage of Floyd's Algorithm over Dijkstra's Algorithm?",
        options: [
          "Lower time complexity",
          "Works with negative edges",
          "Finds all pairs shortest paths in one execution",
          "Uses less memory"
        ],
        correctAnswer: "Finds all pairs shortest paths in one execution"
      },
      {
        question: "In the context of Floyd's Algorithm, what is a 'intermediate vertex'?",
        options: [
          "The source vertex",
          "The destination vertex",
          "A vertex through which the path may pass",
          "A vertex with the minimum weight"
        ],
        correctAnswer: "A vertex through which the path may pass"
      },
      {
        question: "Which of these applications would benefit most from using Floyd's Algorithm?",
        options: [
          "Finding shortest path in a road network between two cities",
          "Computing distances between all pairs of network routers",
          "Finding the minimum spanning tree in a network",
          "Finding the longest path in a graph"
        ],
        correctAnswer: "Computing distances between all pairs of network routers"
      }
    ]
  }
];
const FloydVisualizer = () => {
  const INF = 999999;
  const initialGraph = [
    [0, 5, INF, 10],
    [INF, 0, 3, INF],
    [INF, INF, 0, 1],
    [INF, INF, INF, 0]
  ];

  const [graph, setGraph] = useState(initialGraph);
  const [k, setK] = useState(-1);
  const [i, setI] = useState(-1);
  const [j, setJ] = useState(-1);
  const [completed, setCompleted] = useState(false);

  const reset = () => {
    setGraph(initialGraph);
    setK(-1);
    setI(-1);
    setJ(-1);
    setCompleted(false);
  };

  const step = () => {
    const n = graph.length;
    let nextK = k;
    let nextI = i;
    let nextJ = j;

    if (k === -1 || (i === n - 1 && j === n - 1)) {
      nextK = k + 1;
      nextI = 0;
      nextJ = 0;
    } else if (j === n - 1) {
      nextI = i + 1;
      nextJ = 0;
    } else {
      nextJ = j + 1;
    }

    if (nextK === n) {
      setCompleted(true);
      return;
    }

    const newGraph = graph.map(row => [...row]);
    newGraph[nextI][nextJ] = Math.min(
      graph[nextI][nextJ],
      graph[nextI][nextK] + graph[nextK][nextJ]
    );

    setGraph(newGraph);
    setK(nextK);
    setI(nextI);
    setJ(nextJ);
  };

  const getCellColor = (row, col) => {
    if (completed) return '#e8f5e9';  // light green
    if (row === i && col === j) return '#fff9c4';  // light yellow
    if (row === k || col === k) return '#e3f2fd';  // light blue
    return 'white';
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'white'
    }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Floyd-Warshall Algorithm Visualizer
      </h3>
      
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        k = {k}, i = {i}, j = {j}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <table style={{ borderCollapse: 'collapse' }}>
          <tbody>
            {graph.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    style={{
                      border: '1px solid #ccc',
                      width: '48px',
                      height: '48px',
                      textAlign: 'center',
                      backgroundColor: getCellColor(rowIndex, colIndex)
                    }}
                  >
                    {cell === INF ? '∞' : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '10px'
      }}>
        <button
          onClick={step}
          disabled={completed}
          style={{
            padding: '8px 16px',
            backgroundColor: completed ? '#ccc' : '#2c3e50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: completed ? 'not-allowed' : 'pointer'
          }}
        >
          Step →
        </button>
        <button
          onClick={reset}
          style={{
            padding: '8px 16px',
            backgroundColor: 'white',
            color: '#2c3e50',
            border: '1px solid #2c3e50',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reset ↺
        </button>
      </div>

      {completed && (
        <div style={{
          textAlign: 'center',
          color: '#4caf50',
          marginTop: '20px',
          fontWeight: '500'
        }}>
          Algorithm completed! The matrix now shows shortest paths between all pairs of vertices.
        </div>
      )}
    </div>
  );
};

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

function FloydsAlgorithmPage() {
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
            <p>To provide a comprehensive understanding of Floyd's algorithm, its implementation, and applications in finding shortest paths between all pairs of vertices in a weighted graph.</p>
          </section>
        );
      case 'overview':
        return (
          <section id="overview">
            <h2>Overview</h2>
            <p>Floyd's Algorithm (also known as Floyd-Warshall Algorithm) is a dynamic programming approach for finding 
            shortest paths between all pairs of vertices in a weighted graph. Key characteristics include:</p>
            <ul>
              <li>Works with both positive and negative edge weights</li>
              <li>Can detect negative cycles in the graph</li>
              <li>Time complexity of O(n³)</li>
              <li>Uses a matrix to store distances between vertices</li>
            </ul>
          </section>
        );
      case 'recap':
        return (
          <section id="recap">
            <h2>Recap</h2>
            <p>In our previous  lectures, we've learned about non weighted graphs and algorithms based on them, now we move on to weighted graphs.</p>
          </section>
        );
      case 'pretest':
        return (
          <section id="pretest">
            <h2>Pretest</h2>
            <p>Before we dive deeper into Floyd's Algorithm, take this quick pretest to assess your understanding:</p>
            <QuestionSet questionSet={allQuestions[0]} />
          </section>
        );
        case 'visualizer':
        return (
        <section id="visualizer">
        <h2>Interactive Visualizer</h2>
        <p>Use this interactive tool to visualize how Floyd's Algorithm works step by step:</p>
        <FloydVisualizer />
        </section>
        );
        case 'analysis':
          return (
            <section id="analysis">
              <h2>Analysis</h2>
              
              <div className="algorithm-analysis">
                <h3>Algorithm Analysis</h3>
                <div className="complexity-analysis" style={{ marginBottom: '20px' }}>
                  <h4>Complexity Analysis</h4>
                  <ul>
                    <li><strong>Time Complexity:</strong> O(V³) where V is the number of vertices</li>
                    <li><strong>Space Complexity:</strong> O(V²) for the distance matrix</li>
                    <li><strong>Auxiliary Space:</strong> O(V²) for the path reconstruction matrix</li>
                  </ul>
                </div>    
                <div className="implementation-steps" style={{ marginBottom: '30px' }}>
                  <h4>Core Algorithm Steps</h4>
                  <ol>
                    <li>
                      <strong>Initialization:</strong>
                      <ul>
                        <li>Create a distance matrix D[V][V]</li>
                        <li>Initialize direct edges from the adjacency matrix</li>
                        <li>Set diagonal elements to 0</li>
                        <li>Set non-adjacent vertices' distance to infinity</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Main Algorithm:</strong>
                      <pre style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '5px' }}>
                        {`for k from 1 to V
        for i from 1 to V
            for j from 1 to V
                if D[i][j] > D[i][k] + D[k][j]
                    D[i][j] = D[i][k] + D[k][j]`}
                      </pre>
                    </li>
                    <li>
                      <strong>Path Reconstruction:</strong>
                      <ul>
                        <li>Maintain a predecessor matrix for path reconstruction</li>
                        <li>Update when a shorter path is found</li>
                      </ul>
                    </li>
                  </ol>
                </div>
    
                <div className="optimizations" style={{ marginBottom: '30px' }}>
                  <h4>Optimizations and Variations</h4>
                  <ul>
                    <li>
                      <strong>Space Optimization:</strong>
                      <ul>
                        <li>Use the same matrix for distance and path reconstruction</li>
                        <li>Implement in-place updates to save memory</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Parallel Implementation:</strong>
                      <ul>
                        <li>Parallelize the k-th iteration</li>
                        <li>Use block matrix multiplication techniques</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Early Termination:</strong>
                      <ul>
                        <li>Stop if no updates in a complete iteration</li>
                        <li>Detect negative cycles early</li>
                      </ul>
                    </li>
                  </ul>
                </div>
    
                <div className="applications" style={{ marginBottom: '30px' }}>
                  <h4>Real-world Applications</h4>
                  <ul>
                    <li>
                      <strong>Network Routing:</strong>
                      <ul>
                        <li>Finding optimal paths in computer networks</li>
                        <li>Computing routing tables in network protocols</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Graphics:</strong>
                      <ul>
                        <li>Computing minimum distance in 3D graphics</li>
                        <li>Path finding in game development</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Traffic Systems:</strong>
                      <ul>
                        <li>Finding alternate routes in navigation systems</li>
                        <li>Traffic flow optimization</li>
                      </ul>
                    </li>
                  </ul>
                </div>
    
                <div className="limitations" style={{ marginBottom: '30px' }}>
                  <h4>Limitations and Considerations</h4>
                  <ul>
                    <li>Cubic time complexity makes it impractical for very large graphs</li>
                    <li>Requires all edge weights to be present at the start</li>
                    <li>Memory requirements can be significant for large graphs</li>
                    <li>Not suitable for dynamic graphs with frequently changing edges</li>
                  </ul>
                </div>
              </div>
            </section>
          );
      case 'quiz':
        return (
          <section id="quiz">
            <h2>Quiz</h2>
            <p>Test your knowledge on Floyd's Algorithm with this quiz:</p>
            <QuestionSet questionSet={allQuestions[1]} />
          </section>
        );
      case 'posttest':
        return (
          <section id="posttest">
            <h2>Posttest</h2>
            <p>After completing this section, please take the posttest to evaluate what you have learned:</p>
            <QuestionSet questionSet={allQuestions[2]} />
          </section>
        );
      case 'further-reading':
        return (
          <section id="further-reading">
            <h2>Further Reading/References</h2>
            <div className="comparison-table" style={{ marginBottom: '30px' }}>
                  <h2>Comparison with Other Shortest Path Algorithms</h2>
                  <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Feature</th>
                        <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Floyd-Warshall</th>
                        <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Dijkstra</th>
                        <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left' }}>Bellman-Ford</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Time Complexity</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>O(V³)</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>O(V² log V)</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>O(VE)</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Negative Edges</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Yes</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>No</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Yes</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>All Pairs Shortest Path</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Yes</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>No</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>No</td>
                      </tr>
                      <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Negative Cycle Detection</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Yes</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>No</td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            <h2>Video Explaination</h2>
            <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4OQeCuLYj-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h2>Addtional Resources</h2>
            <p>For more detailed information on Floyd's Algorithm, refer to these resources:</p>
            <ul>
              <li><a href="https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/">GeeksforGeeks - Floyd Warshall Algorithm</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm">Wikipedia - Floyd-Warshall Algorithm</a></li>
              <li><a href="https://www.programiz.com/dsa/floyd-warshall-algorithm">Programiz - Floyd Warshall Algorithm</a></li>
            </ul>
          </section>
        );
      case 'feedback':
          return (
            <section id="feedback">
              <h2>Feedback</h2>
              <p>Your feedback is valuable! Please let us know your thoughts on this lesson about Floyd's algorithm.</p>
            </section>
         );
      default:
        return null;
    }
  };

  return (
    <> <Header/>
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <header style={{ padding: '10px', backgroundColor: '#2c3e50', color: 'white' }}>
        <h1>Floyd's Algorithm</h1>
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
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {['aim', 'overview', 'recap', 'pretest','visualizer','analysis', 'quiz', 'posttest', 'further-reading','feedback'].map((section) => (
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

export default FloydsAlgorithmPage;