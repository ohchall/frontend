import { CrewDetaiPageBlock } from './CrewDetailPage.style';
import CrewDetail from '../../components/crew/CrewDetail';
import MyProfile from '../../components/myprofile/MyProfile';

function CrewDetailPage() {
  return (
    <CrewDetaiPageBlock>
      <MyProfile />
      <CrewDetail />
    </CrewDetaiPageBlock>
  )
};

export default CrewDetailPage;
