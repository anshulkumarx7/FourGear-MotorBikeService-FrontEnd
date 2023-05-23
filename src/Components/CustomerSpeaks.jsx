import React from "react";
import "../Styles/CustomerSpeaks.css";
import invertedComma from "../assets/testi.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function CustomerSpeaks() {
  //  const swiper = new Swiper(...swiper);
  return (
    <div className="fourGearCustomerSpeaks">
      <div className="fourGearCustomerSpeaksContainer">
        <h1>Customer Speaks</h1>
        <div className="fourGearTestimonials">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1082: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Anshul Kumar</h2>
                  <img src={invertedComma}></img>
                  <h4>
                    Pulling a 100 kg motorbike on a highway under the hot sun,
                    sweating all around, sounds fun? No, it isn't. Thanks to
                    Four gear bike service and repair app startup for saving all
                    the useless hardwork. Four Gear is a life saving another
                    Urban Company Bike Service app.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Anshul Kumar</h2>
                  <img src={invertedComma}></img>
                  <h4>
                    Pulling a 100 kg motorbike on a highway under the hot sun,
                    sweating all around, sounds fun? No, it isn't. Thanks to
                    Four gear bike service and repair app startup for saving all
                    the useless hardwork. Four Gear is a life saving another
                    Urban Company Bike Service app.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Anshul Kumar</h2>
                  <img src={invertedComma}></img>
                  <h4>
                    Pulling a 100 kg motorbike on a highway under the hot sun,
                    sweating all around, sounds fun? No, it isn't. Thanks to
                    Four gear bike service and repair app startup for saving all
                    the useless hardwork. Four Gear is a life saving another
                    Urban Company Bike Service app.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Anshul Kumar</h2>
                  <img src={invertedComma}></img>
                  <h4>
                    Pulling a 100 kg motorbike on a highway under the hot sun,
                    sweating all around, sounds fun? No, it isn't. Thanks to
                    Four gear bike service and repair app startup for saving all
                    the useless hardwork. Four Gear is a life saving another
                    Urban Company Bike Service app.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Anshul Kumar</h2>
                  <img src={invertedComma}></img>
                  <h4>
                    Pulling a 100 kg motorbike on a highway under the hot sun,
                    sweating all around, sounds fun? No, it isn't. Thanks to
                    Four gear bike service and repair app startup for saving all
                    the useless hardwork. Four Gear is a life saving another
                    Urban Company Bike Service app.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Anshul Kumar</h2>
                  <img src={invertedComma}></img>
                  <h4>
                    Pulling a 100 kg motorbike on a highway under the hot sun,
                    sweating all around, sounds fun? No, it isn't. Thanks to
                    Four gear bike service and repair app startup for saving all
                    the useless hardwork. Four Gear is a life saving another
                    Urban Company Bike Service app.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Anshul Kumar</h2>
                  <img src={invertedComma}></img>
                  <h4>
                    Pulling a 100 kg motorbike on a highway under the hot sun,
                    sweating all around, sounds fun? No, it isn't. Thanks to
                    Four gear bike service and repair app startup for saving all
                    the useless hardwork. Four Gear is a life saving another
                    Urban Company Bike Service app.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Anshul Kumar</h2>
                  <img src={invertedComma}></img>
                  <h4>
                    Pulling a 100 kg motorbike on a highway under the hot sun,
                    sweating all around, sounds fun? No, it isn't. Thanks to
                    Four gear bike service and repair app startup for saving all
                    the useless hardwork. Four Gear is a life saving another
                    Urban Company Bike Service app.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Anshul Kumar</h2>
                  <img src={invertedComma}></img>
                  <h4>
                    Pulling a 100 kg motorbike on a highway under the hot sun,
                    sweating all around, sounds fun? No, it isn't. Thanks to
                    Four gear bike service and repair app startup for saving all
                    the useless hardwork. Four Gear is a life saving another
                    Urban Company Bike Service app.
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default CustomerSpeaks;
