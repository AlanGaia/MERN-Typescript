import {RequestHandler} from 'express'
import { url } from 'inspector'
import Video from './Video'

export const getVideos: RequestHandler = (req, res) => {
  res.json('Getting videos')
}

export const getVideo: RequestHandler = (req, res) => {
  res.json('Getting 1 video')
}

export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({url: req.body.url})
  if(videoFound)
    return res.status(301).json({message: 'The URL already exists'})

  const video = new Video(req.body);
  const savedVideo = await video.save();
  res.json(savedVideo);
}

export const updateVideo: RequestHandler = (req, res) => {
  res.json('updating video')
}

export const deleteVideo: RequestHandler = (req, res) => {
  res.json('deleting video')
}