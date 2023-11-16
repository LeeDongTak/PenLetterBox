import React from "react";
import styled from "styled-components";
import Button from "../commom/Button";

function DetailBtnBox({ updContentShow, updInputShow, modalShow }) {
  return (
    <BtnBox>
      {updContentShow === false ? (
        <>
          <Button updInputShow={updInputShow} Sortation="수정" />
          <Button modalShow={modalShow} Sortation="삭제" />
        </>
      ) : (
        <>
          <Button modalShow={modalShow} Sortation="수정완료" />
          <Button updInputShow={updInputShow} Sortation="수정취소" />
        </>
      )}
    </BtnBox>
  );
}

export default DetailBtnBox;

// 수정, 삭제 버튼 영역
const BtnBox = styled.div`
  width: 80%;
  flex: 1.5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;