import Header from "../../components/Header";
import intro from "../../assets/intro.png";
import ClubList from "./ClubList";
import Footer from "../../components/Footer";

const MainPage = () => {
  return (
    <div className="container min-h-screen max-w-[395px] w-full mx-auto flex flex-col items-center justify-center">
      <Header />
      <div>
        <img className="" src={intro} alt="intro" />
      </div>
      <ClubList />
      <Footer />
    </div>
  );
};

export default MainPage;
