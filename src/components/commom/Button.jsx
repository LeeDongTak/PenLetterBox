import React from "react";
import styled from "styled-components";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button({
  id,
  insertFanLetter,
  modalText,
  updCommit,
  delCommit,
  updInputShow,
  modalShow,
  Sortation,
  navigate,
  searchResetFanLetter,
  resultData
}) {
  switch (Sortation) {
    case "팬레터 등록":
      return (
        <StButton $btnStyle="addBtn" onClick={insertFanLetter}>
          팬레터 등록
        </StButton>
      );
      break;
    case "수정":
      return <StButton onClick={updInputShow}>수정</StButton>;
      break;
    case "삭제":
      return (
        <StButton
          onClick={() => {
            modalShow("정말로 삭제하시겠습니까?", false);
          }}
        >
          삭제
        </StButton>
      );
      break;
    case "수정완료":
      return (
        <StButton
          onClick={() => {
            modalShow("정말로 수정하시겠습니까?");
          }}
        >
          수정완료
        </StButton>
      );
      break;
    case "수정취소":
      return <StButton onClick={updInputShow}>취소</StButton>;
      break;
    case "확인":
      return (
        <StButton
          $btnStyle="cmitBtn"
          onClick={() => {
            modalText == "정말로 수정하시겠습니까?"
              ? updCommit(id)
              : delCommit(id);
          }}
        >
          확인
        </StButton>
      );
      break;
    case "모달취소":
      return (
        <StButton
          $btnStyle="cmitBtn"
          onClick={() => {
            modalShow("", false);
          }}
        >
          취소
        </StButton>
      );
      break;
    case "홈":
      return (
        <StButton
          $btnStyle="homeBtn"
          onClick={() => {
            navigate(`/?artisdtSort=${resultData.writedTo}`);
          }}
        >
        <FontAwesomeIcon icon={faHouseChimney} />
        </StButton>
      );
      break;
    case "검색":
      return (
        <StButton
          $btnStyle="searchBtn"
          onClick={() => {
            searchResetFanLetter()
          }}
        > 초가화
        </StButton>
      );
      break;
    default:
      break;
  }
}
export default Button;

// 홈버튼
export const HomeIcon = styled.div`
  font-size: 1.5rem;
  margin: 0 auto 1.5rem 0;
`;

// button 스타일
const StButton = styled.button`
  width: ${({ $btnStyle }) => ($btnStyle === "addBtn" ? "84%" : "auto")};
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: ${({ $btnStyle }) =>
    $btnStyle === "addBtn" ? "1.5rem" : "1.1rem"};
  padding: ${({ $btnStyle }) =>
    $btnStyle === "addBtn"
      ? "4% 0"
      : $btnStyle === "cmitBtn"
      ? "3% 8%"
      : "1.4% 3%"};
  border: 0;
  border-radius: 5px;
  box-shadow: 0 0 5px 2px #fff;
  margin-top: ${({ $btnStyle }) => ($btnStyle === "addBtn" ? "10%" : "0")};
  margin-left: ${({ $btnStyle }) => ($btnStyle === "addBtn" ? "0" : "5%")};
  margin-right: ${({ $btnStyle }) => ($btnStyle === "cmitBtn" ? "5%" : "0%")};
  ${({ $btnStyle }) =>
    $btnStyle === "homeBtn" ? "margin: 0 auto 1.5rem 0" : null};
    ${({ $btnStyle }) =>
    $btnStyle === "searchBtn" ? "margin: 0" : null};
  font-weight: bold;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
