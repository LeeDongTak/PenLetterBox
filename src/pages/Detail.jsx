import React, { useState } from "react";
import { StWrap, StContainer } from "../styed/commonStyle";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../components/detail/Modal";
import Button from "../components/commom/Button";
import DetailHeader from "../components/detail/DetailHeader";
import DetailContainer from "../components/detail/DetailContainer";
import DetailBtnBox from "../components/detail/DetailBtnBox";
import { DetailContext, ModalContext } from "../context/detailContext";

function Detail() {
  const { id } = useParams();
  const localStoData = JSON.parse(localStorage.getItem("data"));
  const localStofakeData = JSON.parse(localStorage.getItem("fakeData"));
  const fanLetterData = [...localStoData, ...localStofakeData];
  const resultData = fanLetterData.find((x) => x.id === id);
  const navigate = useNavigate();

  const [updContentInput, setUpdContentInput] = useState(resultData.content);
  const [updContentShow, setUpdContentShow] = useState(false);
  const [modalBool, setModalBool] = useState(false);
  const [modalText, setModalText] = useState("");

  // 수정을 위한 인풋 핸들러
  const updContentHandler = (e) => {
    setUpdContentInput(e.target.value);
  };

  // 수정하는 input을 보여주는 함수
  const updInputShow = () => {
    setUpdContentShow(!updContentShow);
  };

  // 수정을 완료하는 함수
  const updCommit = (id) => {
    const updData = localStoData.map((item) => {
      return item.id === id ? { ...item, content: updContentInput } : item;
    });
    const updFakeData = localStofakeData.map((item) => {
      return item.id === id ? { ...item, content: updContentInput } : item;
    });
    localStorage.setItem("data", JSON.stringify(updData));
    localStorage.setItem("fakeData", JSON.stringify(updFakeData));
    navigate(`/?artistSort=${resultData.writedTo}`);
  };

  // 삭제하는 함수
  const delCommit = (id) => {
    const delData = localStoData.filter((item) => {
      return item.id != id;
    });
    const delFakeData = localStofakeData.filter((item) => {
      return item.id != id;
    });
    localStorage.setItem("data", JSON.stringify(delData));
    localStorage.setItem("fakeData", JSON.stringify(delFakeData));
    navigate(`/?artistSort=${resultData.writedTo}`);
  };

  // 모달을 띄우는 함수
  const modalShow = (msg, bool) => {
    setModalText(msg);
    setModalBool(!modalBool);
    setUpdContentShow(bool);
  };

  return (
    <StWrap>
      {/* 모달창 */}
      {modalBool === true ? (
        <ModalContext.Provider
          value={{ modalShow, updCommit, delCommit, modalText, id }}
        >
          <Modal />
        </ModalContext.Provider>
      ) : null}
      <StContainer>
        <DetailContext.Provider
          value={{
            resultData,
            navigate,
            updContentShow,
            updContentHandler,
            updContentInput,
            updInputShow,
            modalShow
          }}
        >
          <Button Sortation="홈" />
          <DetailHeader />
          <DetailContainer />
          <DetailBtnBox />
        </DetailContext.Provider>
      </StContainer>
    </StWrap>
  );
}

export default Detail;
