import React, { useState } from "react";

const CustomBuilder = ({ onCreateScenario }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const scenarioText = `${title}: ${description}`;
    if (onCreateScenario) onCreateScenario(scenarioText);
    alert(`Custom scenario created: ${scenarioText}`);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <h2>Custom Scenario Builder</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Scenario Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Scenario Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <button type="submit">Create Scenario</button>
      </form>
      <section>
        <h3>How to Use</h3>
        <p>
          Describe a situation you want to practice. Your custom scenario can be
          sent to AI Feedback or used in a puzzle.
        </p>
      </section>
    </div>
  );
};

export default CustomBuilder;
