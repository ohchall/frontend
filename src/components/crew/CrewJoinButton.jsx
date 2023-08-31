import { ButtonWrapper } from './CrewJoinButton.style';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useQuery,
  useQueryClient,
  useMutation } from '@tanstack/react-query';
import {
  getCrew,
  joinCrew } from '../../api/CrewApi';
import { useState } from 'react';

function CrewJoinButton() {
  const params = useParams();
  const navigate = useNavigate();
  const [isJoinButtonDisabled, setJoinButtonDisabled] = useState(false);
  const queryClient = useQueryClient();
  const joinMutation = useMutation(joinCrew, {
    onSuccess: () => {
      queryClient.invalidateQueries(['crewApplicant']);
      // console.log('Sent application successfully to join crew!');
    }
  });

  const onClickCrewMember = () => {
    navigate(`/crew/member/${params.id}`);
  };

  const onClickJoinCrew = () => {
    joinMutation.mutate(params.id);
    setJoinButtonDisabled(true);
    alert('크루 참가 신청 완료!');
  }

  const {
    data: crew,
    isLoading,
    error,
  } = useQuery(['crew', params.id], () => getCrew(params.id));

  return (
    <>
    {isLoading && 'Loading...'}
    {error && 'An error has occured: ' + error.message}
    {crew?.data.owner === false &&
    <ButtonWrapper>
      <button
        disabled={isJoinButtonDisabled}
        onClick={onClickJoinCrew}
      >
        {isJoinButtonDisabled ? '신청 완료' : '크루 참여하기'}
      </button>
    </ButtonWrapper>
    }

    {crew?.data.owner === true &&
    <ButtonWrapper>
      <button
        onClick={onClickCrewMember}
      >
        크루 멤버 관리하기
      </button>
    </ButtonWrapper>
    }
    </>
  )
};

export default CrewJoinButton;
