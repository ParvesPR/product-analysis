import { Route, Routes } from 'react-router-dom';
import './App.css';
import Charts from './components/Charts/Charts';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Charts></Charts>}></Route>
      </Routes>
    </div>
  );
}

export default App;
