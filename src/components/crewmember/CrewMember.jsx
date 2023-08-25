import {
  CrewMemberBlock,
  Header,
  P11nRequestContainer,
  P11nRequest,
  P11nRequestProfile,
  P11nRequestButtonContainer,
  P11nContainer,
  P11n,
  P11nProfile,
  P11nProfileInner } from './CrewMember.style';

function CrewMember() {
  return (
    <CrewMemberBlock>
      <Header>
        크루 참여 요청(4)
      </Header>

      <P11nRequestContainer>
        <P11nRequest>
          <P11nRequestProfile>
            <span>
              김
            </span>

            <div>
              <p>
                김오챌
              </p>
              <span>
                테린이 행복전도사
              </span>
            </div>
          </P11nRequestProfile>

          <P11nRequestButtonContainer>
            <button>
              확인
            </button>

            <button>
              취소
            </button>
          </P11nRequestButtonContainer>
        </P11nRequest>
      </P11nRequestContainer>

      <Header>
        참여 멤버(3)
      </Header>

      <P11nContainer>
        <P11n>
          <P11nProfile>
            <span>
              오
            </span>

            <P11nProfileInner>
              <div>
                <p>
                  오늘만산다
                </p>
                <span>
                  크루장
                </span>
              </div>
              <span>
                어제도 내일도 없다
              </span>
            </P11nProfileInner>
          </P11nProfile>
        </P11n>
      </P11nContainer>
    </CrewMemberBlock>
  )
};

export default CrewMember;
