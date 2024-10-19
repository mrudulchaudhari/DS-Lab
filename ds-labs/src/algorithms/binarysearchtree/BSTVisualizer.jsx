import { useState } from 'react';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(node, value) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this._deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._deleteNode(node.right, value);
      return node;
    } else {
      // Node to delete found
      
      // Case 1: Leaf node
      if (!node.left && !node.right) {
        return null;
      }
      
      // Case 2: Node with one child
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      
      // Case 3: Node with two children
      let minNode = this._findMin(node.right);
      node.value = minNode.value;
      node.right = this._deleteNode(node.right, minNode.value);
      return node;
    }
  }

  _findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  getHeight(node = this.root) {
    if (!node) return 0;
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }
}

function BSTVisualizer() {
  const [tree] = useState(new BST());
  const [inputValue, setInputValue] = useState('');
  const [deleteValue, setDeleteValue] = useState('');
  const [, setRefresh] = useState(0);

  const handleInsert = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      tree.insert(value);
      setInputValue('');
      setRefresh(prev => prev + 1);
    }
  };

  const handleDelete = () => {
    const value = parseInt(deleteValue);
    if (!isNaN(value)) {
      tree.delete(value);
      setDeleteValue('');
      setRefresh(prev => prev + 1);
    }
  };

  const getHorizontalSpacing = (level) => {
    const baseSpacing = 120;
    return baseSpacing / Math.pow(1.3, level);
  };

  const TreeNode = ({ node, x, y, level }) => {
    if (!node) return null;

    const horizontalSpacing = getHorizontalSpacing(level);
    const verticalSpacing = 60;
    
    return (
      <g>
        {/* Node circle */}
        <circle
          cx={x}
          cy={y}
          r="20"
          fill="white"
          stroke="#2563eb"
          strokeWidth="2"
          className="transition-all duration-300"
        />
        
        {/* Node value */}
        <text
          x={x}
          y={y}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14"
          className="select-none"
        >
          {node.value}
        </text>
        
        {/* Left child */}
        {node.left && (
          <>
            <line
              x1={x}
              y1={y + 20}
              x2={x - horizontalSpacing}
              y2={y + verticalSpacing - 20}
              stroke="#2563eb"
              strokeWidth="2"
              className="transition-all duration-300"
            />
            <TreeNode
              node={node.left}
              x={x - horizontalSpacing}
              y={y + verticalSpacing}
              level={level + 1}
            />
          </>
        )}
        
        {/* Right child */}
        {node.right && (
          <>
            <line
              x1={x}
              y1={y + 20}
              x2={x + horizontalSpacing}
              y2={y + verticalSpacing - 20}
              stroke="#2563eb"
              strokeWidth="2"
              className="transition-all duration-300"
            />
            <TreeNode
              node={node.right}
              x={x + horizontalSpacing}
              y={y + verticalSpacing}
              level={level + 1}
            />
          </>
        )}
      </g>
    );
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800">Binary Search Tree Visualizer</h2>
      
      <div className="flex gap-4">
        {/* Insert controls */}
        <div className="flex gap-2">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter number"
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleInsert}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Insert
          </button>
        </div>

        {/* Delete controls */}
        <div className="flex gap-2">
          <input
            type="number"
            value={deleteValue}
            onChange={(e) => setDeleteValue(e.target.value)}
            placeholder="Delete number"
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
      
      <svg 
        width="800" 
        height="500" 
        className="border border-gray-200 rounded bg-gray-50"
      >
        <g transform="translate(400, 40)">
          {tree.root && (
            <TreeNode
              node={tree.root}
              x={0}
              y={0}
              level={1}
            />
          )}
        </g>
      </svg>

      {!tree.root && (
        <div className="text-gray-500 italic">
          Tree is empty. Insert some numbers to visualize the BST.
        </div>
      )}
    </div>
  );
}

// Export both the BST class and the visualizer component
export { BST };
export default BSTVisualizer;