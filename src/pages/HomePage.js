import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner1 from "../png/배너001.png";
import Banner2 from "../png/배너002.png";
import Banner3 from "../png/배너003.png";
import Banner4 from "../png/배너004.png";
import { Banner, MainContent, KingSection, KingText, ListContainer, ListBox, SwiperSlideImage, GlobalStyle } from "../style/HomePageStyle";

const HomePage = () => {
  return (
    <div>
       <GlobalStyle />
      <Banner>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          <SwiperSlide>
            <SwiperSlideImage src={Banner1} alt="배너1" />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideImage src={Banner2} alt="배너2" />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideImage src={Banner3} alt="배너3" />
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlideImage src={Banner4} alt="배너4" />
          </SwiperSlide>
        </Swiper>
      </Banner>

      <MainContent>
        <KingSection>
          <KingText>이달의 왕</KingText>
          <ListContainer>
            <ListBox>명단1</ListBox>
            <ListBox>명단2</ListBox>
            <ListBox>명단3</ListBox>
            <ListBox>명단4</ListBox>
          </ListContainer>
        </KingSection>
      </MainContent>
    </div>
  );
};

export default HomePage;