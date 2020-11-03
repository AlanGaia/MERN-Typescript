import axios from 'axios' // -> Get the data 
    
//Get videos from backend
export const getVideos = async () => {
  return await axios.get('http://localhost:8080/videos')
}