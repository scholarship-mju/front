// src/pages/HomePage.js
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner1 from '../png/배너1.png';
import Banner2 from '../png/배너2.png';

const Banner = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  position: relative;
`;

const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  
  .swiper-button-next, .swiper-button-prev {
    color: black;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 20px;
  width: 80%;
  margin: 0 auto;
`;

const KingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
`;

const KingText = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
`;

const ListContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 10px;
  justify-content: center;
  width: 100%;
`;

const ListBox = styled.div`
  border: 2px solid black;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: bold;
  color: black;
  background-color: #f9f9f9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

const HomePage = () => {
  return (
    <div>
      <Banner>
        <SwiperStyled
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          <SwiperSlide>
            <img src={Banner1} alt="배너1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Banner2} alt="배너2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </SwiperSlide>
        </SwiperStyled>
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