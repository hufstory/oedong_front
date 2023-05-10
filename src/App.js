import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import EnrollClub from "./pages/EnrollClub/EnrollClub";
import EnrollSuccess from "./pages/EnrollClub/EnrollSuccess";
import SearchClub from "./pages/SearchClub/SearchClub";
import ShowMore from "./pages/MainPage/ShowMore/ShowMore";
import AInfoMain from "./pages/ClubInfo/Admin/AInfoMain";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/enroll" element={<EnrollClub />} />
        <Route path="/enroll/success" element={<EnrollSuccess />} />
        <Route path="/search" element={<SearchClub />} />
        <Route path="/showmore" element={<ShowMore />} />
        <Route path="/clubinfo/admin" element={<AInfoMain />} />
      </Routes>
    </Router>
  );
}

export default App;
