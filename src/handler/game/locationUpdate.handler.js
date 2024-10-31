import { getGameSession } from '../../sessions/game.session.js';

export const locationUpdateHandler = ({ socket, userId, payload }) => {
  try {
    const { x, y } = payload;
    const gameSession = getGameSession();

    if (!gameSession) {
      console.error('Game session not found');
    }
    console.log(gameSession);

    const user = gameSession.getUser(userId);
    if (!user) {
      console.error('User not found');
    }

    user.updatePosition(x, y);
    console.log(user);
    console.log(gameSession);
    const locationData = gameSession.getAllLocation(userId);
    console.log(`after`, user);
    console.log(`after`, gameSession);

    socket.write(locationData);
  } catch (e) {
    console.error(e);
  }
};
