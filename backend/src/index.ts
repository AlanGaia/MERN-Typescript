import app from './app'
import './database'
const PORT = app.get('port');



app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`);
  
})