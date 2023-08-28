import styled from 'styled-components';

export const CrewMemberBlock = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  padding: 20px 16px 5px;
  font-weight: bold;
  border-bottom: 0.5px solid #B7B7B7;
`;

export const ApplicantContainer = styled.div`
  width: calc(100% - 32px);
  margin: 16px;
`;

export const Applicant = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(n+2) {
    margin-top: 25px;
  }
`;

export const ApplicantProfile = styled.div`
  display: flex;
  align-items: center;
  
  & > span {
    display: inline-block;
    width: 52px;
    height: 52px;
    font-size: 26px;
    background-color: #BAF2FF;
    border-radius: 50%;
    text-align: center;
    line-height: 52px;
    margin-right: 6px;
  }

  & > div {

    & > span {
      font-size: 12px;
      color: #5B5B5B;
    }
  }
`;

export const ApplicantButtonContainer = styled.div`
  display: flex;

  & > button {
    width: 70px;
    height: 28px;
    border-radius: 10px;
    border: none;
    background-color: #F2F2F2;
    font-size: 12px;
  }

  & > button:nth-child(1) {
    margin-right: 4px;
    background-color: #EF902A;
  }
`;

export const ParticipantContainer = styled.div`
  width: calc(100% - 32px);
  margin: 16px;
`;

export const Participant = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &:nth-child(n+2) {
    margin-top: 25px;
  }
`;

export const ParticipantProfile = styled.div`
  display: flex;
  align-items: center;
  
  & > span {
    display: inline-block;
    width: 52px;
    height: 52px;
    font-size: 26px;
    background-color: #BAF2FF;
    border-radius: 50%;
    text-align: center;
    line-height: 52px;
    margin-right: 6px;
  }
`;

export const ParticipantProfileInner = styled.div`
  & > div {
    display: flex;

    & > p {
      margin-right: 4px;
    }

    & > span {
      display: block;
      padding: 2px 4px;
      font-size: 12px;
      border: 0.5px solid #111111;
    }
  }

  & > span {
    font-size: 12px;
    color: #5B5B5B;
  }
`;
