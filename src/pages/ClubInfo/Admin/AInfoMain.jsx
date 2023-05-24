import Header from "../../../components/Header";
import clubprofile from "../../../assets/clubprofile.png";
import description from "../../../assets/description.png";
import { useState, useEffect } from "react";

const AInfoMain = () => {
  const [descriptionText, setDescriptionText] = useState(``);
  useEffect(() => {
    setDescriptionText(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ex
              urna, pulvinar at vestibulum id, imperdiet id dolor. Praesent
              vehicula, metus non egestas placerat, magna turpis feugiat ligula,
              ut consequat lorem velit quis quam. Fusce nibh augue, lacinia non
              risus at, facilisis finibus nisi. Fusce tempor lectus eget
              consectetur bibendum. Vivamus cursus turpis vel massa efficitur,
              ac tincidunt dolor eleifend. Quisque euismod urna sit amet mollis
              ullamcorper. Aliquam suscipit, lorem vel consectetur suscipit,
              massa dolor rutrum nibh, non ultrices diam tellus sed risus.
              Pellentesquleo. Praesent lorem felis, maximus id orci nec, tempor
              vehicula ligula. Vestibulum augue diam, porttitor vitae tellus a,
              ullamcorper consectetur nisi. Proin fermentum volutpat magna et
              molestie. Vestibulum sed ornare metus, blandit commodo mi. Sed
              massa augue, fermentum et iaculis eget, varius et ligula. Nam
              mollis tortor sed efficitur porta. Quisque tincidunt nisi id
              vestibulum scelerisque. Praesent at molestie nunc. Cras dapibus
              nunc vel leo porttitor iaculis. Donec nulla urna, volutpat ac
              molestie at, mattis vel nunc. Maecenas convallis sodales leo,
              euismod dignissim nibh. Nam ac libero pharetra, tincidunt lorem
              nec, vestibulum turpis. Donec aliquet tristique sapien. In rhoncus
              sapien sit amet tempor mattis. Sed in suscipit diam, suscipit
              lobortis justo. Vestibulum fringilla ac dolor a elementum.
              Phasellus dapibu`);
  }, []);

  return (
    <div className="container flex flex-col items-start justify-center min-w-[395px] mx-auto">
      <Header />
      <div className="bg-main-black container max-w-[395px] h-[600px] mx-auto flex flex-col items-center justify-start">
        <div className="max-w-[395px] flex flex-col items-end bg-main-black">
          <div className="bg-main-black mt-[25px] max-w-[395px] flex flex-row justify-center items-center">
            <img src={clubprofile} className="w-[133px]" alt="profile" />
            <p className="font-main text-[20px] pr-[40px] ml-[30px] text-white">
              동아리 이름
            </p>
          </div>
          <div className="relative bg-main-black mt-[15px] max-w-[395px] flex justify-center items-start">
            <img src={description} className="w-[303px]" alt="description" />
            <p className="top-[35px] left-[20px] font-main text-[15px] text-white absolute">
              동아리 소개
            </p>
            <p className="top-[65px] left-[20px] font-sans text-[11px] w-[270px] h-[125px] overflow-auto text-white absolute">
              {descriptionText}
            </p>
            <button className="top-[198px] right-[20px] font-sans text-white text-[12px] absolute hover:text-magenta">
              수정하기 ▶︎
            </button>
          </div>
          <button className="w-[186px] h-[31px] mt-[20px] bg-green text-white text-[13px] font-main">
            동아리 정보 수정하기
          </button>
          <button className="w-[186px] h-[31px] mt-[10px] bg-green text-white text-[13px] font-main">
            동아리 지원 폼 만들기
          </button>
        </div>
      </div>
    </div>
  );
};

export default AInfoMain;
