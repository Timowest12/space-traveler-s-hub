import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import RocketCard from '../components/RocketCard';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  return (
    <div>
      {rockets.map((item) => <RocketCard key={uuidv4()} data={item} />)}

    </div>
  );
};

export default Rockets;
