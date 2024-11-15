import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner1 from "../png/배너001.png";
import Banner2 from "../png/배너002.png";
import Banner3 from "../png/배너003.png";
import Banner4 from "../png/배너004.png";
import king from "../png/king.png";
import { Banner, MainContent, KingSection, ListContainer, ListBox, SwiperSlideImage, GlobalStyle, KingLogo } from "../style/HomePageStyle";

const HomePage = () => {
  const [rankings, setRankings] = useState([]);

  // 서버에서 데이터를 가져오는 함수
  const fetchRankings = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/rank", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("data = ", response.data);
      setRankings(response.data); // 데이터를 상태에 저장
    } catch (error) {
      console.error("데이터를 가져오는데 실패했습니다:", error);
    }
  };

  // 컴포넌트가 마운트될 때 데이터를 가져옵니다.
  useEffect(() => {
    fetchRankings();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <Banner>
        <Swiper
          style={{
            width: '100%',
            height: '360px',
            padding: '0',
            margin: '0',
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'relative',
          }}
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
          <KingLogo src={king} alt="이달의 왕" />
          <ListContainer>
            {rankings.length > 0 ? (
              rankings.slice(0, 4).map((user, index) => (
                <ListBox key={index}>{user.nickname}</ListBox>
              ))
            ) : (
              <>
                <ListBox>명단1</ListBox>
                <ListBox>명단2</ListBox>
                <ListBox>명단3</ListBox>
                <ListBox>명단4</ListBox>
              </>
            )}
          </ListContainer>
        </KingSection>
      </MainContent>
    </div>
  );
};

export default HomePage;