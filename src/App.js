import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import EnrollClub from "./pages/EnrollClub/EnrollClub";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/enroll" element={<EnrollClub />} />
      </Routes>
    </Router>
  );
}

export default App;
