import Header from "../../../components/Header";
import clubprofile from "../../../assets/clubprofile.png";
import description from "../../../assets/description.png";

const AInfoMain = () => {
  return (
    <div className="container flex flex-col items-center justify-center max-w-full mx-auto">
      <Header />
      <div className="bg-main container max-w-[395px] h-[600px] mx-auto flex flex-col items-center justify-start">
        <div className="bg-main relative mt-[25px] max-w-[395px] mx-auto flex flex-row justify-center items-start">
          <img
            src={clubprofile}
            className="w-[113px] mr-[13px]"
            alt="profile"
          />
          <img src={description} className="w-[200px]" alt="description" />
          <p className="top-[10px] left-[167px] font-main text-[15px] text-white absolute">
            동아리 소개
          </p>
          <p className="top-[40px] left-[167px] font-sans text-[11px] w-[150px] h-[180px] overflow-auto text-white absolute">
            동아리 소개 텍스트 동아리 소개 텍스트 동아리 소개 텍스트 동아리 소개
            텍스트 동아리 소개 텍스트 동아리 소개 텍스트 동아리 소개 텍스트
            동아리 소개 텍스트 동아리 소개 텍스트 동아리 소개 텍스트 동아리 소개
            텍스트 동아리 소개 텍스트 동아리 소개 텍스트 동아리 소개 텍스트
            동아리 소개 텍스트 동아리 소개 텍스트 동아리 소개 텍스트 동아리 소개
            텍스트 동아리 소개 텍스트 동아리 소개 텍스트 동아리 소개 텍스트
            동아리 소개 텍스트
          </p>
        </div>
        <div className="container max-w-[395px] flex flex-col justify-center items-end bg-main-black">
          <button className="w-[186px] h-[31px] mt-[15px] mr-[34px] bg-green text-white text-[13px] font-main">
            동아리 정보 수정하기
          </button>
          <button className="w-[186px] h-[31px] mt-[10px] mr-[34px] bg-green text-white text-[13px] font-main">
            동아리 지원 폼 만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AInfoMain;
