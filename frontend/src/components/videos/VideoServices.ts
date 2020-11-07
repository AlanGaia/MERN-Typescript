import axios from 'axios' // -> Get the data 
import { Video } from './Video'

const API = 'http://localhost:8080';
    
//Get videos from backend
export const getVideos = async () => {
  return await axios.get<Video[]>(`${API}/videos`);
}

//Get 1 video from backend by id
export const getVideo = async (id: string) => {
  return await axios.get<Video>(`${API}/videos/${id}`);
}

//Send to Backend data and create a new Video
export const createVideo = async (video: Video) => {
  return await axios.post(`${API}/videos`, video);
}

//Send to Backend data and UPDATE a  Video
export const updateVideo = async (id: string, video: Video) => {
  return await axios.put(`${API}/videos/${id}`, video);
}

