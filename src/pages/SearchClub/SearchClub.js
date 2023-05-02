import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import CheckBox from "../../components/CheckBox";
import { FaFilter } from "react-icons/fa";

const SearchClub = () => {
  return (
    <div className="container min-h-screen max-w-[395px] w-full mx-auto flex flex-col items-center justify-center">
      <Header />
      <div className="w-full bg-main-black">
        <p className="font-main text-[20px] text-white mt-[25px] ml-[34px] mb-[23px]">
          검색
        </p>
      </div>
      <div className="w-full h-[65px] bg-main-black">
        <Search />
      </div>
      <div className="w-full h-full pb-[10px] bg-main-black flex flex-row justify-start items-center">
        <p className="text-green ml-[34px] inline">
          <FaFilter />
        </p>
        <p className="ml-[8px] font-main text-[16px] text-white inline">필터</p>
      </div>
      <div className="w-full h-full flex justify-center items-center bg-main-black">
        <div className="w-[335px] border-green border-2">
          <CheckBox
            label=""
            item={["전체", "서울캠퍼스", "글로벌캠퍼스"]}
            showAnything={false}
            border={false}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchClub;
