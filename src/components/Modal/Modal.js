import ModalPortal from "./ModalPortal";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Modal = ({ onOpenModal, text }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalPortal>
      <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-main-black bg-opacity-70">
        <div className="container w-[320px] h-[200px] flex flex-col items-center justify-center bg-main-black border-green border-2">
          <div className="items-start">
            <p className="font-main text-[18px] mb-[10px] text-white">{text}</p>
            <Link to="/enroll/success">
              <button
                onClick={onOpenModal}
                className="border-none hover:text-green text-white font-main text-[18px] block mb-[10px]"
              >
                ▶︎ 네
              </button>
            </Link>
            <button
              onClick={onOpenModal}
              className="border-none hover:text-green text-white font-main text-[18px] block"
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
