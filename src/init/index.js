import { addGameSession } from '../sessions/gameSession.js';
import { testConnection } from '../utils/db/testConnection.js';
import { loadProtos } from './loadProto.js';
import { v4 as uuidv4 } from 'uuid';

const initServer = async () => {
  try {
    await loadProtos();
    const gameId = uuidv4();
    const gameSession = addGameSession(gameId);
    await testConnection();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

export default initServer;
