const Button = (props) => {
  return (
    <div>
      <button className="w-[295px] h-[50px] mb-[20px] bg-green font-main text-white">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
