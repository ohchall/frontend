import React  from 'react';

import { CrewWriteBlock } from './CrewWritePage.style';
import CrewForm from '../../components/crewpost/CrewForm';


const CrewWritePage: React.FC = () => {
  return (
    <CrewWriteBlock>
    <CrewForm />
  </CrewWriteBlock>
  );
}

export default CrewWritePage;
