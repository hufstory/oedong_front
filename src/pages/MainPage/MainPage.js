import Header from "../../components/Header";
import intro from "../../assets/intro.png";
import ClubList from "./ClubList";
import Footer from "../../components/Footer";

const MainPage = () => {
  return (
    <div className="container min-w-[390px] mx-auto flex flex-col items-center justify-center">
      <Header />
      <div>
        <img className="w-[390px]" src={intro} alt="intro" />
      </div>
      <ClubList />
      <Footer />
    </div>
  );
};

export default MainPage;
