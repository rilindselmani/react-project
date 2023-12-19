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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
=======
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
>>>>>>> 54673d99bcff9bea2f2775c9ba74cadce24dd99e
        </Routes>
      </Router>
    </>
  );
}

export default App;
