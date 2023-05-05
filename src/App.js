
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes} from "react-router-dom"
import Cars from './routes/Cars';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/cars" element = {<Cars/>} />
      </Routes>
      <Navbar/>
    </div>
  );
}

export default App;
