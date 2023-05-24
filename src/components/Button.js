import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="w-[329px] h-[50px] mb-[20px] bg-green font-main text-white">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
