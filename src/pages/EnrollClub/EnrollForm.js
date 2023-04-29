import setimage from "../../assets/setimage.png";
import TextInput from "../../components/TextInput";
import CheckBox from "../../components/CheckBox";
import Modal from "../../components/Modal";
import { useState } from "react";

const EnrollForm = () => {
  const [openModal, setOpenModal] = useState(false);
  const onModalAlert = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="container w-[390px] mx-auto flex flex-col items-center justify-start bg-main-black">
      {openModal && (
        <Modal onOpenModal={onModalAlert} text="동아리를 개설하시겠습니까?" />
      )}
      <img
        className="w-[253px] mt-[40px] mb-[45px]"
        src={setimage}
        alt="setimage"
      />
      <TextInput id="clubname" label="동아리 이름" maxLength="25" />
      <CheckBox
        label="캠퍼스 구분"
        item={["서울캠퍼스", "글로벌캠퍼스", "상관없음"]}
        showAnything={false}
      />
      <CheckBox
        label="동아리 구분"
        item={[
          "일반동아리",
          "중앙동아리",
          "연합동아리",
          "과 동아리",
          "학생 자치기구",
        ]}
        showAnything={true}
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
        ]}
        showAnything={true}
      />
      <TextInput id="location" label="동아리방 위치" maxLength="25" />
      <TextInput id="mastername" label="회장 이름" maxLength="25" />
      <TextInput id="masterinfo" label="회장 학번 / 학과" maxLength="25" />
      <TextInput id="phone" label="회장 전화번호" maxLength="25" />
      <TextInput id="intro" label="동아리 간략한 소개" maxLength="500" />

      <button
        onClick={onModalAlert}
        className="w-[295px] h-[50px] mb-[20px] bg-green font-main text-white"
      >
        동아리 등록
      </button>
    </div>
  );
};

export default EnrollForm;
