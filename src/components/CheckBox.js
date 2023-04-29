import { useState } from "react";

const CheckBox = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkBoxListener = (event) => {
    setIsChecked(event.target.checked);
  };

  const checkBoxItems = props.item.map((checkBox) => (
    <div className="flex-row items-start justify-start">
      <div className="flex-row items-start justify-start mb-[5px]">
        <input
          type="checkbox"
          className="form-checkbox text-green-500 rounded-full mr-[7px] relative"
          id={checkBox}
          value={checkBox}
        />
        <label
          key={checkBox}
          htmlFor={checkBox}
          className="text-white text-[14px] font-main mr-[20px] top-[-2.5px] relative"
        >
          {checkBox}
        </label>
      </div>
    </div>
  ));

  const showAnything = props.showAnything;

  const firstCol = checkBoxItems.slice(0, Math.ceil(checkBoxItems.length / 2));
  const secondCol = checkBoxItems.slice(Math.ceil(checkBoxItems.length / 2));

  return (
    <div className="mt-[10px] mb-[20px]">
      <label className="text-white text-[16px] font-main" htmlFor="text">
        {props.label}
      </label>
      <div className="w-[295px] min-h-[40px] mt-[7px] pl-[20px] pt-[15px] pb-[15px] flex flex-col items-start justify-center border-green border-2 bg-main-black">
        <div className="w-[295px] flex flex-row items-start justify-center">
          <div className="w-1/2">{firstCol}</div>
          <div className="w-1/2">{secondCol}</div>
        </div>
        {/* showAnything : 기타 칸 표시 여부 */}
        {showAnything ? (
          <div>
            <input
              type="checkbox"
              className="form-checkbox text-green-500 rounded-full mr-[7px] relative"
              id="anything"
              value="anything"
              onChange={checkBoxListener}
            />
            <label
              key="anything"
              htmlFor="anything"
              className="text-white text-[14px] font-main mr-[20px] top-[-2.5px] relative"
            >
              기타
            </label>
            {isChecked ? (
              <div className="container w-[250px] min-h-[30px] mt-[7px] mx-auto items-start justify-center border-green border-2 bg-main-black">
                <div>
                  <input
                    type="text"
                    className="ml-[10px] w-[230px] text-[14px] text-white focus: outline-none bg-main-black"
                    placeholder=""
                    maxLength="20"
                  />
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CheckBox;
