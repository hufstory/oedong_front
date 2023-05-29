const Nav = () => {
    return (
        <div className="container mx-auto">
            <nav className="flex flex-col mt-[31px] max-w-[395px] h-[520px] mx-auto">
                <hr className="text-green border-t-[2px]" />
                <a href="/my" className="text-white text-[16px] my-[18px]">내 정보</a>
                <hr className="text-[#22C55E] border-t-[0.5px]" />
                <a href="/my" className="text-white text-[16px] my-[18px]">내 동아리</a>
                <hr className="text-green border-t-[2px]" />
            </nav>
        </div>
    );
};

export default Nav;