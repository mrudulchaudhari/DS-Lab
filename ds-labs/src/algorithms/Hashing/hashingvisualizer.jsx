import React, { useState, useEffect } from 'react';

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const getNextPrime = (n) => {
  while (!isPrime(n)) {
    n++;
  }
  return n;
};

const HashingVisualizer = () => {
  const [tableSize, setTableSize] = useState(10);
  const [hashTable, setHashTable] = useState([]);
  const [inputNumber, setInputNumber] = useState('');
  const [hashingMethod, setHashingMethod] = useState('linearProbing');
  const [highlightedCell, setHighlightedCell] = useState(null);
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    initializeHashTable();
  }, [tableSize, hashingMethod]);

  const initializeHashTable = () => {
    const size = getNextPrime(tableSize);
    setTableSize(size);
    setHashTable(Array(size).fill(null));
    setSteps([]);
    setCurrentStep(0);
  };

  const addNumber = () => {
    if (inputNumber.trim() !== '') {
      const number = parseInt(inputNumber, 10);
      if (isNaN(number)) {
        alert('Please enter a valid number.');
        return;
      }
      const newSteps = [];
      const newTable = [...hashTable];

      let index = number % tableSize;
      newSteps.push({ type: 'initial', index, message: `Initial hash: ${number} % ${tableSize} = ${index}` });

      if (hashingMethod === 'linearProbing') {
        while (newTable[index] !== null) {
          newSteps.push({ type: 'collision', index, message: 'Collision detected, moving to next slot' });
          index = (index + 1) % tableSize;
        }
      } else if (hashingMethod === 'quadraticProbing') {
        let i = 0;
        while (newTable[index] !== null) {
          newSteps.push({ type: 'collision', index, message: 'Collision detected, using quadratic probing' });
          i++;
          index = (index + i * i) % tableSize;
        }
      } else if (hashingMethod === 'doubleHashing') {
        const hash2 = 7 - (number % 7);
        let i = 0;
        while (newTable[index] !== null) {
          newSteps.push({ type: 'collision', index, message: 'Collision detected, using double hashing' });
          i++;
          index = (index + i * hash2) % tableSize;
        }
      } else if (hashingMethod === 'separateChaining') {
        if (newTable[index] === null) {
          newTable[index] = [];
        }
        newTable[index].push(number);
        newSteps.push({ type: 'insert', index, message: 'Inserting into chain' });
      }

      if (hashingMethod !== 'separateChaining') {
        newTable[index] = number;
      }
      
      newSteps.push({ type: 'insert', index, message: 'Inserting number' });

      setHashTable(newTable);
      setSteps(newSteps);
      setCurrentStep(0);
      setInputNumber('');
    }
  };

  const renderHashTable = () => {
    return hashTable.map((cell, index) => (
      <div
        key={index}
        className={`cell ${highlightedCell === index ? 'highlighted' : ''}`}
      >
        <div className="cell-index">Cell {index}</div>
        <div className="cell-content">
          {cell === null ? (
            <div className="empty-cell">Empty</div>
          ) : hashingMethod === 'separateChaining' ? (
            cell.map((item, i) => (
              <div key={i} className="chain-item">
                {item}
              </div>
            ))
          ) : (
            <div className="number-item">
              {cell}
            </div>
          )}
        </div>
      </div>
    ));
  };

  const renderSteps = () => {
    if (steps.length === 0) return null;
    const step = steps[currentStep];
    return (
      <div className="step-display">
        <p>{step.message}</p>
        <div className="step-controls">
          <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
            Previous
          </button>
          <button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} disabled={currentStep === steps.length - 1}>
            Next
          </button>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (steps.length > 0) {
      setHighlightedCell(steps[currentStep].index);
    }
  }, [currentStep, steps]);

  return (
    <div className="hashing-visualizer">
      <h2>Enhanced Hashing Visualizer</h2>

      <div className="controls">
        <div className="input-group">
          <label>Hashing Method:</label>
          <select value={hashingMethod} onChange={(e) => setHashingMethod(e.target.value)}>
            <option value="linearProbing">Linear Probing</option>
            <option value="quadraticProbing">Quadratic Probing</option>
            <option value="doubleHashing">Double Hashing</option>
            <option value="separateChaining">Separate Chaining</option>
          </select>
        </div>

        <div className="input-group">
          <label>Table Size:</label>
          <input
            type="number"
            value={tableSize}
            onChange={(e) => setTableSize(parseInt(e.target.value, 10))}
            min="1"
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
            placeholder="Enter a number"
          />
          <button onClick={addNumber}>Add Number</button>
        </div>

        <button onClick={initializeHashTable}>Clear Table</button>
      </div>

      {renderSteps()}

      <div className="hash-table">
        {renderHashTable()}
      </div>

      <style jsx>{`
        .hashing-visualizer {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          color: #333;
        }

        .controls {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .input-group {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        input, select, button {
          padding: 8px;
          font-size: 14px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          background-color: #4CAF50;
          color: white;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #45a049;
        }

        .step-display {
          background-color: #fff;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 20px;
        }

        .step-controls {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }

        .hash-table {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .cell {
          width: 100px;
          background-color: #2196F3;
          border-radius: 4px;
          padding: 10px;
          color: white;
          transition: background-color 0.3s;
        }

        .cell.highlighted {
          background-color: #FFC107;
        }

        .cell-index {
          font-weight: bold;
          margin-bottom: 5px;
        }

        .cell-content {
          min-height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 5px;
        }

        .empty-cell {
          color: rgba(255, 255, 255, 0.5);
        }

        .chain-item, .number-item {
          margin: 2px 0;
        }
      `}</style>
    </div>
  );
};

export default HashingVisualizer;