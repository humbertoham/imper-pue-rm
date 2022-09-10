import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Content,
  Wrapper,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  Page,
  Message,
} from "./Examples.styles";
import image1 from "../../images/image1.jpeg";
import image2 from "../../images/image2.jpeg";
import image3 from "../../images/image3.jpeg";
import image4 from "../../images/image4.jpeg";
import image5 from "../../images/image5.jpeg";
import image6 from "../../images/image6.jpeg";
import image7 from "../../images/image7.jpeg";
import image8 from "../../images/image8.jpeg";
import image9 from "../../images/image9.jpeg";
import image10 from "../../images/image10.jpeg";
import image11 from "../../images/image11.jpeg";
import image12 from "../../images/image12.jpeg";
import image13 from "../../images/image13.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Examples = () => {
  return (
    <>
      <Wrapper>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image1} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image2} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image3} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image4} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image5} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image6} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image7} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image8} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image9} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image10} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image11} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image12} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <CardWrapper>
              <CardHeader>
                <Page src={image13} />
              </CardHeader>
            </CardWrapper>
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </>
  );
};
export default Examples;
