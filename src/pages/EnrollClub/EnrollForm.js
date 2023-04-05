import setimage from "../../assets/setimage.png";
import TextInput from "../../components/TextInput";

const EnrollForm = () => {
  return (
    <div className="container w-[390px] min-h-[100vh] mx-auto flex flex-col items-center justify-start bg-main-black">
      <img
        className="w-[253px] mt-[40px] mb-[45px]"
        src={setimage}
        alt="setimage"
      />

      <TextInput label="동아리 이름" />
    </div>
  );
};

export default EnrollForm;
