import { HANDLER_IDS, RESPONSE_SUCCESS_CODE } from '../../constants/handlerIds.js';
import { createUser, findUserByDeviceId, updateUserLogin } from '../../db/user/userDb.js';
import { getGameSession } from '../../sessions/gameSession.js';
import { addUser } from '../../sessions/userSession.js';
import { createResponse } from '../../utils/response/createResponse.js';
import User from '../../classes/models/userClass.js';

const initialHandler = async ({ socket, userId, payload }) => {
  try {
    const { deviceId, latency, playerId } = payload;

    let user = await findUserByDeviceId(deviceId);

    const coords = {
      x: 0,
      y: 0,
    };

    if (!user) {
      await createUser(deviceId);
    } else {
      await updateUserLogin(deviceId);
      coords.x = user.xCoord;
      coords.y = user.yCoord;
    }

    user = new User(socket, deviceId, playerId, latency, coords);
    console.log(user);

    addUser(user);
    const gameSession = getGameSession();
    gameSession.addUser(user);
    console.log(gameSession);

    const initialResponse = createResponse(HANDLER_IDS.INITIAL, RESPONSE_SUCCESS_CODE, {
      userId: deviceId,
      x: user.x,
      y: user.y,
    });

    socket.write(initialResponse);
  } catch (e) {
    console.error(e);
  }
};

export default initialHandler;
