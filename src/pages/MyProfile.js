import React from 'react'

const MyProfile = () => {
  return (
    <div className="profilePage">
    <div className="myMissions">
        <h2>My Missions</h2>
      <table>
  <thead>
    <tr>
      <th>Telstar</th>
    </tr>
     <tr>
      <th>SES</th>
    </tr>
     <tr>
      <th>AsiaSat</th>
    </tr>
     <tr>
      <th>ABS</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
  <tfoot>
  </tfoot>
</table>
    </div>
      
<div className="myRockets">
    <h2>My Rockets

</h2>
<table>
  <thead>
     <tr>
      <th>Falcon 9</th>
    </tr>
     <tr>
      <th>Falcon Heavy</th>
    </tr>
     <tr>
      <th>Starship</th>
    </tr>
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
