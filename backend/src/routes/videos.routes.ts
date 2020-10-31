import {Router} from 'express'
const router = Router();

import {getVideos} from './videos.controller'

router.get('/videos', getVideos);

export default router