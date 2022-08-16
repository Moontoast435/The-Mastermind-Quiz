import {Routes, Route} from 'react-router-dom';
import './App.css';
import {HomePage, LobbyRoomPage} from './Pages';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/waitingroom" element={<LobbyRoomPage />} />
      </Routes>
    </div>
  );
}

export default App;
