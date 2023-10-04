import React from "react";


function TrackItem (props){
    const loadTrack = (item) => {
      props.getTrack(item)
    }
    return(
        <div className="song-card" onClick={() => loadTrack(props)}> 
            <div className="card-image">
                <img src={props.album ? props.album.images[1].url : ""} alt=""/>
            </div>
            <div className="card-body">
                <h4>{props.name}</h4>
            </div>
        </div>
    )
}

export default TrackItem