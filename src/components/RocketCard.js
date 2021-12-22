import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const RocketCard = (data) => {
  const { data: dataNew } = data;
  const {
    id, flickr_images: flickrImages, rocket_name: rocketName, reserved: reserv, description,
  } = dataNew;
  const [isReserved, setIsreserved] = useState(reserv);

  const dispatch = useDispatch();
  const reserveRocket = () => {
    dispatch({
      type: 'RESERVE_ROCKET',
      payload: id,
    });
    setIsreserved(true);
  };
  const cancelReservation = () => {
    dispatch({
      type: 'CANCEL_RESERVATION',
      payload: id,
    });
    setIsreserved(false);
  };
  return (
    <div id={uuidv4()} className="rocketcard">
      <div className="rocketimagewrapper">
        <img className="rocketimage" key={isReserved} src={flickrImages} alt="" />
      </div>
      <div className="rightcard">
        <h5 className="rockettitle">{rocketName}</h5>
        <p className="rocketdescription">
          {reserv ? <span className="reservedbadge">reserved</span> : <span />}

          {description}
        </p>
        {reserv
          ? <button type="button" onClick={cancelReservation} className="cancelReservation">Cancel reservation</button>
          : <button type="button" onClick={reserveRocket} className="reservebutton">Reserve Rocket</button>}

      </div>
    </div>
  );
};

export default RocketCard;
