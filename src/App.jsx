import ScenarioLibrary from './features/scenarioLibrary/ScenarioLibrary';
import CustomBuilder from './features/customBuilder/CustomBuilder';
import PuzzleEngine from './features/puzzles/PuzzleEngine';
import AIFeedback from './features/aiFeedback/AIFeedback';
import Community from './features/community/Community';
import PrivacyCenter from './features/privacy/PrivacyCenter';

function App() {
  return (
    <div>
      <h1>Unspoken Puzzle Game App</h1>
      <ScenarioLibrary />
      <CustomBuilder />
      <PuzzleEngine />
      <AIFeedback />
      <Community />
      <PrivacyCenter />
    </div>
  );
}

export default App;
