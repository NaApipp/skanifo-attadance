"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function OnBoardingSwipe() {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000, // 3 detik
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-screen"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="container-onboarding">
            <img
              src="/asset/image/OnBoarding/slide1.png"
              className="img-onboarding"
              alt="slide 1"
            />
            <div className="">
              <h2 className="tittle-onboarding">Skanifo Attendance</h2>
              <p className="subtitle-onboarding">
                Catat kehadiranmu dengan mudah
              </p>
            </div>
          </div>
        </SwiperSlide>
        
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="container-onboarding">
            <img
              src="/asset/image/OnBoarding/slide2.png"
              className="img-onboarding"
              alt="slide 2"
            />
            <div className="">
              <h2 className="tittle-onboarding">Structured Schedule</h2>
              <p className="subtitle-onboarding">Jadwal selalu terupdate</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="container-onboarding">
            <img
              src="/asset/image/OnBoarding/slide3.png"
              className="img-onboarding"
              alt="slide 3"
            />
            <div className="">
              <h2 className="tittle-onboarding">Perfect Solution</h2>
              <p className="subtitle-onboarding">Solusi tepat waktu</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
