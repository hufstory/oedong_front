import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import EnrollClub from "./pages/EnrollClub/EnrollClub";
import EnrollSuccess from "./pages/EnrollClub/EnrollSuccess";
import SearchClub from "./pages/SearchClub/SearchClub";
import ShowMore from "./pages/MainPage/ShowMore/ShowMore";
import AInfoMain from "./pages/ClubInfo/Admin/AInfoMain";
import ScrollTop from "./components/ScrollTop";
import EditClubInfo from "./pages/ClubInfo/Admin/EditClubInfo/EditClubInfo";
import EditSuccess from "./pages/ClubInfo/Admin/EditClubInfo/EditSuccess";
import MyPage from "./pages/MyPage/MyPage";
import MakeJoinForm from "./pages/ClubInfo/Admin/MakeJoinForm/MakeJoinForm";
import MakeSuccess from "./pages/ClubInfo/Admin/MakeJoinForm/MakeSuccess";

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
        <Route path="/clubinfo/admin/edit" element={<EditClubInfo />} />
        <Route path="/clubinfo/admin/edit/success" element={<EditSuccess />} />
        <Route path="/clubinfo/admin/form" element={<MakeJoinForm />} />
        <Route
          path="/clubinfo/admin/form/createsuccess"
          element={<MakeSuccess />}
        />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
