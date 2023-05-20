import clubimagedefault from "../../assets/clubimagedefault.png";
import clubimagestar from "../../assets/clubimagestar.png";
import TextInput from "../../components/TextInput";
import CheckBox from "../../components/CheckBox";
import Modal from "../../components/Modal/Modal";
import { useState, useRef } from "react";

const EnrollForm = () => {
  /* modal control */
  const [openModal, setOpenModal] = useState(false);
  const onModalAlert = () => {
    setOpenModal(!openModal);
  };

  /* img upload */
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const onUploadImg = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <div className="container max-w-[395px] w-screen mx-auto flex flex-col items-center justify-center bg-main-black">
      {openModal && (
        <Modal onOpenModal={onModalAlert} text="동아리를 개설하시겠습니까?" />
      )}
      <div className="max-w-[395px] flex flex-row items-start justify-start">
        <label for="file">
          {/* 이미지 클릭하면 파일 업로드되게 */}
          <div className="ml-[70px] w-[232px] overflow-hidden rounded">
            <img
              className="w-[232px] mt-[40px] mb-[45px] object-cover"
              src={imgFile ? imgFile : clubimagedefault}
              alt="setimage"
            />
          </div>
        </label>
        <input
          type="file"
          name="file"
          id="file"
          className="hidden"
          accept="image/*"
          onChange={onUploadImg}
          ref={imgRef}
        />
        <img
          className="relative w-[70px] top-[10px] right-[40px]"
          src={clubimagestar}
          alt="star"
        />
        {/* 대표 사진 옆 별 장식 */}
      </div>

      <TextInput id="clubname" label="동아리 이름" maxLength="25" />

      <CheckBox
        label="캠퍼스 구분"
        item={["서울캠퍼스", "글로벌캠퍼스", "상관없음"]}
        showAnything={false}
        border={true}
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
        border={true}
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
        border={true}
      />
      <TextInput id="location" label="동아리방 위치" maxLength="25" />
      <TextInput id="mastername" label="회장 이름" maxLength="25" />
      <TextInput id="masterinfo" label="회장 학번 / 학과" maxLength="25" />
      <TextInput id="phone" label="회장 전화번호" maxLength="25" />
      <TextInput id="intro" label="동아리 간략한 소개" maxLength="500" />

      <button
        onClick={onModalAlert}
        className="w-[329px] h-[50px] mb-[20px] bg-green font-main text-white"
      >
        동아리 등록
      </button>
    </div>
  );
};

export default EnrollForm;
