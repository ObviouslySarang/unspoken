import React, { useState } from "react";

const puzzleTypes = [
  "Jigsaw of Emotions",
  "Word Maze",
  "Role-Play Dialogues",
  "Letter Builder",
  "Barrier Breaker",
];

function JigsawOfEmotions({ onComplete }) {
  const emotions = ["Anger", "Sadness", "Joy", "Fear", "Surprise"];
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <h3>Pick emotions you feel:</h3>
      {emotions.map((e) => (
        <button
          key={e}
          style={{
            margin: 4,
            background: selected.includes(e) ? "#fadadd" : "#eee",
          }}
          onClick={() =>
            setSelected((s) =>
              s.includes(e) ? s.filter((x) => x !== e) : [...s, e]
            )
          }
        >
          {e}
        </button>
      ))}
      <div style={{ marginTop: 10 }}>
        <strong>Selected:</strong> {selected.join(", ") || "None"}
        <button
          style={{ marginLeft: 8 }}
          onClick={() =>
            onComplete &&
            onComplete(`Jigsaw emotions: ${selected.join(", ")}`)
          }
        >
          Send to AI Feedback
        </button>
      </div>
    </div>
  );
}

function WordMaze({ onComplete }) {
  const words = ["I", "feel", "because", "it", "matters", "to", "me"];
  const [sentence, setSentence] = useState([]);
  return (
    <div>
      <h3>Build a sentence:</h3>
      {words.map((w, i) => (
        <button
          key={i}
          style={{
            margin: 4,
            background: sentence.includes(w) ? "#fadadd" : "#eee",
          }}
          onClick={() =>
            setSentence((s) =>
              s.includes(w) ? s.filter((x) => x !== w) : [...s, w]
            )
          }
        >
          {w}
        </button>
      ))}
      <div style={{ marginTop: 10 }}>
        <strong>Your sentence:</strong> {sentence.join(" ") || "(empty)"}
        <button
          style={{ marginLeft: 8 }}
          onClick={() =>
            onComplete && onComplete(`Word maze: ${sentence.join(" ")}`)
          }
        >
          Send to AI Feedback
        </button>
      </div>
    </div>
  );
}

function RolePlayDialogues({ onComplete }) {
  return (
    <div>
      <h3>Role-Play Dialogues</h3>
      <p>Choose your response:</p>
      <button
        style={{ margin: 4 }}
        onClick={() =>
          onComplete && onComplete('Role-play: I understand your point.')
        }
      >
        "I understand your point."
      </button>
      <button
        style={{ margin: 4 }}
        onClick={() =>
          onComplete && onComplete('Role-play: Can we talk about this later?')
        }
      >
        "Can we talk about this later?"
      </button>
      <button
        style={{ margin: 4 }}
        onClick={() =>
          onComplete && onComplete('Role-play: I feel hurt by what happened.')
        }
      >
        "I feel hurt by what happened."
      </button>
    </div>
  );
}

function LetterBuilder({ onComplete }) {
  const [text, setText] = useState("");
  return (
    <div>
      <h3>Letter Builder</h3>
      <textarea
        placeholder="Write your message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        style={{ width: "100%", marginBottom: 8 }}
      />
      <div>
        <strong>Preview:</strong> {text || "(empty)"}
      </div>
      <button
        style={{ marginTop: 8 }}
        onClick={() => onComplete && onComplete(`Letter: ${text}`)}
      >
        Send to AI Feedback
      </button>
    </div>
  );
}

function BarrierBreaker({ onComplete }) {
  const [solved, setSolved] = useState(false);
  return (
    <div>
      <h3>Barrier Breaker</h3>
      <button
        onClick={() => {
          setSolved(true);
          onComplete && onComplete("Barrier broken!");
        }}
        disabled={solved}
      >
        {solved ? "Barrier Broken!" : "Break the Barrier"}
      </button>
    </div>
  );
}

const PuzzleEngine = ({ onPuzzleComplete }) => {
  const [selected, setSelected] = useState(puzzleTypes[0]);

  // Example completion handlers for each puzzle type
  function handleComplete(summary) {
    if (onPuzzleComplete) onPuzzleComplete(summary);
  }

  return (
    <div>
      <h2>Puzzle Engine</h2>
      <label htmlFor="puzzle-select">Choose a puzzle type:</label>
      <select
        id="puzzle-select"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {puzzleTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <div style={{ marginTop: 10 }}>
        <strong>Selected Puzzle:</strong> {selected}
        {selected === "Jigsaw of Emotions" && (
          <JigsawOfEmotions onComplete={handleComplete} />
        )}
        {selected === "Word Maze" && <WordMaze onComplete={handleComplete} />}
        {selected === "Role-Play Dialogues" && (
          <RolePlayDialogues onComplete={handleComplete} />
        )}
        {selected === "Letter Builder" && <LetterBuilder onComplete={handleComplete} />}
        {selected === "Barrier Breaker" && (
          <BarrierBreaker onComplete={handleComplete} />
        )}
      </div>
      <section>
        <h3>How to Use</h3>
        <p>
          Choose a puzzle type and interact with it to practice communication
          skills. You can send your solution to AI Feedback for analysis.
        </p>
      </section>
    </div>
  );
};

export default PuzzleEngine;
