import React ,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import token from "../token/config";
import TrackItem from "./TrackItem"
import AudioPlayer from "./AudioPlayer"

const URL = "https://api.spotify.com"

function Tracks(props){
    const [ songs,setSongs] = useState([])
    const [track,setTrack] = useState(false)
    const params = useParams()
    console.log('params', params)

    const searchTracks = async () => {
        await fetch(`${URL}/v1/artists/${params.id}/top-tracks?market=IN`,{
            headers:{
                Authorization :`Bearer ${token}`
            }
        }).then(res => res.json())
        .then(res =>{
            console.log('tracks =', res)
             setSongs(res.tracks)
         } ).catch(err => console.log(err.message))
    }

    //useEffect (Callback function ,[dependencies])
    useEffect(() =>{
        searchTracks()
    },[])

    const getTrackInfo = (track) =>{
        setTrack(track)
    }

    return(
        <div className="track-container">
            <div className="title">
                <h1>Tracks</h1>
            </div>

            <div className="card-container">
                {
                    songs && songs.map((item,index) =>{
                        return (
                             <TrackItem key= {index } {...item}  getTrack ={getTrackInfo} /> )
                    })
                }
            </div>
            <AudioPlayer track={track} />
        </div>
    )
}

export default Tracks


/* 
  mount
  useEffect(function(){

  } ,[])

 update
 useEffect(function(){

 },[state,props]) 


 un mount
 useEffect(function(){
    return () =>{

    }
  } ,[])


*/