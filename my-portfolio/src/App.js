import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./component/Home";
import Projects from "./component/Projects";

function App() {
  return (<>
  <Router>

    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/Projects" element={<Projects/>}/>

    </Routes>
  </Router>
 
   
 </>);
}

export default App;
