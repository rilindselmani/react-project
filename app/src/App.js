import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import SignIn from "./Login/SignIn";
import SignUp from "./Register/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
