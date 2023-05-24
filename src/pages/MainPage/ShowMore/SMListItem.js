import React from "react";
import clubimg from "../../../assets/clubimg.png";

const SMListItem = (props) => {
  return (
    <div>
      <div className="w-[395px] h-[100px] flex flex-row items-center bg-main-black">
        <img src={clubimg} alt="clubimg" className="w-[79px] ml-[32px]" />
        <div className="ml-[20px] flex flex-col items-start justify-center">
          <p className="font-main text-[20px] text-white">동아리 이름</p>
          <p className="w-[140px] flex-nowrap text-ellipsis line-clamp-2 font-sans text-[10px] text-white">
            동아리 설명을 적을 수 있습니다. 최대 두줄로 적을 수 있으며 이건
            notosans10pt입니다.
          </p>
        </div>
        <button className="w-[62px] h-[23px] ml-[32px] font-main text-white text-[14px] bg-green">
          더보기
        </button>
      </div>
      <div className="w-[395px] pt-[20px] h-[40px] bg-main-black">
        <hr className="ml-[28px] mr-[28px] border-solid border-[0.5px] border-green" />
      </div>
    </div>
  );
};

export default SMListItem;
