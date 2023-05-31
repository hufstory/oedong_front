import React from "react";
import ModalPortal from "./ModalPortal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ onOpenModal, text, link }) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const onClick = () => {
    onOpenModal();
    navigate(link);
  };

  return (
    <ModalPortal>
      <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-main-black bg-opacity-70">
        <div className="container w-[320px] h-[200px] flex flex-col items-center justify-center bg-main-black border-green border-2">
          <div className="items-start">
            <p className="font-main text-[18px] mb-[10px] text-white">{text}</p>
            <button
              onClick={onClick}
              className="border-none  hover:text-green text-white font-main text-[18px] block mb-[10px]"
            >
              ▶︎ 네
            </button>

            <button
              onClick={onOpenModal}
              className="border-none active:text-green hover:text-green text-white font-main text-[18px] block"
            >
              ▶︎ 아니오
            </button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};

export default Modal;
