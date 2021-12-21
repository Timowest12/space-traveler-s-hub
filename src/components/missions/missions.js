import { React } from 'react';

const Missions = () => {
  const missions = [{
    id: 1,
    mission_name: 'Galactic tour',
    description: 'Head for the starts',
    reserved: false,
  },
  {
    id: 2, 
    mission_name: 'Mission Jupiter', 
    description: 'Sun expedition', 
    reserved: true,
  },
  {
    id: 3, 
    mission_name: 'Mars tour', 
    description: 'Mars weather', 
    reserved: true,
  }];

  return (
    <table >
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
          {missions.map((mission) => {
          const {
            id, 
            mission_name, 
            description, 
            reserved,
          } = mission;


    return (
        <tr key={id}>
              <td className="missionName">{mission_name}</td>
              <td className="description">{description}</td>
              <td>
                {reserved
            && (
            <button type="submit" className="activeMember"> Active Member</button>)}
                {!reserved
            && (<button type="submit" className="notMember"> NOT A MEMBER</button>)}
              </td>
              <td>
                {!reserved
              && (<button type="submit" className="joinMission">Join Mission</button>)}
                { reserved
               && (<button type="submit" className="leaveMission">Leave Mission</button>
               )}
              </td>

            </tr>
    )

 })}
 </tbody>
    </table>
  );
};

  export default Missions;