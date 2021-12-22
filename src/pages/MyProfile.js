import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';

const MyProfile = () => {
  const rockets = useSelector(state => state.rockets)
  const missions = useSelector(state => state.missions)
  return (
    <div className="profilePage">
    <div className="myMissions">
        <h2>My Missions</h2>
      <table>
    <thead>
  {missions.missions.map(item => 
     
     
item.reserved ? <tr key={uuidv4()}><th>{item.name}</th></tr>:null
   
    )}
    </thead>
  
 
</table>
    </div>
      
<div className="myRockets">
    <h2>My Rockets

</h2>
<table>
  <thead>
    {rockets.map(item => 
      
      item.reserved ? 
        <tr key={uuidv4()}><th>{item.rocket_name}</th></tr>
       : null
    )}
     
  </thead>
  <tbody>
  </tbody>
  <tfoot>
  </tfoot>
</table>
</div>
  
      </div>
    
  )
}

export default MyProfile
