import React, {useState} from "react";
import Search from "../Screens/Search";
import token from "../token/config";
import Artist from './../Screens/Artist';

const URL = "https://api.spotify.com";

function Home(props){
    const [artist , setArtist] = useState(false) 

    const searchHandler = async (artist) =>{
     console.log('artist name =',artist)
      await fetch(`${URL}/v1/search?q=${artist}&type=artist&limit=1`,{
        headers: {
            Authorization : `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(res =>{
        console.log('artists =',res)
        setArtist(res ? res.artists.items[0] : false)
      }).catch(err => console.log(err.message))
    }

    return(
       <section id="home">
        <div className="container">
            <div className="row">
                <Search handler ={searchHandler} />
            </div>
        </div>
        
        { 
           artist ? (
            <div className="row">
                <Artist info={artist}/>
            </div>
        ) : null
        }  
       </section>
    )
}

export default Home