import React, { useEffect, useState } from 'react'
import {Video} from './Video' // -> Interface VIDEO MODEL
import * as videoService from './VideoServices'


const VideosList = () => {

  //State videos[] - Video interface -
  const [videos, setVideos] = useState<Video[]>([]);

  const getAllVideos = async () => {
    const res = await videoService.getVideos();
    setVideos(res.data);
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
