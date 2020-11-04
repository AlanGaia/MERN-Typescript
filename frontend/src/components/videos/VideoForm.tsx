import React, { ChangeEvent, FormEvent, useState } from "react";
import {Video} from './Video'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {

  const [video, setVideo] = useState<Video>({
    title: '',
    url: '',
    description:''
  })

  const handleInputChange = (e: InputChange) => {
    setVideo({...video, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(video);
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
