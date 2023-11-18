import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { v4 } from "uuid";
import { StWrap, StContainer } from "../styed/commonStyle";
import fakeData from "../fakeData.json";
import ArtistBtn from "../components/home/ArtistBtn";
import moment from "moment/moment";
import FanLetterInsertBox from "../components/home/FanLetterInsertBox";
import FanLetterListBox from "../components/home/FanLetterListBox";
import SeatchWrap from "../components/home/SeatchWrap";
import {
  ArtistContext,
  InsertContext,
  SearchContext,
  ListContext,
} from "../context/homeContext";

function Home() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [fakeDataState, setFakeDataState] = useState([]); //fakeData.json파일에서 가져온 데이터
  const [fanLetterData, setFanLetterData] = useState([]); // localStorage에 추가하는 데이터
  const [resultData, setResultData] = useState([]); // fakeData와 localStorage데이터를 합쳐서 화면에 출력하는 데이터
  const [nickNameInput, setNickNameInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const nickNameRef = useRef("");
  const [errMsg, setErrMsg] = useState("");
  const [errMsgBool, setErrMsgBool] = useState(false);

  // uuid로 랜덤한 id 생성
  const uuid = () => {
    const tokens = v4().split("-");
    return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
  };

  // 르세라핌 맴버 리스트
  const [artistMember, setArtistMember] = useState([
    {
      id: uuid(),
      artistName: "사쿠라",
      artistImg:
        "https://i.namu.wiki/i/GN0r1RXrUvePBt17HH_wKxMdT-QAYSN6w2Z51nB1oB9p67OHXC6BVPSBbPFB3UiD1q6343xlrDQPRXHQm20nVMCW31-Tn0kCDLcyvoLbl73ZFb1WEie04LZyQEisg_sR4JhKZNVw25clbSkDXFEwBA.webp",
      status: true,
    },
    {
      id: uuid(),
      artistName: "김채원",
      artistImg:
        "https://i.namu.wiki/i/2yDEjjBpqnZGidxPZBnNsHtIQam4eTO8hjvuol5igY-x2cJvMF89XbhQhzVZ3Fvo_z6Hh5aOdAwUDJg2Bvl77Y8G1GY-1yZ6ccHHxOZ-z5KFnNtVPzyEM8JT0mHiBjKQa89ub7_3dI43GoXRfJBPwg.webp",
      status: false,
    },
    {
      id: uuid(),
      artistName: "허윤진",
      artistImg:
        "https://i.namu.wiki/i/mqNwRedHkivTuVkkbWK5RK61CIvam1S1g_SnIwoquTou6KT77nNl-b6YcGCu5N4xJaQB7fTC9AdxIvq0EWjnwQu1zqTN9a1EcXuAvDCuWOiqlRttOhryZYiUjAmUAjzQ9s1i9BBWFnpZyK5t34T2_g.webp",
      status: false,
    },
    {
      id: uuid(),
      artistName: "카즈하",
      artistImg:
        "https://i.namu.wiki/i/F4Vg2qFHgDWrg40a_vsfeDQpxDPLPh0yw8bt4WFtIs3umbxWAYNfB-rg6gd7eDmvBj-vo-3-SpYA1mHK8v1Fy92t-_OHOFgWFd_U6fJbfupp-aFv3re7ij1DHrstaaTOBQliOWAtrkAVOYTLCb-8wg.webp",
      status: false,
    },
    {
      id: uuid(),
      artistName: "홍은채",
      artistImg:
        "https://i.namu.wiki/i/VT7_F2XjBGLhAZZkQKn5G1q87SiXvcbtoRjLM6-JRM0yQY7gXmQ8Ret4mW98aCUZvGdCmZWTcervdyd2oCG4x7mKiBekwsOTcRHfO_7O5fmLoNqEqvohux2tLUZ0D5C5XcGC7pXb5qEqeNdxz4EX1g.webp",
      status: false,
    },
  ]);

  //   맴버 클릭 시 해당 맴버가 포커스 되는 함수
  const memberChoice = (id) => {
    const member = artistMember.map((item) => {
      return item.id === id
        ? { ...item, status: true }
        : { ...item, status: false };
    });
    setArtistMember([...member]);
  };

  // 팬레터 추가할 닉네임저장
  const nickNameInputHendler = (e) => {
    setNickNameInput(e.target.value);
  };
  // 팬레터 추가할 내용저장
  const contentInputHendler = (e) => {
    setContentInput(e.target.value);
  };
  // 팬레터 검색할 검색어저장
  const searchInputHendler = (e) => {
    setSearchInput(e.target.value);
  };
  // 유효성 검사 (닉네임)
  const isVaildNickName = () => {
    if (nickNameInput.length === 0) {
      setErrMsg("닉네임이 입력되지 않았습니다. ");
      setErrMsgBool(true);
      return false;
    } else if (nickNameInput.length >= 10) {
      setErrMsg("최대 10자까지 입력할 수 있습니다. ");
      setErrMsgBool(true);
      return false;
    } else {
      setErrMsgBool(false);
      setErrMsg("");
      return true;
    }
  };

  // 유효성 검사 (컨텐츠)
  const isVaildContent = () => {
    if (contentInput.length === 0) {
      setErrMsg("팬레터가 입력되지 않았습니다. ");
      setErrMsgBool(true);
      return false;
    } else if (contentInput.length >= 10) {
      setErrMsg("최대 10자까지 입력할 수 있습니다. ");
      setErrMsgBool(true);
      return false;
    } else {
      setErrMsgBool(false);
      setErrMsg("");
      return true;
    }
  };

  // 유효성 검사 (검색)
  const isVailSearch = () => {
    if (searchInput.length === 0) {
      setErrMsg("검색어 입력되지 않았습니다. ");
      setErrMsgBool(true);
      return false;
    } else {
      setErrMsgBool(false);
      setErrMsg("");
      return true;
    }
  };

  // 팬레터를 추가하는 함수
  const insertFanLetter = () => {
    const fanLetter = {
      createdAt: moment().format("YYYY-MM-DD"),
      nickname: nickNameInput,
      avatar: "https://www.youthblg.org/common/img/default_profile.png",
      content: contentInput,
      writedTo: searchParams.get("artistSort"),
      id: uuid(),
    };

    // 유효성 검사
    if (isVaildNickName() === false) {
      isVaildNickName();
      return;
    } else if (isVaildContent() === false) {
      isVaildContent();
      return;
    } else if (isVaildNickName() === true || isVaildContent() === true) {
      fanLetterData.unshift(fanLetter);
      localStorage.setItem("data", JSON.stringify(fanLetterData));
      setFanLetterData([...fanLetterData]);
      setNickNameInput("");
      setContentInput("");
    }
  };

  // 팬레터를 검색하는 함수
  const searchFanLetter = () => {
    // 유효성 검사
    if (isVailSearch() === false) {
      isVailSearch();
      return;
    } else if (isVailSearch() === true) {
      navigate(
        `/?artistSort=${searchParams.get("artistSort")}&search=${searchInput}`
      );
    }
  };
  // 팬레터를 검색을 초가화하는 함수
  const searchResetFanLetter = () => {
    navigate(`/?artistSort=${searchParams.get("artistSort")}`);
    setSearchInput("");
  };

  // component mount시 true인 맴버담기
  useEffect(() => {
    const memberTrue = artistMember.filter((item) => item.status === true);
    searchParams === null
      ? navigate(`/?artistSort=사쿠라`)
      : searchParams.set("artistSort", `${memberTrue[0].artistName}`);
    setSearchParams(searchParams);
  }, [artistMember]);

  //변경된 data를 localStorage에 저장하기
  useEffect(() => {
    setResultData([...fanLetterData, ...fakeDataState]);
  }, [fanLetterData]);

  useEffect(() => {
    let insertData = [];
    let insertFakeData = [];
    if (
      localStorage.getItem("data") === null &&
      localStorage.getItem("fakeData") === null
    ) {
      localStorage.setItem("data", JSON.stringify([]));
      localStorage.setItem("fakeData", JSON.stringify([...fakeData]));
      insertData = JSON.parse(localStorage.getItem("data"));
      insertFakeData = JSON.parse(localStorage.getItem("fakeData"));
    } else if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify([]));
      insertData = JSON.parse(localStorage.getItem("data"));
      insertFakeData = JSON.parse(localStorage.getItem("fakeData"));
    } else if (localStorage.getItem("fakeData") === null) {
      localStorage.setItem("fakeData", JSON.stringify([...fakeData]));
      insertData = JSON.parse(localStorage.getItem("data"));
      insertFakeData = JSON.parse(localStorage.getItem("fakeData"));
    } else {
      insertData = JSON.parse(localStorage.getItem("data"));
      insertFakeData = JSON.parse(localStorage.getItem("fakeData"));
    }

    setFanLetterData([...insertData]);
    setFakeDataState([...insertFakeData]);
    nickNameRef.current.focus();
  }, []);

  return (
    <StWrap>
      <StContainer>
        {/* 맴버선텍영역 */}
        <ArtistContext.Provider value={{ artistMember, memberChoice }}>
          <ArtistBtn />
        </ArtistContext.Provider>
        <ContentWrap>
          {/* 펜레터 추가 영역 */}
          <InsertContext.Provider
            value={{
              searchParams,
              errMsgBool,
              errMsg,
              nickNameInput,
              nickNameInputHendler,
              nickNameRef,
              contentInput,
              contentInputHendler,
              insertFanLetter,
            }}
          >
            <FanLetterInsertBox />
          </InsertContext.Provider>
          <SeatchAndListWrap>
            {/* Seatch영역 */}
            <SearchContext.Provider
              value={{
                searchParams,
                searchInputHendler,
                searchFanLetter,
                searchInput,
                searchResetFanLetter,
              }}
            >
              <SeatchWrap />
            </SearchContext.Provider>
            {/* list영역 */}
            <ListContext.Provider
              value={{ resultData, searchParams, navigate }}
            >
              <FanLetterListBox />
            </ListContext.Provider>
          </SeatchAndListWrap>
        </ContentWrap>
      </StContainer>
    </StWrap>
  );
}

export default Home;

const ContentWrap = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
`;

const SeatchAndListWrap = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
