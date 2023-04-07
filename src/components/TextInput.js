const TextInput = (props) => {
  return (
    <div>
      <label className="text-white text-[16px] font-main" htmlFor="text">
        {props.label}
      </label>
      <div className="container w-[275px] h-[40px] mt-[7px] mb-[22px] mx-auto flex flex-col items-start justify-center border-green border-2 bg-main-black">
        <div>
          <input
            type="text"
            id="text"
            className="ml-[16px] w-[240px] text-[14px] text-white focus: outline-none bg-main-black"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
