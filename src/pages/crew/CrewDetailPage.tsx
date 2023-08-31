import { CrewDetaiPageBlock } from './CrewDetailPage.style';
import CrewDetail from '../../components/crew/CrewDetail';
import CrewJoinButton from '../../components/crew/CrewJoinButton';

function CrewDetailPage() {
  return (
    <>
      <CrewDetaiPageBlock>
        <CrewDetail />
      </CrewDetaiPageBlock>
      
      <CrewJoinButton />
    </>
  );
}

export default CrewDetailPage;
