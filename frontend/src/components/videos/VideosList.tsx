import React, { useEffect, useState } from 'react'
import axios from 'axios' // -> Get the data
import {Video} from './Video' // -> Interface VIDEO MODEL


const VideosList = () => {

  //Array of videos
  const [videos, setVideos] = useState<Video[]>([]);

  //Get videos from backend
  const getAllVideos = async () => {
    const response = await axios.get('http://localhost:8080/videos')
    setVideos(response.data);       
  }

  useEffect(() => {
    getAllVideos();
  }, [])
  
  return (
    <div>
        {videos.map(video => {
          return <div>
            <h1>{video.title}</h1>
          </div>
        })}
    </div>
  )
}

export default VideosList
