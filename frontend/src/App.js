import {Routes, Route} from 'react-router-dom';
import './App.css';
import {HomePage, Lobby, SetGame} from './Pages';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/waitingroom" element={<Lobby />} />
        <Route exact path="/game" element={<SetGame />} />
      </Routes>
    </div>
  );
}

export default App;
