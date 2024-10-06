import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import MergeSortPage from './algorithms/mergesort/MergeSort.jsx';
import LinkedListPage from './algorithms/linkedlist/LinkedList.jsx';
import BinarySearchTreePage from './algorithms/BST/BinarySearchTree.jsx';
import HashingPage from './algorithms/hashing/Hashing.jsx';
import FloydsAlgorithmPage from './algorithms/floyd/FloydsAlgorithm.jsx';
import About from './About.jsx';

function AppRoutes() {
return (
    <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/merge-sort" element={<MergeSortPage />} />
        <Route path="/linked-lists" element={<LinkedListPage />} />
        <Route path="/binary-search-tree" element={<BinarySearchTreePage />} />
        <Route path="/hashing" element={<HashingPage />} />
        <Route path="/floyds-algorithm" element={<FloydsAlgorithmPage />} />
        <Route path="/about" element={<About />} />
    </Routes>
    </Router>
);
}

export default AppRoutes;
