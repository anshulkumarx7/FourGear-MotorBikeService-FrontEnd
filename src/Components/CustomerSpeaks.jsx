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
                    "I was in a bind when my bike broke down right before a weekend trip. I contacted Motomagicians, and I was amazed by their quick response. They picked up my bike within an hour, and not only did they repair it in record time, but they also delivered it back to me before the weekend! Their service was efficient, professional, and hassle-free. Highly recommended!"
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Akash Jha</h2>
                  <img src={invertedComma}></img>
                  <h4>
                  "Motomagicians truly live up to their name! I had been procrastinating getting my bike serviced, but their instant pickup service made it so convenient. The team was friendly, and they communicated every step of the way. They did a thorough job with the servicing, and my bike feels as good as new. The cherry on top was the on-time delivery. I'm definitely becoming a regular customer."
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Vaibhav Singh</h2>
                  <img src={invertedComma}></img>
                  <h4>
                  "As a busy professional, I hardly find time to take care of my bike maintenance. That's where Motomagicians came to my rescue. Their pickup and delivery service is a game-changer. I scheduled a pickup online, and they collected my bike from my office. The best part? They returned it in perfect condition the very next day. The convenience and quality of their service are unparalleled."
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Abhyuday</h2>
                  <img src={invertedComma}></img>
                  <h4>
                  "As a busy professional, I hardly find time to take care of my bike maintenance. That's where Motomagicians came to my rescue. Their pickup and delivery service is a game-changer. I scheduled a pickup online, and they collected my bike from my office. The best part? They returned it in perfect condition the very next day. The convenience and quality of their service are unparalleled."
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Ankit Kumar</h2>
                  <img src={invertedComma}></img>
                  <h4>
                  "I had a fantastic experience with Motomagicians. They came highly recommended by a friend, and I'm glad I chose them. Their pickup was prompt, and the repair was carried out swiftly. They even cleaned my bike before delivering it back to me! The level of customer care and the overall process exceeded my expectations. I'll definitely be spreading the word."
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Pranshu Sahay</h2>
                  <img src={invertedComma}></img>
                  <h4>
                  "Motomagicians is a game-changer for anyone who loves their bike but struggles to find time for maintenance. Their pickup and delivery service saved me so much time and hassle. They didn't just fix my bike; they gave it a thorough checkup and provided me with helpful tips for better maintenance. It's like having a personal bike mechanic at your doorstep!"
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Prakhar Chandel</h2>
                  <img src={invertedComma}></img>
                  <h4>
                  "I was skeptical about using an online service for my bike repairs, but Motomagicians proved me wrong. From the moment I booked their pickup service to the time they delivered my bike, everything was seamless. They kept me informed throughout the process, and their attention to detail in the repairs is commendable. I'm a happy customer!"
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Harshit Kumar</h2>
                  <img src={invertedComma}></img>
                  <h4>
                  "Motomagicians is the answer to every bike owner's prayers. My bike had been sitting idle for months due to a busy schedule. Thanks to their pickup service, I didn't have to worry about taking time off work. They not only fixed the issues but also gave my bike a new lease on life. Riding it now feels like a dream!"
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="fourGearTestimonialContainer">
                <div className="fourGearTestimonialAvatar"></div>
                <div className="fourGearTestimonialContent">
                  <h2>Nishant Singh</h2>
                  <img src={invertedComma}></img>
                  <h4>
                  "I've been a loyal customer of Motomagicians for a while now, and they never disappoint. Their team is knowledgeable and passionate about bikes. The pickup and delivery service is incredibly convenient, especially for someone like me who's always on the go. They go the extra mile to ensure customer satisfaction. Kudos to the Motomagicians team!"
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
