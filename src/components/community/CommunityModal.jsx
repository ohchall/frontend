import React, { useState } from 'react';
import CommunityForm from './CommunityForm';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';



const CommunityModal = ({ isOpen, closeModal }) => {
  const navigate = useNavigate();

  const closeHandleModal = () => {
    closeModal();
    navigate("/community");
  };

  if (!isOpen) return null;

  return (
    <ModalStyles>
      <div>
        <CommunityForm />
        <button type="button" onClick={closeHandleModal}>닫기</button>
      </div>
    </ModalStyles>
  );
}



const ModalStyles=styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #ffffff;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 78%;
  justify-content: center;
 &>div{
  width:100%;
  height:100%;
 }
 &>div>button{
  position:absolute;
  top: 86%;
  left: 40%;
  width:20%;
  height:6%;
  text-align:center;
  border: 1px solid #111111;
  background: transparent;
  cursor:pointer;
  @media screen and (max-width:500px){
    top: 93.5%;
    left: 39%;
    height: 5%;
  }
 }
`
export default CommunityModal;
