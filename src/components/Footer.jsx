import footerLogo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <div className="container max-w-[395px] w-screen h-[187px] mx-auto flex flex-col items-start justify-center bg-footer-gray">
      <img className="w-[140px] ml-[36px]" src={footerLogo} alt="footer" />
      <p className="font-sans text-text-gray ml-[36px] mt-[9px] text-[12px]">
        ⓒ 2023 HUFSTORY Project
      </p>
      <p className="text-text-gray ml-[36px] text-[12px]">
        경기도 용인시 처인구 모현읍 외대로 81,
      </p>
      <p className="text-text-gray ml-[36px] text-[12px]">
        한국외국어대학교 글로벌캠퍼스 학생회관 313호
      </p>
      <p className="text-text-gray ml-[36px] mt-[5px] text-[10px]">
        PM 윤국희, Designer 김연주
      </p>
      <p className="text-text-gray ml-[36px] text-[10px]">
        Front-End 김광현 정승준, Back-End 강대현
      </p>
    </div>
  );
};

export default Footer;
