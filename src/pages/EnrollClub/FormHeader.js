import logo from "../../assets/logo.png";

const FormHeader = () => {
  return (
    <div className="container max-w-[395px] w-screen h-[50px] mx-auto flex flex-row items-center justify-center bg-main-black">
      <img
        className="object-cover h-10 inline mr-[15px]"
        src={logo}
        alt="logo"
      />
      <p className="text-white text-[32px] font-main">동아리 생성 폼</p>
    </div>
  );
};

export default FormHeader;
