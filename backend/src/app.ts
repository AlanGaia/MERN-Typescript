//Modules Import
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'

//Routes Import
import videosRoutes from './routes/videos.routes'

//Initialization
const app = express();

//Set listening port
app.set('port', config.PORT);

//Middlewares
//Morgan dev - permite ver status code y ms de respuestas
app.use(morgan('dev'));
//Cors - permite interactuar mi api de manera libre con otros servidores
app.use(cors());
//express.json() - permite entender los objetos json que lleguen por POST
app.use(express.json());
//express.urlencoded - permite manejar los campos que lleguen por POST mediante un formulario
app.use(express.urlencoded({extended: false}));

//Middleware Routes
app.use(videosRoutes);

export default app;


