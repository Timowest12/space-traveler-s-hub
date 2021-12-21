import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reserveRocket } from '../actions'

const RocketCard = (data) => {
    const [isReserved,setIsreserved] = useState(data.data.reserved)
    const reserved = useSelector(state => state)

    const dispatch = useDispatch()
    //alert(data.data.rocket_name)
    const reserveRocket = () => {
        dispatch({
            type: 'RESERVE_ROCKET',
            payload: data.data.id
          })
          setIsreserved(true)
    }
    const cancelReservation = () => {
        dispatch({
            type: 'CANCEL_RESERVATION',
            payload: data.data.id
          })
          setIsreserved(false)
    }
    return (
        <div className="rocketcard">
            <div className="rocketimagewrapper">
            <img className="rocketimage" src={data.data.flickr_images} alt="" />
            </div>
            <div className="rightcard">
            <h5 className="rockettitle">{data.data.rocket_name}</h5>
            <p className="rocketdescription">
                {data.data.reserved ? <span className="reservedbadge">reserved</span>: <span></span>}
                
                {data.data.description}</p>
            {data.data.reserved ? 
            <button onClick={cancelReservation} className="cancelReservation">Cancel reservation</button> 
            :
            <button onClick={reserveRocket} className="reservebutton">Reserve Rocket</button>}
           
            
            
            
            </div>
        </div>
    )
}

export default RocketCard
