import { CrewDetaiPageBlock } from './CrewDetailPage.style';
import CrewDetail from '../../components/CrewDetail/CrewDetail';
import MyProfile from '../../components/MyProfile/MyProfile';

function CrewDetailPage() {
  return (
    <CrewDetaiPageBlock>
      <MyProfile />
      <CrewDetail />
    </CrewDetaiPageBlock>
  )
};

export default CrewDetailPage;
