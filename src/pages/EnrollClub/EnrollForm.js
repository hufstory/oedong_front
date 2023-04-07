import setimage from "../../assets/setimage.png";
import TextInput from "../../components/TextInput";
import CheckBox from "../../components/CheckBox";

const EnrollForm = () => {
  return (
    <div className="container w-[390px] mx-auto flex flex-col items-center justify-start bg-main-black">
      <img
        className="w-[253px] mt-[40px] mb-[45px]"
        src={setimage}
        alt="setimage"
      />
      <TextInput label="동아리 이름" />
      <CheckBox
        label="캠퍼스 구분"
        item={["서울캠퍼스", "글로벌캠퍼스", "상관없음"]}
      />
      <CheckBox
        label="동아리 구분"
        item={[
          "일반동아리",
          "중앙동아리",
          "연합동아리",
          "과 동아리",
          "학생 자치기구",
          "기타",
        ]}
      />
      <CheckBox
        label="동아리 분야"
        item={[
          "학술응용",
          "창작예술",
          "공연예술",
          "개인스포츠",
          "레저",
          "팀스포츠",
          "기타",
        ]}
      />
      <TextInput label="동아리방 위치" />
      <TextInput label="회장 이름" />
      <TextInput label="회장 학번 / 학과" />
      <TextInput label="회장 전화번호" />
      <TextInput label="동아리 간략한 소개" />
    </div>
  );
};

export default EnrollForm;
