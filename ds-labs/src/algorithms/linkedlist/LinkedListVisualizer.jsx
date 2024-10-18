import React, { useState } from 'react';

const LinkedListVisualizer = () => {
  const [nodes, setNodes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [listType, setListType] = useState('linear');

  const addNode = () => {
    if (inputValue.trim() !== '') {
      setNodes([...nodes, inputValue.trim()]);
      setInputValue('');
    }
  };

  const changeListType = (type) => {
    setListType(type);
  };

  const renderNodes = () => {
    if (listType !== 'circular' || nodes.length === 0) {
      return nodes.map((node, index) => (
        <div key={index} style={styles.nodeContainer}>
          <div style={styles.node}>{node}</div>
          {index < nodes.length - 1 && (
            <div style={styles.arrowContainer}>
              {listType === 'doubly' && <span style={styles.arrow}>←</span>}
              <span style={styles.arrow}>→</span>
            </div>
          )}
        </div>
      ));
    }

    const radius = 100;
    const centerX = radius + 20;
    const centerY = radius + 20;
    const angleStep = (2 * Math.PI) / nodes.length;

    return (
      <svg width={(radius + 20) * 2} height={(radius + 20) * 2} style={styles.circularSvg}>
        {nodes.map((node, index) => {
          const angle = index * angleStep - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          const nextAngle = ((index + 1) % nodes.length) * angleStep - Math.PI / 2;
          const nextX = centerX + radius * Math.cos(nextAngle);
          const nextY = centerY + radius * Math.sin(nextAngle);

          // Calculate arrow position
          const midX = (x + nextX) / 2;
          const midY = (y + nextY) / 2;
          const arrowAngle = Math.atan2(nextY - y, nextX - x);

          return (
            <g key={index}>
              <circle cx={x} cy={y} r="20" fill="#2196F3" />
              <text x={x} y={y} textAnchor="middle" dy=".3em" fill="white">{node}</text>
              <line 
                x1={x} y1={y} 
                x2={nextX} y2={nextY} 
                stroke="#333" 
                strokeWidth="2"
              />
              <polygon
                points="0,-3 0,3 6,0"
                fill="#333"
                transform={`translate(${midX},${midY}) rotate(${arrowAngle * (180/Math.PI)})`}
              />
            </g>
          );
        })}
      </svg>
    );
  };

  return (
    <div style={styles.visualizer}>
      <h2 style={styles.title}>Linked List Visualizer</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={styles.input}
          placeholder="Enter node value"
        />
        <button onClick={addNode} style={styles.addButton}>
          Add Node
        </button>
      </div>
      <div style={styles.buttonContainer}>
        {['linear', 'circular', 'doubly'].map((type) => (
          <button
            key={type}
            onClick={() => changeListType(type)}
            style={{
              ...styles.typeButton,
              ...(listType === type ? styles.activeTypeButton : {})
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      <div style={styles.nodesContainer}>
        {renderNodes()}
      </div>
    </div>
  );
};

const styles = {
  visualizer: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px 0 0 4px',
    border: '1px solid #ccc',
  },
  addButton: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px', // Increased margin
  },
  typeButton: {
    padding: '8px 16px',
    margin: '0 5px',
    fontSize: '14px',
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  activeTypeButton: {
    backgroundColor: '#2196F3',
    color: 'white',
  },
  nodesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  nodeContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px',
  },
  node: {
    width: '40px',
    height: '40px',
    backgroundColor: '#2196F3',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  arrowContainer: {
    margin: '0 10px',
  },
  arrow: {
    fontSize: '20px',
    color: '#333',
  },
  circularSvg: {
    margin: '20px auto',
    display: 'block',
  },
};

export default LinkedListVisualizer;