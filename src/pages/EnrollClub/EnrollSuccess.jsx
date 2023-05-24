import Header from "../../components/Header";
import Footer from "../../components/Footer";
import success from "../../assets/enroll-success.png";
import { Link } from "react-router-dom";

const EnrollSuccess = () => {
  return (
    <div className="container max-w-[395px] w-screen mx-auto flex flex-col items-center justify-center">
      <Header />
      <div className="relative flex flex-col w-full items-center justify-center">
        <img className="w-[395px] bg-main-black" src={success} alt="success" />
        <Link to="/clubinfo/admin">
          <button className="absolute top-[470px] left-[90px] border-none hover:text-green text-white font-main text-[18px] mb-[10px]">
            ▶︎ 동아리 상세페이지 가기
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default EnrollSuccess;
