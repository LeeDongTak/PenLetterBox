import React, { useContext } from "react";
import Button from "../commom/Button";
import styled from "styled-components";
import { InsertContext } from "../../context/homeContext";

function FanLetterInsertBox() {
  const {
    searchParams,
    errMsgBool,
    errMsg,
    nickNameInput,
    nickNameInputHendler,
    nickNameRef,
    contentInput,
    contentInputHendler,
  } = useContext(InsertContext)
  return (
    <InputBox>
      <TitleBox>
        {searchParams.get("artistSort")}
        에게 팬레터 보내기
      </TitleBox>
      {errMsgBool === true ? <ErrMsg>{errMsg}</ErrMsg> : null}
      <ListInsertNickName
        value={nickNameInput}
        placeholder="닉네임을 입력하세요"
        type="text"
        onChange={nickNameInputHendler}
        ref={nickNameRef}
      />
      <ListInsertContent
        value={contentInput}
        placeholder="내용을 입력하세요"
        onChange={contentInputHendler}
        cols="30"
        rows="5"
      ></ListInsertContent>
      <Button Sortation="팬레터 등록" />
    </InputBox>
  );
}

export default FanLetterInsertBox;


// style
// input 영역
const InputBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.8rem;
  text-shadow: 0 0 5px #fff;
`;

const ListInsertNickName = styled.input`
  width: 80%;
  margin-top: 10%;
  padding: 2%;
  border: 0;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  transition: 0.2s;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px #fff;
  }
`;

const ListInsertContent = styled.textarea`
  width: 80%;
  border-radius: 5px;
  margin-top: 10%;
  padding: 2%;
  font-size: 1.3rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);
  transition: 0.2s;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 2px #fff;
  }
`;

// 에러 메시지
const ErrMsg = styled.p`
  color: #f66;
  font-weight: bold;
  font-size: 1.1rem;
  text-shadow: 0px 0px 5px #ccc;
`;
