import axios from 'axios' // -> Get the data 
import { Video } from './Video'

const API = 'http://localhost:8080';
    
//Get videos from backend
export const getVideos = async () => {
  return await axios.get(`${API}/videos`)
}

//Send to Backend data and create a new Video
export const createVideo = async (video: Video) => {
  return await axios.post(`${API}/videos`, video);
}