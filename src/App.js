
import './App.css';
import { Routes, Route } from "react-router-dom"
import StarshipList from "../src/Pages/StarshipList/StarshipList"
import StarshipDetails from "./Pages/StarshipDetails/StarshipDetails"
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<StarshipList/>}/>
      <Route path='/starships' element={<StarshipDetails/>}/>
    </Routes>
    </>
  );
}

export default App;
