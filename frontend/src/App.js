import {Routes, Route} from 'react-router-dom';
import './App.css';
import {HomePage} from './Pages';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
