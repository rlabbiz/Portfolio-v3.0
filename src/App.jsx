import './App.css';
import { Header } from './header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Header />} />
      </Routes>
    </Router>
  );
}


export default App;
