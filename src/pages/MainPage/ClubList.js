import Search from "../../components/Search";
import ListLabel from "./ListLabel";
import List from "./List";

const ClubList = () => {
  return (
    <div className="container max-w-[395px] w-screen h-[514px] mx-auto flex flex-col items-center justify-center bg-main-black">
      <Search />
      <ListLabel />
      <List />
    </div>
  );
};

export default ClubList;
