import React from "react";
import { Grid } from "../elements/index";

import styled from "styled-components";
import "semantic-ui-css/semantic.min.css";

import Header from "../components/Header";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import Carousel from "../components/Carousel";
import notice from "../notice.png";

import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Main = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postActions.setPostDB());
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Grid padding="5vh 3vw 5vh 10vw">
          <div
            style={{
              border: "2px solid #699B97",
              backgroundColor: "#699B97",
              width: "30px",
              marginBottom: "-10px",
            }}
          ></div>
          <h1>입양하기</h1>

          <NoticeBox>
            <YoutubeBox>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/HFvgUuSuj8g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </YoutubeBox>
            <PhotoBox>
              <Carousel />
            </PhotoBox>
          </NoticeBox>

          <CardBox>
            <Card />
          </CardBox>
        </Grid>

        <Grid>
          <Sidebar />
        </Grid>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100vw;
  height: auto;
  display: grid;
  grid-template-columns: 75vw 25vw;
`;

const NoticeBox = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: flex;
  margin-top: 4vh;
`;

const YoutubeBox = styled.div`
  width: 50%;
  height: 37vh;
`;

const PhotoBox = styled.div`
  width: 50%;
  height: 37vh;
`;

const CardBox = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4vh;
  margin-top: 6vh;
`;

export default Main;
