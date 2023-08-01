import React from "react";
import { styled } from "styled-components";

const CrewWrite = styled.div`
  width: 1200px;
  margin: 0 auto;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .crewForm > .crewImage {
    width: 100%;
    height: 90%;
    display: flex;
  }
  .crewForm > .crewImage > .button > .inputFileBtn {
    padding: 5px 7px;
    background-color: rgb(0, 149, 246);
    border-radius: 4px;
    color: white;
    cursor: pointer;
    font-size: 15px;
  }
  .crewForm > .crewImage > .button > input {
    display: none;
  }
`;

export default CrewWrite;
