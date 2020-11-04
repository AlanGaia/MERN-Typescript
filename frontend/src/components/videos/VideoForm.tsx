import React, { ChangeEvent, FormEvent, useState } from "react";
import {toast} from "react-toastify/";
import {Video} from './Video';
import * as VideoService from './VideoServices'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {

  const initialState = {
    title: '',
    url: '',
    description:''
  }

  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e: InputChange) => {
    setVideo({...video, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await VideoService.createVideo(video);
    if(res.status === 200){
      toast.success('New video created');
    }
    setVideo(initialState);
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New video</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Video title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title of video"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label htmlFor="url">Video Link</label>
                <input
                  type="text"
                  name="url"
                  placeholder="Example: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description of video</label>
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="Write a description of the video here"
                  onChange={handleInputChange}
                  value={video.description}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Create new video
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
