import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
  try {
    app.listen(Config.PORT, () => {
      logger.info(`Server Running at port ${Config.PORT}`);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

startServer();
