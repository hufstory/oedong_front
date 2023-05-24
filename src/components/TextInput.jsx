import React from "react";
import { useRef } from "react";

const TextInput = (props) => {
  let isLong = false;
  if (props.maxLength > 25) {
    isLong = true;
  }

  const textarea = useRef();
  const handleResizeHeight = () => {
    textarea.current.style.height = "auto";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
  };

  return (
    <div>
      <label className="text-white text-[16px] font-main" htmlFor="text">
        {props.label}
      </label>
      {isLong ? (
        <div className="container w-[329px] mt-[7px] mb-[22px] mx-auto flex flex-col items-start justify-center border-green border bg-main-black">
          <div>
            <textarea
              ref={textarea}
              onInput={handleResizeHeight}
              rows={3}
              className="ml-[16px] mt-[10px] mb-[5px] w-[260px] text-[14px] text-white focus: outline-none bg-main-black resize-none"
            ></textarea>
          </div>
        </div>
      ) : (
        <div className="container w-[329px] min-h-[40px] mt-[7px] mb-[22px] mx-auto flex flex-col items-start justify-center border-green border bg-main-black">
          <div>
            <input
              type="text"
              id={props.id}
              className="ml-[16px] w-[240px] text-[14px] text-white focus: outline-none bg-main-black"
              placeholder={props.placeholder}
              maxLength={props.maxLength}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TextInput;
