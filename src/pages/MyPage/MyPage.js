import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Nav from "./Nav";

const MyPage = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto flex items-end max-w-[395px] my-[42px]">
                <img className="mx-[37px] w-[129px] h-[107px]" src={require("../../assets/MyPage/MyPage1.png")}></img>
                <img className="w-[90px] h-[65px]" src={require("../../assets/MyPage/MyPage2.png")}></img>
            </div>
            <Nav />
            <Footer />
        </div>
    );
};

export default MyPage;
