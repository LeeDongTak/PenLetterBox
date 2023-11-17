import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../commom/Button";
import { DetailContext } from "../../context/detailContext";

function DetailBtnBox() {
  
const { updContentShow } = useContext(DetailContext)
  return (
    <BtnBox>
      {updContentShow === false ? (
        <>
          <Button Sortation="수정" />
          <Button Sortation="삭제" />
        </>
      ) : (
        <>
          <Button Sortation="수정완료" />
          <Button Sortation="수정취소" />
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