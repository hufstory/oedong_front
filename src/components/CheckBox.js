const CheckBox = (props) => {
  const checkBoxItems = props.item.map((checkBox) => (
    <div className="flex-row items-start justify-start">
      <div className="flex-row items-start justify-start">
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
      </div>
    </div>
  ));

  const firstCol = checkBoxItems.slice(0, Math.ceil(checkBoxItems.length / 2));
  const secondCol = checkBoxItems.slice(Math.ceil(checkBoxItems.length / 2));

  return (
    <div className="mt-[10px] mb-[10px]">
      <label className="text-white text-[16px] font-main" htmlFor="text">
        {props.label}
      </label>
      <div className="w-[295px] min-h-[40px] mt-[7px] pl-[20px] pt-[15px] pb-[15px] flex flex-row items-start justify-center border-green border-2 bg-main-black">
        <div className="w-1/2 mr-[12px]">{firstCol}</div>
        <div className="w-1/2">{secondCol}</div>
      </div>
    </div>
  );
};

export default CheckBox;
