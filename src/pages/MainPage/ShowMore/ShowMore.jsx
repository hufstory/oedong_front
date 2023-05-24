import Header from "../../../components/Header";
import CheckBox from "../../../components/CheckBox";
import Footer from "../../../components/Footer";
import SMListItem from "./SMListItem";
import { FaFilter } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";
import { useState } from "react";

const ShowMore = () => {
  const [showFilter, setShowFilter] = useState(false);
  const showFilterHandler = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="container max-w-[395px] w-full mx-auto flex flex-col items-center justify-center">
      <Header />
      <div className="w-full bg-main-black">
        <p className="font-main text-[20px] text-white mt-[25px] ml-[34px] mb-[23px]">
          동아리 목록
        </p>
      </div>
      <div
        className={`w-full h-full ${
          showFilter ? "pb-[0px]" : "pb-[10px]"
        } bg-main-black flex flex-row justify-start items-center`}
      >
        <p className="text-green ml-[34px] inline">
          <FaFilter />
        </p>
        <p className="ml-[8px] font-main text-[16px] text-white inline">필터</p>
        <p
          className={`text-green ml-[10px] hover:cursor-pointer inline ${
            showFilter ? "rotate-180" : ""
          }`}
        >
          <IoTriangleSharp onClick={showFilterHandler} />
        </p>
      </div>
      {showFilter ? (
        <div className="w-full h-[520px] flex flex-col justify-center items-center bg-main-black">
          <div className="w-[335px] border-green border-2">
            <CheckBox
              label=""
              item={["전체", "서울캠퍼스", "글로벌캠퍼스"]}
              showAnything={false}
              border={false}
            />
            <div className="ml-[20px] mr-[20px] mb-[10px]">
              <hr className=" border-solid border-[0.5px] border-green" />
            </div>
            <CheckBox
              label=""
              item={[
                "전체",
                "중앙동아리",
                "일반동아리",
                "과 동아리",
                "연합동아리",
                "학생 자치기구",
                "중앙동아리",
              ]}
              showAnything={false}
              border={false}
            />
            <div className="ml-[20px] mr-[20px] mb-[20px]">
              <hr className=" border-solid border-[0.5px] border-green" />
            </div>
            <CheckBox
              label=""
              item={[
                "전체",
                "창작예술",
                "학술응용",
                "봉사",
                "공연예술",
                "레저",
                "개인스포츠",
                "팀스포츠",
              ]}
              showAnything={false}
              border={false}
            />
          </div>
        </div>
      ) : null}

      <SMListItem />
      <SMListItem />
      <SMListItem />
      <SMListItem />
      <SMListItem />
      <SMListItem />
      <SMListItem />
      <SMListItem />
      <Footer />
    </div>
  );
};

export default ShowMore;
