import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="container w-[329px] h-[42px] mx-auto flex flex-row items-center justify-start border-green border-2 bg-main-black">
      <span>
        <input
          type="text"
          className="ml-[16px] w-[240px] placeholder:text-slate-400 text-[15px] text-white focus: outline-none bg-main-black"
          placeholder="동아리를 검색해보세요!"
        />
      </span>
      <Link to="/search">
        <button>
          <AiOutlineSearch size="33" color="#22C55E" className="ml-[30px]" />
        </button>
      </Link>
    </div>
  );
};

export default Search;
