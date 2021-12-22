import React from 'react'
import { useSelector } from 'react-redux'

const MyProfile = () => {
  const rockets = useSelector(state => state.rockets)
  const missions = useSelector(state => state.missions)
  console.log(missions.missions.length)
  return (
    <div className="profilePage">
    <div className="myMissions">
        <h2>My Missions</h2>
      <table>
 
  {missions.missions.map(item => 
     
     
item.reserved ? <tr><th>{item.name}</th></tr>:null
   
    )}
    
  
 
</table>
    </div>
      
<div className="myRockets">
    <h2>My Rockets

</h2>
<table>
  <thead>
    {rockets.map(item => 
      
      item.reserved ? 
        <tr><th>{item.rocket_name}</th></tr>
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
