import { useState } from "react";

const AddMoreForm = (props) => {
  const [name, setName] = useState("");
  const nameInputHandler = (e) => {
    setName(e.target.value);
  };
  const onClickListener = () => {
    if (name === "") return;
    props.onClick(name);
    setName("");
  };

  return (
    <div className="w-[311px] flex flex-row items-center justify-start mb-[20px]">
      <input
        type="text"
        value={name}
        placeholder="항목 이름 입력"
        onChange={nameInputHandler}
        className="w-[221px] h-[30px] bg-main-black border border-green text-white placeholder:text-white text-[14px] pl-[5px]"
      />
      <button
        onClick={onClickListener}
        className="bg-green border-none ml-[10px] w-[80px] h-[30px] text-[14px] text-white"
      >
        추가
      </button>
    </div>
  );
};

export default AddMoreForm;
