import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import MergeSort from './algorithms/MergeSort/mergesort.jsx';
import LinkedListPage from './algorithms/linkedlist/LinkedListPage.jsx';
import Tree from './algorithms/BST/tree.jsx';
import HashingPage from './algorithms/Hashing/hashing.jsx';
import FloydsAlgorithmPage from './algorithms/Floyd/floyd.jsx';
import About from './About.jsx';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/merge-sort" element={<MergeSort />} />
      <Route path="/linked-lists" element={<LinkedListPage />} />
      <Route path="/binary-search-tree" element={<Tree />} />
      <Route path="/hashing" element={<HashingPage />} />
      <Route path="/floyds-algorithm" element={<FloydsAlgorithmPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;