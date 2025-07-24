import React from "react";
import { scenarios } from "./scenarios";

const ScenarioLibrary = () => (
  <div>
    <h2>Scenario Library</h2>
    <p>Select a scenario to practice difficult conversations.</p>
    <ul>
      {scenarios.map(s => (
        <li key={s.id}>
          <strong>{s.title}</strong>: {s.description}
        </li>
      ))}
    </ul>
  </div>
);

export default ScenarioLibrary;
