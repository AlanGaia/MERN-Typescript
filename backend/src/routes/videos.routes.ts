import {Router} from 'express'
const router = Router();

import * as videosController from './videos.controller'

router.get('/videos', videosController.getVideos);
router.get('/videos/:id', videosController.getVideo);

router.post('/videos', videosController.createVideo);

router.delete('/videos/:id', videosController.deleteVideo);

router.put('/videos/:id', videosController.updateVideo);


export default router