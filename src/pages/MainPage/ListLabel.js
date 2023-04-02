import { AiFillPlayCircle } from "react-icons/ai";

const List = () => {
  return (
    <div>
      <div className="flex justify-between mt-[31px]">
        <p className="font-main text-white text-[24px]">동아리 목록</p>
        <button className="ml-[146px] text-[15px] text-white">더보기</button>
        <button>
          <AiFillPlayCircle className="ml-[2px]" size="13" color="#22C55E" />
        </button>
      </div>
    </div>
  );
};

export default List;
