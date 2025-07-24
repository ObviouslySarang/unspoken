import { useState } from "react";
import ScenarioLibrary from "./features/scenarioLibrary/ScenarioLibrary";
import CustomBuilder from "./features/customBuilder/CustomBuilder";
import PuzzleEngine from "./features/puzzles/PuzzleEngine";
import AIFeedback from "./features/aiFeedback/AIFeedback";
import Community from "./features/community/Community";
import PrivacyCenter from "./features/privacy/PrivacyCenter";

function App() {
  const [aiInput, setAIInput] = useState("");

  return (
    <div>
      <h1>Unspoken Puzzle Game App</h1>
      <ScenarioLibrary onSelectScenario={setAIInput} />
      <CustomBuilder onCreateScenario={setAIInput} />
      <PuzzleEngine onPuzzleComplete={setAIInput} />
      <AIFeedback initialInput={aiInput} />
      <Community />
      <PrivacyCenter />
    </div>
  );
}

export default App;
