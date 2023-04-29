import Header from "../../components/Header";
import Footer from "../../components/Footer";
import success from "../../assets/enroll-success.png";

const EnrollSuccess = () => {
  return (
    <div className="container min-w-[390px] mx-auto flex flex-col items-center justify-center">
      <Header />
      <div className="flex flex-col items-center justify-center">
        <img
          className="relative w-[390px] bg-main-black"
          src={success}
          alt="success"
        />
        <button className="absolute top-[535px] border-none hover:text-green text-white font-main text-[18px] mb-[10px]">
          ▶︎ 동아리 상세페이지 가기
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default EnrollSuccess;
