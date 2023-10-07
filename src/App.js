import Home from ". /components/Home";
import About from "./components/About";
import Qualification from "./components/Qualification";
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="qualification" element={<Qualification/>}/>
      </Routes>  
  );
}
export default App;