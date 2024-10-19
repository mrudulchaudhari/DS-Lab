import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, RotateCcw } from 'lucide-react';

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
    if (completed) return 'bg-green-100';
    if (row === i && col === j) return 'bg-yellow-200';
    if (row === k || col === k) return 'bg-blue-100';
    return 'bg-white';
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Floyd-Warshall Algorithm Visualizer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm">
            k = {k}, i = {i}, j = {j}
          </div>
          
          <div className="grid place-items-center">
            <table className="border-collapse">
              <tbody>
                {graph.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, colIndex) => (
                      <td
                        key={colIndex}
                        className={`border border-gray-300 w-12 h-12 text-center ${getCellColor(rowIndex, colIndex)}`}
                      >
                        {cell === INF ? '∞' : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              onClick={step}
              disabled={completed}
              className="gap-2"
            >
              Step <ChevronRight className="w-4 h-4" />
            </Button>
            <Button
              onClick={reset}
              variant="outline"
              className="gap-2"
            >
              Reset <RotateCcw className="w-4 h-4" />
            </Button>
          </div>

          {completed && (
            <div className="text-center text-green-600 font-medium">
              Algorithm completed! The matrix now shows shortest paths between all pairs of vertices.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FloydVisualizer;