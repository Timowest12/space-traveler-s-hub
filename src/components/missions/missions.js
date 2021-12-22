import { React, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissionsData, allowJoinMission, allowLeaveMission } from '../../pages/missions';

const Missions = () => {
const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

const joinHandler = (id) => {
    dispatch(allowJoinMission(id));
  };

  const leaveHandler = (id) => {
    dispatch(allowLeaveMission(id));
  };
  useEffect(() => dispatch(getMissionsData()), []);

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
            name, 
            description, 
            reserved,
          } = mission;


    return (
        <tr key={id}>
              <td className="missionName">{name}</td>
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
              && (<button type="submit" className="joinMission" onClick={() => joinHandler(id)}>Join Mission</button>)}
                { reserved
               && (<button type="submit" className="leaveMission" onClick={() => leaveHandler(id)}>Leave Mission</button>
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