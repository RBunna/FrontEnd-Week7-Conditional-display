import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header";
import Score from "./components/Scores";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data";

function App() {
  return (
    <>
      <Header logo={pnLogo} batch={"SE batch 2025"}/>

      <main className="scores-container">
        <Score courseName={"JAVA"} courseResults={JAVA_RESULTS}/>
        <Score courseName={"PYTHON"} courseResults={PYTHON_RESULTS}/>
        <Score courseName={"HTML"} courseResults={HTML_RESULTS}/>
        <Score courseName={"ENGLISH"} courseResults={ENGLISH_RESULTS}/>
      </main>
    </>
  );
}

export default App;
