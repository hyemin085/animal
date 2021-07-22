import React from "react";

import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";

import styled from "styled-components";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";

const Card = (props) => {
  const card_list = useSelector((state) => state.post.list);

  return (
    <React.Fragment>
      {card_list.map((card, idx) => {
        return (
          <Box
            key={card.animalId}
            onClick={() => {
              history.push(`/detail/${card.animalId}`);
            }}
          >
            <div>
              <Img src={card.animalPhoto} style={{ marginLeft: "0" }} />
            </div>
            <div style={{ margin: "0.5em 0", width: "90%" }}>{card.title}</div>
            <div>
              <ThumbUpAltOutlinedIcon
                style={{ width: "6%", height: "6%", marginTop: "0.3em" }}
              />
              &nbsp;&nbsp;&nbsp;
              {card.like}
            </div>
          </Box>
        );
      })}
    </React.Fragment>
  );
};

const Box = styled.div`
  margin-bottom: 1em;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 10.8em;
  &:hover {
    opacity: 0.8;
  }
`;

export default Card;
