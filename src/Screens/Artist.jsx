import React from "react";
import { Link} from "react-router-dom"

function Artist(props){
    const { id, name, images, popularity, followers , genres} = props.info

    return(
        <div className="artist-card">
            <div className="card-image">
             <img src={images ? images[0].url : "#"} alt="" className="card-img"/>  
            </div> 
           <div className="card-body">
            <h3>{name}</h3>
            <ul className="info">
                <li>
                    <strong>Genres</strong>
                    <span> {genres} </span>
                </li>
                <li>
                    <strong>Followers</strong>
                    <span> {followers ? followers.total : ""} </span>
                </li>
                <li>
                    <strong>Popularity</strong>
                    <span> {popularity}  % </span>
                </li>
            </ul>
            <div className="link">
            <Link to={`/track/artist/${id}`}>Tracks</Link>
            </div>
           </div>
        </div>
    )
}

export default Artist