import React from 'react'

const RocketCard = (data) => {
    //alert(data.data.rocket_name)
    return (
        <div className="rocketcard">
            <div className="rocketimagewrapper">
            <img className="rocketimage" src={data.data.flickr_images} alt="" />
            </div>
            <div className="rightcard">
            <h5 className="rockettitle">{data.data.rocket_name}</h5>
            <p className="rocketdescription">{data.data.description}</p>
            <button className="reservebutton">Reserve Rocket</button>
            </div>
        </div>
    )
}

export default RocketCard
