import { CrewPageBlock } from './CrewPage.style';
import MyProfile from '../../components/myprofile/MyProfile';
import Crew from '../../components/crew/Crew';

function CrewPage() {
  return (
    <CrewPageBlock>
      <MyProfile />
      <Crew />
    </CrewPageBlock>
  )
}

export default CrewPage;
