import React, { useEffect, useState } from 'react'
import {Video} from './Video' // -> Interface VIDEO MODEL
import * as videoService from './VideoServices'
import VideoItem from './VideoItem';


const VideosList = () => {

  //State videos[] - Video interface -
  const [videos, setVideos] = useState<Video[]>([]);

  const getAllVideos = async () => {
    const res = await videoService.getVideos();

    const formatedVideos = res.data.map(video => {
      return{
        ...video,
        createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
        updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
      }
    })
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setVideos(formatedVideos);
  }

  useEffect(() => {
    getAllVideos();
  }, [])
  
  return (
    <div className="row">
        {videos.map(video => {
          return <VideoItem video={video} key={video._id} getAllVideos={getAllVideos}/>
        })}
    </div>
  )
}

export default VideosList
