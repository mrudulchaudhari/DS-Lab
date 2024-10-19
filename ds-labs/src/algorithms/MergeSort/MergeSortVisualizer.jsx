import React, { useState } from 'react';

const MergeSortVisualizer = () => {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [steps, setSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    const num = parseInt(inputValue);
    if (!isNaN(num)) {
      setNumbers([...numbers, num]);
      setInputValue('');
    }
  };

  const handleSort = () => {
    const sortSteps = [];
    const arr = [...numbers];
    mergeSort(arr, 0, arr.length - 1, sortSteps);
    setSteps(sortSteps);
    setCurrentStep(0);
  };

  const mergeSort = (arr, left, right, steps) => {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      steps.push({ type: 'divide', arr: [...arr], left, mid, right });
      
      mergeSort(arr, left, mid, steps);
      mergeSort(arr, mid + 1, right, steps);
      
      merge(arr, left, mid, right, steps);
    }
  };

  const merge = (arr, left, mid, right, steps) => {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);
    
    let i = 0, j = 0, k = left;
    
    while (i < leftArr.length && j < rightArr.length) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }
      k++;
      steps.push({ type: 'merge', arr: [...arr], left, mid, right });
    }
    
    while (i < leftArr.length) {
      arr[k] = leftArr[i];
      i++;
      k++;
      steps.push({ type: 'merge', arr: [...arr], left, mid, right });
    }
    
    while (j < rightArr.length) {
      arr[k] = rightArr[j];
      j++;
      k++;
      steps.push({ type: 'merge', arr: [...arr], left, mid, right });
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Merge Sort Visualizer</h2>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a number"
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={handleAddNumber} style={{ padding: '5px 10px', marginRight: '10px' }}>Add</button>
        <button onClick={handleSort} style={{ padding: '5px 10px' }}>Sort</button>
      </div>
      <div style={{ margin: '20px 0' }}>
        <p>Current Array: {numbers.join(', ')}</p>
      </div>
      
      {steps.length > 0 && (
        <div>
          <h3>Visualization</h3>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            {steps[currentStep].arr.map((num, index) => (
              <div
                key={index}
                style={{
                  width: '30px',
                  height: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #ccc',
                  margin: '0 2px',
                  backgroundColor: 
                    index >= steps[currentStep].left && index <= steps[currentStep].right
                      ? index <= steps[currentStep].mid
                        ? '#ffcccc'
                        : '#ccffcc'
                      : 'white'
                }}
              >
                {num}
              </div>
            ))}
          </div>
          <p>
            {steps[currentStep].type === 'divide'
              ? `Dividing: [${steps[currentStep].left}, ${steps[currentStep].right}]`
              : `Merging: [${steps[currentStep].left}, ${steps[currentStep].right}]`}
          </p>
          <div>
            <button onClick={prevStep} disabled={currentStep === 0} style={{ marginRight: '10px', padding: '5px 10px' }}>
              Previous
            </button>
            <button onClick={nextStep} disabled={currentStep === steps.length - 1} style={{ padding: '5px 10px' }}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MergeSortVisualizer;