import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
const Header = () => {
  return (
    <div className='max-h-[60%] max-w-[1480px] mx-auto md:px-[16px]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.ibb.co/gr5gVgY/banner-2.jpg" alt="" className="object-cover  w-full"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/q92rF6S/banner-3.jpg" alt="" className="object-cover w-full"/></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/94XF9v1/banner-1-1.jpg" alt="" className="object-cover  w-full" /></SwiperSlide>
    
      </Swiper>
    </div>
  );
};

export default Header;
