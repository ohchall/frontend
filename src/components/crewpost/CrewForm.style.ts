import { css, styled } from "styled-components";

export const CrewForms =styled.form`
  width:100%;
  height:100%;
  padding:6px 16px;
  margin-top:10px;
`;

const flexStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CrewFormStyles= css`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const CrewFormContents = styled.div`
  width:100%;
  height:50%;
  ${flexStyles}
  @media screen and (max-width:500px){
    height:66%;
  }
  & > .identicalStyle{
    border-bottom:1px solid #999999;
    ${CrewFormStyles};
    padding:5px 6px;
    @media screen and (max-width: 500px) {
      padding:5px 10px;
    }
    strong {
      width: 16%;
      margin-right: 10px;
      font-size: 15px;
      font-weight: 600;
      color:#5b5b5b;
    }
    input{
      width:84%;
      border:none;
      outline:none;
    }
    input.focused::placeholder {
      color: #111111;
    }
    textarea{
      width:84%;
      border:none;
      outline:none;
      font-size:14px;
      margin: 0 6px;
      font-weight: 400;
      line-height: 1.2;
      letter-spacing: -0.28px;
      font-size:16px;
      resize:none;
      max-height:150px;
      overflow-y:auto;

      @media screen and (max-width: 500px) {
        font-size:14px;
        max-height:130px;
      }
    }
    textarea.focused::placeholder {
      color: #111111;
    }

    & > div{
      width:84%;
      display:flex;
    }

    & > div > select{
      border:none;
      outline:none;
      color: #b7b7b7;
      font-size:14px;
    }
  }
`;

export const CrewTitle= styled.div`
  ${CrewFormStyles}
  & > input {
    width: 100% !important;
    font-size:20px;
  }
`;

export const CrewContent=styled.div`
 ${CrewFormStyles}
`;

export const CrewName=styled.div`
  ${CrewFormStyles}
`;

export const CrewDates=styled.div`
  ${CrewFormStyles}
`;

export const CrewTimes=styled.div`
  ${CrewFormStyles}
  & > div {justify-content:flex-start}
  & > strong{width:16%;}
`;

export const CrewLocation=styled.div`
  ${CrewFormStyles}
`;

export const CrewTotalMembers=styled.div`
  ${CrewFormStyles}
  & > div> input[type="number"]::-webkit-inner-spin-button,
  & > div> input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  & > div> input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const CrewButtons=styled.div`
  ${CrewFormStyles}
  padding:10px 0;
  @media screen and (max-width: 500px) {
    padding:8px 0;
  }
  & > .submit{
    width:100%;
    background-color: ${props => props.color || '#ef902a'};
    color: ${props => props.color || '#111111'};
    font-weight:900;
    font-size:16px;
    border:none;
    padding: 6px 0;
    border-radius: 5px 5px 5px 5px;
  }
`;