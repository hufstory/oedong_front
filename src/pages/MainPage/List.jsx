import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../styles/slide.css";

const List = () => {
  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: false,
    adaptiveHeight: true,
    arrows: false,
    swipeToSlide: true,
    swipe: true,
    slidesToShow: 1.6,
    slidesToScroll: 1,
    // adaptiveWidth: true,
  };

  return (
    <div className="container max-w-[395px] w-screen h-[300px] mx-auto items-center justify-start mt-[21px]">
      <Slider {...setting} className="h-[280px]">
        <div className="bg-white h-[280px]" style={{ width: 300 }}>
          <h3>1</h3>
        </div>
        <div className="bg-pink h-[280px]">
          <h3>2</h3>
        </div>
        <div className="bg-white h-[280px]">
          <h3>3</h3>
        </div>
        <div className="bg-pink h-[280px]">
          <h3>4</h3>
        </div>
        <div className="bg-white h-[280px]">
          <h3>5</h3>
        </div>
        <div className="bg-pink h-[280px]">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default List;
