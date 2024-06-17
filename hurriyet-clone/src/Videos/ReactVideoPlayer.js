import React, { useState } from 'react'
import  {DefaultPlayer as Video} from 'react-html5video';
import videoBgg from './videoBg.mp4'
import 'react-html5video/dist/styles.css'
import envtt from './en.vtt'
import trvtt from './tr.vtt'
import ReactPlayer from 'react-player';
 

const ReactVideoPlayer = () => {

  return (

    <div className='video-wrapper'>
        {
          <ReactPlayer
          light = {true}
          controls = {true}
          url = {videoBgg}
          height="500px"
          width="850px"
          />
        }
    </div>
  )
}

export default ReactVideoPlayer;



{/* 
  const [showSubtitles, setShowSubtitles] = useState(false);

  const toggleSubtitles = () => {
    setShowSubtitles(!showSubtitles);
  }


<div className='video-container'>
<Video loop muted
  controls={['PlayPause', 'Seek', 'Time', 'Fullscreen', 'Volume', 'Subtitles']}
  poster="https://image.hurimg.com/i/hurriyet/75/866x494/660540dd407d0ec521c0bb40.jpg"
  onCanPlayThrough={() => {
    // Do stuff
  }}>
  <source src={videoBgg} type="video/webm" />
  {showSubtitles && <track label="English" kind="subtitles" srcLang="en" src={envtt} default />}
  {showSubtitles &&<track label="Türkçe" kind="subtitles" srcLang="tr" src={trvtt} />}
</Video>
<button onClick={toggleSubtitles} style={{position: 'absolute', top: 4, right: 4, color:'white', fontSize: 11}}>{showSubtitles ? 'S' : 'S'}</button>
</div> 

*/}