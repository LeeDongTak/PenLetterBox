import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../commom/Button";
import { SearchContext } from "../../context/homeContext";

function SeatchWrap() {
  const {
    searchParams,
    searchInputHendler,
    searchFanLetter,
    searchInput
  } = useContext(SearchContext);
  return (
    <SearchBox>
      <SearchName>{searchParams.get("artistSort")}</SearchName>
      <SeatchInput
        placeholder="Enter를 눌러 펜레터를 검색하세요"
        value={searchInput}
        type="text"
        onChange={searchInputHendler}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            searchFanLetter();
          }
        }}
      />
      <Button Sortation="검색" />
    </SearchBox>
  );
}

export default SeatchWrap;

const SearchBox = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchName = styled.div`
  width: 15%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  font-size: 1.4rem;
  text-shadow: 0 0 5px #fff;
`;

const SeatchInput = styled.input`
  width: 59%;
  height: 49%;
  border-radius: 5px;
  box-shadow: 0 0 5px 2px #fff;
  background-color: rgba(255, 255, 255, 0.8);
  border: 0;
  font-size: 1.3rem;
  &:focus {
    outline: none;
    border: 1px solid #fff;
  }
`;
