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
import { Banner, MainContent, KingSection, KingText, ListContainer, ListBox } from "../style/HomePageStyle";

const HomePage = () => {
  return (
    <div>
      <Banner>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay, Navigation, Pagination]}
          className="swiper-container"
        >
          <SwiperSlide>
            <img src={Banner1} alt="배너1" style={{ width: "2000px", height: "360px", objectFit: "cover" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner2} alt="배너2" style={{ width: "2000px", height: "360px", objectFit: "cover" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner3} alt="배너3" style={{ width: "2000px", height: "360px", objectFit: "cover" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner4} alt="배너4" style={{ width: "2000px", height: "360px", objectFit: "cover" }} />
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