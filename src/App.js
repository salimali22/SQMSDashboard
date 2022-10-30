import './App.css';
import { Header} from './Pages/Header';
import { Body } from './Pages/Body';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
    <div className='container-fluid fluid m-0 vh-100 overflow-hidden'   >
      <Router>
            <Header />  

            <Body />
      </Router>

      
    </div>

    </>
  );
}

export default App;
