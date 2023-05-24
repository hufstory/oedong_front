import React from "react";
import smallsublogo from "../../assets/smallsublogo.png";

const FormHeader = () => {
  return (
    <div className="container max-w-[395px] w-screen h-[50px] mx-auto flex flex-row items-center justify-center bg-main-black">
      <img className="h-[60px]" src={smallsublogo} alt="logo" />
      <p className="text-white text-[32px] font-main">동아리 개설</p>
    </div>
  );
};

export default FormHeader;
