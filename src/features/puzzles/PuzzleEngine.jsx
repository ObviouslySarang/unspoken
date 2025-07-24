import React, { useState } from "react";

const puzzleTypes = [
  "Jigsaw of Emotions",
  "Word Maze",
  "Role-Play Dialogues",
  "Letter Builder",
  "Barrier Breaker"
];

const PuzzleEngine = () => {
  const [selected, setSelected] = useState(puzzleTypes[0]);

  return (
    <div>
      <h2>Puzzle Engine</h2>
      <p>Render and solve puzzles for communication practice.</p>
      <label htmlFor="puzzle-select">Choose a puzzle type:</label>
      <select
        id="puzzle-select"
        value={selected}
        onChange={e => setSelected(e.target.value)}
      >
        {puzzleTypes.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <div style={{ marginTop: 10 }}>
        <strong>Selected Puzzle:</strong> {selected}
        {/* TODO: Render puzzle UI here */}
      </div>
    </div>
  );
};

export default PuzzleEngine;
