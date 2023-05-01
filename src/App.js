import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import EnrollClub from "./pages/EnrollClub/EnrollClub";
import EnrollSuccess from "./pages/EnrollClub/EnrollSuccess";
import SearchClub from "./pages/SearchClub/SearchClub";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/enroll" element={<EnrollClub />} />
        <Route path="/enroll/success" element={<EnrollSuccess />} />
        <Route path="/search" element={<SearchClub />} />
      </Routes>
    </Router>
  );
}

export default App;
