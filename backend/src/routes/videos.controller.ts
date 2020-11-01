import {RequestHandler} from 'express'
import { url } from 'inspector'
import { isValidObjectId } from 'mongoose';
import Video from './Video'

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.json(videos)
  } catch (error) {
    res.json(error)
  }
}

export const getVideo: RequestHandler = async (req, res) => {
  if (isValidObjectId(req.params.id)){
    const videoFound = await Video.findById(req.params.id);
    if(!videoFound){
      return res.status(204).json({message: "Didn't found any result"});
    } 
    return res.json(videoFound)
  }
  return res.status(204).json({message: "The ID isn't valid"});

}

export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({url: req.body.url})
  if(videoFound){
    return res.status(301).json({message: 'The URL already exists'})
  }
  const video = new Video(req.body);
  const savedVideo = await video.save();
  res.json(savedVideo);
}

export const updateVideo: RequestHandler = (req, res) => {
  res.json('updating video')
}

export const deleteVideo: RequestHandler = async (req, res) => {
  if (isValidObjectId(req.params.id)){
    const videoFound = await Video.findByIdAndDelete(req.params.id);
    if(!videoFound){
      return res.status(204).json({message: "Didn't found any result"});
    } 
    return res.json(videoFound)
  }
  return res.status(204).json({message: "The ID isn't valid"});
}