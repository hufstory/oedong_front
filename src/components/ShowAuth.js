// props.isAdmin : 운영자인지 아닌지 판단, bool type
const ShowAuth = (props) => {
  return (
    <>
      {props.isAdmin ? (
        <div className="w-[88px] h-[20px] border border-green font-main text-white flex items-center">
          <div className="w-[80px] h-[20px] text-[13px] border-none bg-transparent flex justify-center items-center">
            일반
          </div>
          <div className="w-[80px] h-[20px] text-[13px] bg-green flex justify-center items-center">
            회장
          </div>
        </div>
      ) : (
        <div className="w-[88px] h-[20px] border border-green font-main text-white flex items-center">
          <div className="w-[80px] h-[20px] text-[13px] bg-green flex justify-center items-center">
            일반
          </div>
          <div className="w-[80px] h-[20px] text-[13px] border-none bg-transparent flex justify-center items-center">
            회장
          </div>
        </div>
      )}
    </>
  );
};

export default ShowAuth;
