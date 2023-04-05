const CheckBox = (props) => {
  const checkBoxItems = props.item.map((checkBox) => (
    <span>
      <input
        type="checkbox"
        className="form-checkbox text-green-500 rounded-full mr-[7px] relative"
        id="check"
        value="item"
      />
      <label
        key={checkBox}
        htmlFor="check"
        className="text-white text-[14px] font-main mr-[20px] top-[-2.5px] relative"
      >
        {checkBox}
      </label>
    </span>
  ));

  const firstCol = checkBoxItems.slice(0, Math.ceil(checkBoxItems.length / 2));
  const secondCol = checkBoxItems.slice(Math.ceil(checkBoxItems.length / 2));

  return (
    <div>
      <label className="text-white text-[16px] font-main" htmlFor="text">
        {props.label}
      </label>
      <div className="container w-[275px] min-h-[40px] mt-[7px] pl-[29px] pt-[20px] pb-[20px] mx-auto flex flex-col items-start justify-start border-green border-2 bg-main-black">
        <div>
          <div className="flex-1 mb-[10px]">{firstCol}</div>
          <div className="flex-1">{secondCol}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
