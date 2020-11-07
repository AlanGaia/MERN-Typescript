import React from "react";
import { Video } from "./Video";
import ReactPlayer from "react-player";
import {useHistory} from 'react-router-dom';
import * as VideoService from './VideoServices'

import'./VideoItem.css';


interface Props {
  video: Video;
  getAllVideos: () => void;
}

const VideoItem = ({ video, getAllVideos }: Props) => {

  const handleDelete = async (id: string) => {
    //delete the video selected
    await VideoService.deleteVideo(id)
    //reload videos without deleted one
    getAllVideos();

  }

  const history = useHistory();

  return (
    <div className="col-md-4">
      <div className="card card-body video-card">
        <div className="d-flex justify-content-between">
          <h1 onClick={() => history.push(`/update/${video._id}`)}>{video.title}</h1>
          <span className="text-danger" 
            onClick = {() => {
              if(window.confirm('Delete the video?')) video._id && handleDelete(video._id)
            }}
          >Delete</span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
