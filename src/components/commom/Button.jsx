import React, { useContext } from "react";
import styled from "styled-components";
import {
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InsertContext, SearchContext } from "../../context/homeContext";
import { DetailContext, ModalContext } from "../../context/detailContext";

function Button({ Sortation }) {
  const homeInsert = useContext(InsertContext);
  const homeSearch = useContext(SearchContext);
  const detailModalBtn = useContext(ModalContext);
  const detail = useContext(DetailContext);
  switch (Sortation) {
    case "팬레터 등록":
      return (
        <StButton
          $btnStyle="addBtn"
          onClick={() => {
            homeInsert.insertFanLetter();
          }}
        >
          팬레터 등록
        </StButton>
      );
      break;
    case "수정":
      return <StButton onClick={detail.updInputShow}>수정</StButton>;
      break;
    case "삭제":
      return (
        <StButton
          onClick={() => {
            detail.modalShow("정말로 삭제하시겠습니까?", false);
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
            detail.modalShow("정말로 수정하시겠습니까?");
          }}
        >
          수정완료
        </StButton>
      );
      break;
    case "수정취소":
      return <StButton onClick={detail.updInputShow}>취소</StButton>;
      break;
    case "확인":
      return (
        <StButton
          $btnStyle="cmitBtn"
          onClick={() => {
            detailModalBtn.modalText == "정말로 수정하시겠습니까?"
              ? detailModalBtn.updCommit(detailModalBtn.id)
              : detailModalBtn.delCommit(detailModalBtn.id);
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
            detailModalBtn.modalShow("", false);
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
            detail.navigate(`/?artisdtSort=${detail.resultData.writedTo}`);
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
            homeSearch.searchResetFanLetter();
          }}
        >
          초가화
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
  ${({ $btnStyle }) => ($btnStyle === "searchBtn" ? "margin: 0" : null)};
  font-weight: bold;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
