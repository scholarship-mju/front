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
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.get("http://ec2-15-164-84-210.ap-northeast-2.compute.amazonaws.com:8080/rank");

      console.log("data ", response.data);

      // 서버 응답에서 memberList를 사용하도록 수정
      if (response.data && response.data.memberList) {
        setRankings(response.data.memberList);
      }
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
          autoplay={{ delay: 2600, disableOnInteraction: false }}
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
            {rankings && rankings.length > 0 ? (
              rankings
                .filter((member) => member.total >= 0) // total 값이 0 이상인 항목만 선택
                .sort((a, b) => b.total - a.total) // total 값 기준 내림차순 정렬
                .slice(0, 4) // 상위 4명의 데이터만 선택
                .map((user, index) => (
                  <div key={user.id || index} style={{ textAlign: "center" }}>
                    <ListBox>{user.nickname || "이름 없음"}</ListBox>
                    <span style={{ marginTop: "10px", display: "block", fontSize: "1.2em", fontWeight: "bold"}}>
                      {index + 1}위
                    </span>
                  </div>
                ))
            ) : (
              // 데이터가 없을 경우 기본 리스트 표시
              <>
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={`placeholder-${index}`} style={{ textAlign: "center" }}>
                    <ListBox>명단{index + 1}</ListBox>
                    <span style={{ marginTop: "10px", display: "block", fontSize: "1.2em", fontWeight: "bold"}}>
                      {index + 1}위
                    </span>
                  </div>
                ))}
              </>
            )}
          </ListContainer>
        </KingSection>
      </MainContent>
    </div>
  );
};

export default HomePage;