import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { IoTriangleSharp } from "react-icons/io5";

const Header = (props) => {
  const location = useLocation();

  return (
    <div className="container mx-auto flex flex-row items-end justify-center max-w-[700px] h-[70px] bg-main-black">
      <Link to="/">
        <img
          className="object-cover h-[52px] inline ml-[10px]"
          src={logo}
          alt="logo"
        />
      </Link>
      <div className="flex flex-col items-center justify-start bg-main-black">
        <div className="flex flex-row items-end justify-start bg-main-black">
          {location.pathname === "/" ? (
            <p
              className={`text-magenta ml-[10px] hover:cursor-pointer inline ${
                props.showImage ? "rotate-180" : ""
              }`}
            >
              <IoTriangleSharp onClick={props.handler} />
            </p>
          ) : null}

          <Link to="/enroll" className="text-white pl-[50px] text-[12px] ">
            동아리 등록
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
      </div>
    </div>
  );
};

export default Header;
