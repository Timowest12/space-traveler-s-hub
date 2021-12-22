import React from 'react'
import { useSelector } from 'react-redux'
import RocketCard from '../components/RocketCard'
import { v4 as uuidv4 } from 'uuid';

const Rockets = () => {
    const rockets = useSelector(state => state.rockets)
    return (
        <div>
            {rockets.map((item) => 
            <RocketCard key={uuidv4()} data={item} />
            )}
            
        </div>
    )
}

export default Rockets
