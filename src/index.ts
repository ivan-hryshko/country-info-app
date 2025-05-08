import app from './app';
import ENVS from './config/envs';

app.listen(ENVS.APP_PORT, () => {
  console.log(`App listening at http://localhost:${ENVS.APP_PORT}`);
});