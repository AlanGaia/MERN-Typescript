import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import {toast} from "react-toastify/";
import {Video} from './Video';
import * as VideoService from './VideoServices'
import {useParams, useHistory} from 'react-router-dom';

interface Params  {
  id: string;
}

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  
  const history = useHistory();

  const params = useParams<Params>();

  //Initial State Video
  const initialState = {
    title: '',
    url: '',
    description:''
  }

  //State Video
  const [video, setVideo] = useState<Video>(initialState);

  //Handle input change
  const handleInputChange = (e: InputChange) => {
    setVideo({...video, [e.target.name]: e.target.value})
  }

  //Handle Submit Form
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!params.id){
      //Create new Video
      await VideoService.createVideo(video);
      toast.success('New video created');
      setVideo(initialState);
    } else {
      //Update Video
      const res = await VideoService.updateVideo(params.id, video);
      if (res.status === 200) toast.success('Video Updated');
      setVideo(initialState);
      history.push('/');
    }


  }

  const getVideo = async (id: string) => {
    const res = await VideoService.getVideo(id);
    const {title, description, url } = res.data;
    setVideo({title, description, url});
  }

  //UseEffect update data
  useEffect(() => {
    if (params.id)  getVideo(params.id);
  }, [params.id]);

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


              {
                params.id ? (
                  <button type="submit" className="btn btn-warning">Update video</button>
                ) : (
                  <button type="submit" className="btn btn-primary">Create new video</button>
                )
              }

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
