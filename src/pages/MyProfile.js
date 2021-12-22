import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state);
  console.log(rockets.length);
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
          <tbody />
          <tfoot />
        </table>
      </div>

      <div className="myRockets">
        <h2>
          My Rockets

        </h2>
        <table>
          <thead>
            {rockets.map((item) => (
              <tr>
                {item.reserved
                  ? <th>{item.rocket_name}</th>
                  : null}
              </tr>
            ))}

          </thead>
          <tbody />
          <tfoot />
        </table>
      </div>

    </div>

  );
};

export default MyProfile;
