import React, { useState } from "react";
import styled from "styled-components";
import FanLetter from "./FanLetter";

function FanLetterListBox({ resultData, searchParams, navigate }) {
  const fanLetterMsg = resultData.filter(
    (item) => item.writedTo === searchParams.get("artistSort")
  );
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

      {fanLetterMsg.length === 0 ? <StMsg>{searchParams.get("artistSort")}에게 첫번째 팬레터를 보내주세요</StMsg> : null}
      
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

const StMsg = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  text-shadow: 0 0 5px #fff;
  font-size: 1.2rem;
  text-align: center;
`;
