import React, { useState } from 'react';

// Default hash function (modulo)
const defaultHashFunction = (key, tableSize) => key % tableSize;

const HashingVisualizer = () => {
  const [tableSize, setTableSize] = useState(10); // Size of the hash table
  const [hashTable, setHashTable] = useState(Array.from({ length: tableSize }, () => []));
  const [keyValue, setKeyValue] = useState({ key: '', value: '' });
  const [hashFunctionType, setHashFunctionType] = useState('modulo'); // Custom hash function type
  const [highlightedBucket, setHighlightedBucket] = useState(null); // Highlight bucket after insertion

  const getHashFunction = (type) => {
    if (type === 'multiply') {
      return (key, tableSize) => Math.floor((key * 0.6180339887) % 1 * tableSize); // Multiplication method
    }
    return defaultHashFunction; // Default: modulo
  };

  const hashFunction = getHashFunction(hashFunctionType);

  const addKeyValue = () => {
    if (keyValue.key.trim() !== '' && keyValue.value.trim() !== '') {
      const key = parseInt(keyValue.key, 10);
      if (isNaN(key)) {
        alert('Key must be a number.');
        return;
      }
      const index = hashFunction(key, tableSize);
      const newTable = [...hashTable];
      newTable[index] = [...newTable[index], keyValue];
      setHashTable(newTable);
      setHighlightedBucket(index); // Highlight the bucket
      setKeyValue({ key: '', value: '' });
    }
  };

  const clearTable = () => {
    setHashTable(Array.from({ length: tableSize }, () => []));
    setHighlightedBucket(null);
  };

  const handleTableSizeChange = (e) => {
    const size = parseInt(e.target.value, 10);
    if (!isNaN(size) && size > 0) {
      setTableSize(size);
      clearTable();
    }
  };

  const renderHashTable = () => {
    return hashTable.map((bucket, index) => (
      <div
        key={index}
        style={{
          ...styles.bucketContainer,
          backgroundColor: highlightedBucket === index ? '#FFEB3B' : '#2196F3',
        }}
      >
        <div style={styles.bucketIndex}>Bucket {index}</div>
        <div style={styles.bucketContent}>
          {bucket.length > 0 ? bucket.map((pair, i) => (
            <div key={i} style={styles.keyValuePair}>
              {`(${pair.key}: ${pair.value})`}
            </div>
          )) : <div style={styles.emptyBucket}>Empty</div>}
        </div>
      </div>
    ));
  };

  return (
    <div style={styles.visualizer}>
      <h2 style={styles.title}>Hashing Visualizer</h2>

      {/* Hash Function Type */}
      <div style={styles.configContainer}>
        <label style={styles.label}>Hash Function: </label>
        <select
          value={hashFunctionType}
          onChange={(e) => setHashFunctionType(e.target.value)}
          style={styles.select}
        >
          <option value="modulo">Modulo</option>
          <option value="multiply">Multiply</option>
        </select>
      </div>

      {/* Table Size */}
      <div style={styles.configContainer}>
        <label style={styles.label}>Table Size: </label>
        <input
          type="number"
          value={tableSize}
          onChange={handleTableSizeChange}
          style={styles.input}
        />
      </div>

      {/* Input for Key-Value */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={keyValue.key}
          onChange={(e) => setKeyValue({ ...keyValue, key: e.target.value })}
          style={styles.input}
          placeholder="Enter key (number)"
        />
        <input
          type="text"
          value={keyValue.value}
          onChange={(e) => setKeyValue({ ...keyValue, value: e.target.value })}
          style={styles.input}
          placeholder="Enter value"
        />
        <button onClick={addKeyValue} style={styles.addButton}>
          Add Key-Value
        </button>
      </div>

      {/* Hash Table */}
      <div style={styles.tableContainer}>
        {renderHashTable()}
      </div>

      {/* Clear Table */}
      <button onClick={clearTable} style={styles.clearButton}>Clear Table</button>
    </div>
  );
};

const styles = {
  visualizer: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
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
  configContainer: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  label: {
    fontSize: '16px',
    marginRight: '10px',
  },
  select: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    marginRight: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  addButton: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  clearButton: {
    padding: '8px 16px',
    marginTop: '20px',
    fontSize: '16px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  tableContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bucketContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    padding: '10px',
    borderRadius: '4px',
    color: 'white',
  },
  bucketIndex: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  bucketContent: {
    width: '150px',
    minHeight: '50px',
    padding: '10px',
    backgroundColor: '#2196F3',
    color: 'white',
    borderRadius: '4px',
    textAlign: 'center',
  },
  keyValuePair: {
    margin: '5px 0',
  },
  emptyBucket: {
    color: '#bbb',
  },
};

export default HashingVisualizer;
