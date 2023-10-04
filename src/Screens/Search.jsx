import React, { useState } from "react";

function Search(props){
    const [artist,setArtist] = useState('');

    const getName = (e) =>{
        setArtist(e.target.value);
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        props.handler(artist)
    }

    return(
       <div className="card">
        <div className="card-header">
            <h3>Enter Artist Name</h3>
        </div>
        <div className="card-body">
            <form className="form" onSubmit={submitHandler}>
                <div className="form-group">
                    <input type="search" name="artist" id="artist" value={artist} onChange={getName} required />
                    <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </form>
        </div>
       </div>
    )
}

export default Search