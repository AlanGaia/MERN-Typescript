import app from './app'
import './database'
const PORT = 3000;



app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`);
  
})