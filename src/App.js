import { Route, Routes } from 'react-router-dom';
import './App.css';
import Charts from './components/Charts/Charts';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog'
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/dashboard" element={<Charts></Charts>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
