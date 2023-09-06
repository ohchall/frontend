import CommunityDetail from "../../components/community/CommunityDetail";
import { styled } from "styled-components";

function CommunityDetailPage() {
  return (
    <CommunityDetailSection>
      <CommunityDetail></CommunityDetail>
    </CommunityDetailSection>
  );
}

export default CommunityDetailPage;

const CommunityDetailSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  & h1 {
    font-size: 20px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
