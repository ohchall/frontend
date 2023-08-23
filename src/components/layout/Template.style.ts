import styled from "styled-components";
import illustration from "../../assets/Background.jpeg";

export const TemplateBlock = styled.div`
  position: relative;
  width: 430px;
  height: 100vh;
  background-color: white;
  align-items: center;

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const Background = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;

  padding-left: 20%;
  padding-right: 20%;

  background-image: url(${illustration});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  gap: 30px;

  @media screen and (max-width: 1366px) {
    /* background-image: url(${illustration}); */
    display: flex;
    justify-content: center;

    padding-left: 0;
    padding-right: 0;
  }
`;
