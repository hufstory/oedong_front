import clubimg from "../../../assets/clubimg.png";

const SMListItem = (props) => {
  return (
    <div>
      <div className="w-[395px] h-[100px] flex flex-row items-center bg-main-black">
        <img src={clubimg} alt="clubimg" className="w-[79px] ml-[30px]" />
        <div className="ml-[20px] flex flex-col items-start justify-center">
          <p className="font-main text-[20px] text-white">동아리 이름</p>
          <p className="w-[120px] flex-nowrap text-ellipsis line-clamp-2 font-sans text-[10px] text-white">
            동아리 설명을 적을 수 있습니다. 최대 두줄로 적을 수 있으며 이건
            notosans10pt입니다.
          </p>
        </div>
      </div>
      <div className="ml-[20px] mr-[20px] mb-[20px]">
        <hr className="border-solid border-[0.5px] border-green" />
      </div>
    </div>
  );
};

export default SMListItem;
