import Header from "../../../../components/Header";
import TextInput from "../../../../components/TextInput";
import Modal from "../../../../components/Modal/Modal";
import ModalPortal from "../../../../components/Modal/ModalPortal";
import Footer from "../../../../components/Footer";
import AddMoreForm from "./AddMoreForm";
import formintro from "../../../../assets/formintro.png";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { useState } from "react";
import { ko } from "date-fns/esm/locale";

const MakeJoinForm = () => {
  /* modal control */
  const [openModal, setOpenModal] = useState(false);
  const onModalAlert = () => {
    setOpenModal(!openModal);
  };

  const [showMore, setShowMore] = useState(false);
  const addClickListener = () => {
    setShowMore(!showMore);
  };

  const [addMoreList, setAddMoreList] = useState([]);
  const addMoreListener = (x) => {
    setAddMoreList([...addMoreList, x]);
    setShowMore(!showMore);
  };
  // useEffect(() => {}, [addMoreList]);
  /* DatePicker */
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const SDatePicker = styled(DatePicker)`
    width: 131px;
    height: 40px;
    box-sizing: border-box;
    padding: 8px;
    border 1px solid #22C55E;
    background-color: #151414;
    font-size: 14px;
    color: #FFFFFF;
    text-align: center;
  `;

  return (
    <ModalPortal>
      <div className="container min-w-[395px] w-screen mx-auto flex flex-col items-center justify-center bg-main-black">
        {openModal && (
          <Modal
            onOpenModal={onModalAlert}
            text="폼을 생성하시겠습니까?"
            link="/clubinfo/admin/form/createsuccess"
          />
        )}
        <Header />
        <div className="mt-[20px] flex items-start justify-start mr-[186px]">
          <p className="font-main text-[20px] text-white">동아리 지원 폼</p>
        </div>
        <div className="relative w-[395px] ml-[80px]">
          <img
            src={formintro}
            alt="formintro"
            className="w-[312px] mt-[10px]"
          />
          <textarea
            placeholder="폼 설명을 작성하세요."
            className="placeholder:text-white absolute top-[40px] ml-[16px] mt-[10px] mb-[5px] w-[286px] h-[300px] text-[14px] text-white focus: outline-none bg-green resize-none"
          ></textarea>
        </div>
        <div className="w-[280px] flex flex-col items-start justify-center mt-[20px] mr-[33px]">
          <label className="text-white text-[16px] font-main">
            폼 날짜 설정
          </label>
          <div className="w-[311px] flex flex-row mt-[7px] mb-[12px] items-center justify-center">
            <SDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yy/MM/dd"
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              locale={ko}
            />
            <div
              className={
                "w-[120px] h-[1px] ml-[14px] mr-[14px] border border-green"
              }
            />
            <SDatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yy/MM/dd"
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              locale={ko}
            />
          </div>
          <TextInput label="이름" maxLength="25" width="311px" />
          <TextInput label="학번/학과" maxLength="25" width="311px" />
          <TextInput label="전화번호" maxLength="25" width="311px" />
          <TextInput label="이메일" maxLength="25" width="311px" />
          <TextInput label="지원하게 된 동기" maxLength="500" width="311px" />
          {addMoreList.map((x, index) => (
            <TextInput key={index} label={x} maxLength="25" width="311px" />
          ))}
          <p
            onClick={addClickListener}
            className="text-white font-main mt-[-10px] mb-[10px] cursor-pointer"
          >
            + 추가
          </p>
          {showMore ? <AddMoreForm onClick={addMoreListener} /> : null}
          <button
            onClick={onModalAlert}
            className={`w-[311px] h-[50px] mb-[20px] bg-green font-main text-white`}
          >
            폼 생성하기
          </button>
        </div>
        <Footer />
      </div>
    </ModalPortal>
  );
};

export default MakeJoinForm;
