import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

import Home from "../src/Components/Home/Home.jsx";
import Projects from "../src/Components/Projects/Projects.jsx";
import Contacts from "./Components/Contacts/Contacts";
import Skills from "./Components/Skills/Skills"




import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './assets/styles/main.css';

function App() {

  return (
    <div className='App'>
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contents" element={<Contacts />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
