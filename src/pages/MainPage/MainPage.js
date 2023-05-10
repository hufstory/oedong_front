import Header from "../../components/Header";
import intro from "../../assets/intro.png";
import ClubList from "./ClubList";
import Footer from "../../components/Footer";

const MainPage = () => {
  return (
    <div className="container max-w-full mx-auto flex flex-col items-center justify-center">
      <Header />
      <img className="max-w-[395px] bg-green" src={intro} alt="intro" />
      <ClubList />
      <Footer />
    </div>
  );
};

export default MainPage;
