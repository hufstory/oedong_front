import Header from "../../components/Header";
import intro from "../../assets/intro.png";
import ClubList from "./ClubList";
import Footer from "../../components/Footer";
import { useState } from "react";

const MainPage = () => {
  const [showImage, setShowImage] = useState(false);
  const showImageHandler = () => {
    setShowImage(!showImage);
  };

  return (
    <div className="container flex flex-col items-center justify-center max-w-full mx-auto">
      <Header handler={showImageHandler} showImage={showImage} />
      {showImage ? (
        <img className="max-w-[390px] bg-green" src={intro} alt="intro" />
      ) : null}

      <ClubList />
      <Footer />
    </div>
  );
};

export default MainPage;
