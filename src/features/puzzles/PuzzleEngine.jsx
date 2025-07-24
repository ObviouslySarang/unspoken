import React, { useState } from "react";

const puzzleTypes = [
  "Jigsaw of Emotions",
  "Word Maze",
  "Role-Play Dialogues",
  "Letter Builder",
  "Barrier Breaker"
];

function JigsawOfEmotions() {
  const emotions = ["Anger", "Sadness", "Joy", "Fear", "Surprise"];
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <h3>Pick emotions you feel:</h3>
      {emotions.map(e => (
        <button
          key={e}
          style={{ margin: 4, background: selected.includes(e) ? '#fadadd' : '#eee' }}
          onClick={() => setSelected(s => s.includes(e) ? s.filter(x => x !== e) : [...s, e])}
        >
          {e}
        </button>
      ))}
      <div style={{ marginTop: 10 }}>
        <strong>Selected:</strong> {selected.join(", ") || "None"}
      </div>
    </div>
  );
}

function WordMaze() {
  const words = ["I", "feel", "because", "it", "matters", "to", "me"];
  const [sentence, setSentence] = useState([]);
  return (
    <div>
      <h3>Build a sentence:</h3>
      {words.map((w, i) => (
        <button
          key={i}
          style={{ margin: 4, background: sentence.includes(w) ? '#fadadd' : '#eee' }}
          onClick={() => setSentence(s => s.includes(w) ? s.filter(x => x !== w) : [...s, w])}
        >
          {w}
        </button>
      ))}
      <div style={{ marginTop: 10 }}>
        <strong>Your sentence:</strong> {sentence.join(" ") || "(empty)"}
      </div>
    </div>
  );
}

function RolePlayDialogues() {
  return (
    <div>
      <h3>Role-Play Dialogues</h3>
      <p>Choose your response:</p>
      <button style={{ margin: 4 }}>"I understand your point."</button>
      <button style={{ margin: 4 }}>"Can we talk about this later?"</button>
      <button style={{ margin: 4 }}>"I feel hurt by what happened."</button>
    </div>
  );
}

function LetterBuilder() {
  const [text, setText] = useState("");
  return (
    <div>
      <h3>Letter Builder</h3>
      <textarea
        placeholder="Write your message here..."
        value={text}
        onChange={e => setText(e.target.value)}
        rows={4}
        style={{ width: '100%', marginBottom: 8 }}
      />
      <div><strong>Preview:</strong> {text || "(empty)"}</div>
    </div>
  );
}

function BarrierBreaker() {
  const [solved, setSolved] = useState(false);
  return (
    <div>
      <h3>Barrier Breaker</h3>
      <button onClick={() => setSolved(true)} disabled={solved}>
        {solved ? "Barrier Broken!" : "Break the Barrier"}
      </button>
    </div>
  );
}

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
        {selected === "Jigsaw of Emotions" && <JigsawOfEmotions />}
        {selected === "Word Maze" && <WordMaze />}
        {selected === "Role-Play Dialogues" && <RolePlayDialogues />}
        {selected === "Letter Builder" && <LetterBuilder />}
        {selected === "Barrier Breaker" && <BarrierBreaker />}
      </div>
    </div>
  );
};

export default PuzzleEngine;
