import { CrewPageBlock } from './CrewPate.style';
import MyProfile from '../../components/MyProfile/MyProfile';
import Crew from '../../components/Crew/Crew';

function CrewPage() {
  return (
    <CrewPageBlock>
      <MyProfile />
      <Crew />
    </CrewPageBlock>
  )
}

export default CrewPage;
