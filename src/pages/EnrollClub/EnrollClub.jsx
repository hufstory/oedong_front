import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormHeader from "./FormHeader";
import EnrollForm from "./EnrollForm";

const EnrollClub = () => {
  return (
    <div className="container max-w-[395px] w-screen mx-auto flex flex-col items-center justify-center">
      <Header />
      <FormHeader />
      <EnrollForm />
      <Footer />
    </div>
  );
};

export default EnrollClub;
