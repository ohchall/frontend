import { useParams } from 'react-router-dom';
import {
  CrewMemberBlock,
  Header,
  ApplicantContainer,
  Applicant,
  ApplicantProfile,
  ApplicantButtonContainer,
  ParticipantContainer,
  Participant,
  ParticipantProfile,
  ParticipantProfileInner } from './CrewMember.style';
import {
  useQuery,
  useMutation,
  useQueryClient } from '@tanstack/react-query';
import { 
  getCrewApplicants,
  getCrewParticipants,
  approveCrewApplicant } from '../../api/CrewApi';

function CrewMember() {
  const params = useParams();

  const queryClient = useQueryClient();
  const approveMutation = useMutation(approveCrewApplicant, {
    onSuccess: () => {
      queryClient.invalidateQueries(['crewApplicants']);
      queryClient.invalidateQueries(['crewParticipants']);
      // console.log('Approve applicant successfully!');
    }
  });

  const applicantsObject = {
    crewRecruitmentId: params.id,
    isAccepted: false
  };

  const participantsObject = {
    crewRecruitmentId: params.id,
    isAccepted: true
  };

  const {
    data: applicantsData,
    isLoading: applicantsIsLoading,
    error: applicantsError,
  } = useQuery(['crewApplicants'], () => getCrewApplicants(applicantsObject));

  const {
    data: participantsData,
    isLoading: participantsIsLoading,
    error: participantsError,
  } = useQuery(['crewParticipants'], () => getCrewParticipants(participantsObject));

  const onClickApproveApplicant = (applyerEmail) => {
    const approveData = {
      crewRecruitmentId: params.id,
      applyerEmail
    };
    approveMutation.mutate(approveData);
  }

  return (
    <CrewMemberBlock>
      <Header>
        크루 참여 요청(4)
      </Header>

      <ApplicantContainer>
        {applicantsIsLoading && 'Loading...'}
        {applicantsError && 'An error has occured: ' + applicantsError.message}
        {applicantsData && applicantsData?.data.map((member) => (
        <Applicant
          key={member.joinCrewId}
        >
          <ApplicantProfile>
            <span>
              {member.nickName.substr(0, 1)}
            </span>

            <div>
              <p>
                {member.nickName.length > 13 ? member.nickName.substring(0, 12) + '...' : member.nickName}
              </p>
              <span>
                테린이 행복전도사
              </span>
            </div>
          </ApplicantProfile>

          <ApplicantButtonContainer>
            <button
              onClick={() => onClickApproveApplicant(member.email)}
            >
              확인
            </button>

            <button>
              취소
            </button>
          </ApplicantButtonContainer>
        </Applicant>
        ))}
      </ApplicantContainer>

      <Header>
        참여 멤버(3)
      </Header>

      <ParticipantContainer>
        {participantsIsLoading && 'Loading...'}
        {participantsError && 'An error has occured: ' + participantsError.message}
        {participantsData && participantsData?.data.map((member, idx) => (
        <Participant
          key={member.joinCrewId}
        >
          <ParticipantProfile>
            <span>
              {member.nickName.substr(0, 1)}
            </span>

            <ParticipantProfileInner>
              <div>
                <p>
                  {member.nickName.length > 13 ? member.nickName.substring(0, 12) + '...' : member.nickName}
                </p>
                {idx === 0 &&
                <span>
                  크루장
                </span>
                }
              </div>
              <span>
                어제도 내일도 없다
              </span>
            </ParticipantProfileInner>
          </ParticipantProfile>
        </Participant>
        ))}
      </ParticipantContainer>
    </CrewMemberBlock>
  )
};

export default CrewMember;
