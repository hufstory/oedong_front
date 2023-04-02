import Search from "../../components/Search";
import ListLabel from "./ListLabel";
import List from "./List";

const ClubList = () => {
  return (
    <div className="container w-[390px] h-[514px] mx-auto flex flex-col items-center justify-center bg-main-black">
      <Search />
      <ListLabel />
      <List />
    </div>
  );
};

export default ClubList;
