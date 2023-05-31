import React from "react";

const Button = (props) => {
  let setWidth = false;
  if (props.width) {
    setWidth = true;
  }

  return (
    <div>
      <button
        className={`${
          setWidth ? `w-[${props.width}]` : "w-[329px]"
        } h-[50px] mb-[20px] bg-green font-main text-white`}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
