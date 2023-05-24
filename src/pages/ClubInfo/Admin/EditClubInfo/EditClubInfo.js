import React from "react";
import Footer from "../../../../components/Footer";
import smallsublogo from "../../../../assets/smallsublogo.png";
import EditClubForm from "./EditClubForm";
import Header from "../../../../components/Header";

const EditClubInfo = () => {
  return (
    <div className="container max-w-[395px] w-screen mx-auto flex flex-col items-center justify-center">
      <Header />
      <div className="container max-w-[395px] w-screen h-[50px] mx-auto flex flex-row items-center justify-center bg-main-black">
        <img className="h-[60px]" src={smallsublogo} alt="logo" />
        <p className="text-white text-[32px] font-main">동아리 정보</p>
      </div>
      <EditClubForm />
      <Footer />
    </div>
  );
};

export default EditClubInfo;
