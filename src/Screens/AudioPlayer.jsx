import React ,{useState} from 'react';

function AudioPlayer(props){
    const {name,preview_url,duration_ms, album} = props.track;
  
    const [audio,setAudio] =useState(null)
    const [play , setPlay] = useState(false)
    const[ url,setUrl] = useState(false)

    const trackIcon =(item) =>{
        if(!item) return <span>No Track</span>
        if(play && url=== item) return<button onClick={() => playAudio(item)} className='pause'>Pause</button>
        return <button onClick={() => playAudio(item)} className='play'>Play</button>
    }

    const playAudio =(item) => {
        const myAudio = new Audio(item);

        if(!play) {
            //initial play
            myAudio.play()
            setPlay(true)
            setAudio(myAudio);
            setUrl(item)
        } else {
            //pause & play
           audio.pause();
           if(url === item){
            //pause
            setPlay(false)
           }else{
            //pause to play
            myAudio.play()
            setAudio(myAudio)
            setUrl(item)
           }
        }
    }
    return(
        <div className="audio-container">
            <div className="content">
                <div className="audio-image">
                    {
                      album ? <img src={album ? album.images[1].url : ""} alt=''/> :null
                    }
                </div>
                <div className="audio-info">
                    <h4>{name}</h4>
                </div>
            </div>
            <div className="player">
                <p>{trackIcon(preview_url)} {duration_ms} </p>
            </div>
        </div>
    )
}

export default AudioPlayer