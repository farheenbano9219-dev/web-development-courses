
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Jobs from "./Jobs";
import JobDetails from "./JobDetails";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;