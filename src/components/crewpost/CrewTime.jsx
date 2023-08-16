import { useEffect, useState } from 'react';
import styled from 'styled-components';

function CrewTime({setCrewTime}) {
  const [timeOptions, setTimeOptions] = useState([]);

  useEffect(() => {
    let hours = Array.from({length: 18}, (_, i) => (i + 6) % 24);  
    let minutes = Array.from({length: 6}, (_, i) => i * 10);
    let options = [];

    hours.forEach(hour => {
      if (hour === 23) {  
        options.push('오후 11:00');
        return;
      }
  
      minutes.forEach(minute => {
        let period = hour < 12 ? '오전' : '오후';
        let formattedHour = hour <= 12 ? hour : hour - 12;
        let timeFormat = `${period} ${String(formattedHour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
        options.push(timeFormat);
      });
    });

    setTimeOptions(options);
    if (options.length > 0) {
      setCrewTime(options[0]);
    }
  }, [setCrewTime]);

  const handleTimeChange = (e) => {
    setCrewTime(e.target.value);
  };

  return (
    <CrewTimes className="times">
      <select onChange={handleTimeChange}>
        {timeOptions.map((time, idx) => <option key={idx} value={time}>{time}</option>)}
      </select>
    </CrewTimes>
  );
}

export default CrewTime;

const CrewTimes = styled.div`
    .times>select{border:none;}
`
