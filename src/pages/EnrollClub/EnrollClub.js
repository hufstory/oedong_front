import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormHeader from "./FormHeader";

const EnrollClub = () => {
  return (
    <div className="container min-w-[390px] mx-auto flex flex-col items-center justify-center">
      <Header />
      <FormHeader />
      <Footer />
    </div>
  );
};

export default EnrollClub;
