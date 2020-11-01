import {RequestHandler} from 'express'

export const getVideos: RequestHandler = (req, res) => {
  res.json('Getting videos')
}

export const getVideo: RequestHandler = (req, res) => {
  res.json('Getting 1 video')
}

export const createVideo: RequestHandler = (req, res) => {
  res.json('Creating new video')
}

export const updateVideo: RequestHandler = (req, res) => {
  res.json('updating video')
}

export const deleteVideo: RequestHandler = (req, res) => {
  res.json('deleting video')
}