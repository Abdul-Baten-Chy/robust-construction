import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Pagination, Autoplay } from "swiper/modules";
import SubHead from "../SubHead/SubHead";

const Testomonial = () => {
  return (
    <div className="my-28 max-w-[1480px] mx-auto px-[40px]">
      {/* <div className="flex flex-col items-center ">
        <h2 className="text-5xl font-script">Testomonials</h2>
        <img src="https://i.ibb.co/XJqjYLB/line-small.png" alt="" className="w-[200px] my-8" />
      </div> */}
      <SubHead title={'Testemonial'}></SubHead>
      <div className="mt-14">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="card w-96 h-72  bg-base-100 shadow-lg">
              <div className="card-body">
                <h2 className="card-title">
                  Emily Williams, <small>July 15, 2023</small>
                </h2>
                <p>
                  <q>
                    I had the most amazing experience during my stay at Hotel
                    Serenity. The service was top-notch, and the staff went
                    above and beyond to make me feel welcomed. My visit felt
                    like a dream come true.
                  </q>
                </p>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 h-72  bg-base-100 shadow-lg">
            <div >
              <div className="card-body">
                <h2 className="card-title">
                John Smith, <small>August 5, 2023</small>
                </h2>
                <p>
                  <q>
                  Staying at Hotel Serenity was a true delight. The rooms were exceptionally comfortable, and the attention to detail was impressive. I cant wait to return and enjoy their exceptional hospitality once again. 
                  </q>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 h-72  bg-base-100 shadow-lg">
            <div >
              <div className="card-body">
                <h2 className="card-title">
                Sarah Davis, <small>September 22, 2023</small>
                </h2>
                <p>
                  <q>
                  My recent stay at Hotel Serenity was an absolute pleasure. From the moment I arrived, I was treated with warmth and courtesy. The hotels stunning decor and breathtaking views made my visit unforgettable. 
                  </q>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 h-72  bg-base-100 shadow-lg">
            <div>
              <div className="card-body">
                <h2 className="card-title">
                Michael Johnson, <small>October 10, 2023</small>
                </h2>
                <p>
                  <q>
                  I cant say enough about the impeccable service at Hotel Serenity. The staff was incredibly helpful, and the amenities exceeded my expectations. Its the ideal destination for a relaxing getaway. 
                  </q>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 h-72  bg-base-100 shadow-lg">
            <div >
              <div className="card-body">
                <h2 className="card-title">
                  Emily Williams, <small>July 15, 2023</small>
                </h2>
                <p>
                  <q>
                    I had the most amazing experience during my stay at Hotel
                    Serenity. The service was top-notch, and the staff went
                    above and beyond to make me feel welcomed. My visit felt
                    like a dream come true.
                  </q>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 h-72  bg-base-100 shadow-lg">
            <div >
              <div className="card-body">
                <h2 className="card-title">
                Lisa Turner, <small>July 15, 2023</small>
                </h2>
                <p>
                  <q>
                  My stay at Hotel Serenity was an enchanting experience. The serene surroundings and the exceptional service created the perfect atmosphere for a memorable vacation. I cant wait to be back at this oasis of tranquility. 
                  </q>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default Testomonial;
