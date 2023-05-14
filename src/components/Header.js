import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { IoTriangleSharp } from "react-icons/io5";

const Header = (props) => {
  const location = useLocation();

  return (
    <div className="container mx-auto flex flex-row items-center justify-center max-w-[700px] h-20 bg-main-black">
      <Link to="/">
        <img
          className="object-cover h-10 inline ml-[10px]"
          src={logo}
          alt="logo"
        />
      </Link>
      {location.pathname === "/" ? (
        <p
          className={`text-green ml-[10px] hover:cursor-pointer inline ${
            props.showImage ? "rotate-180" : ""
          }`}
        >
          <IoTriangleSharp onClick={props.handler} />
        </p>
      ) : null}

      <Link to="/enroll" className="text-white pl-[50px] text-[12px] ">
        <span>동아리 등록</span>
      </Link>
      <Link to="/enroll" className="text-white pl-[15px] text-[12px]">
        내 동아리
      </Link>
      <Link to="/enroll" className="text-white pl-[15px] text-[12px]">
        로그아웃
      </Link>
      <img
        className="object-cover h-10 inline pl-[20px]"
        src={profile}
        alt="profile"
      />
    </div>
  );
};

export default Header;
