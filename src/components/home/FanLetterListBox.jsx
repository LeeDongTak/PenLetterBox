import React, { useState } from "react";
import styled from "styled-components";
import FanLetter from "./FanLetter";

function FanLetterListBox({ resultData, searchParams, navigate }) {
  return (
    <ListBox>
      {resultData
        .filter((item) => item.writedTo === searchParams.get("artistSort"))
        .filter((item) =>
          searchParams.get("search") !== null
            ? item.nickname.includes(searchParams.get("search")) ||
              item.content.includes(searchParams.get("search")) ||
              item.createdAt.includes(searchParams.get("search"))
            : item
        )
        .map((item) => (
          <FanLetter key={item.id} navigate={navigate} fanLetterData={item} />
        ))}
    </ListBox>
  );
}

export default FanLetterListBox;

const ListBox = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
