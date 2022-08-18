import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import { HomePage, AboutusPage ,Lobby, SetGame, QuizPage, LeaderBoard } from "./Pages";
=======
import { HomePage, Lobby, SetGame, QuizPage, LeaderBoard, AboutusPage } from "./Pages";
>>>>>>> 1eb09a6c78a64cd41a9d9dd2ad58abffd1d2690b

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/aboutUsPage" element={<AboutusPage />} />
        <Route exact path="/waitingroom" element={<Lobby />} />
        <Route exact path="/game" element={<SetGame />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/leaderboard" element={<LeaderBoard/>}/>
      </Routes>
    </div>
  );
};

export default App;
