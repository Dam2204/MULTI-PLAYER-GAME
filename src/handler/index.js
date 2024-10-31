import { HANDLER_IDS } from '../constants/handlerIds.js';
import { locationUpdateHandler } from './game/locationUpdateHandler.js';
import initialHandler from './user/initialHandler.js';

const handlers = {
  [HANDLER_IDS.INITIAL]: {
    handler: initialHandler,
    protoType: 'initial.InitialPayload',
  },
  [HANDLER_IDS.LOCATION_UPDATE]: {
    handler: locationUpdateHandler,
    protoType: 'game.LocationUpdatePayload',
  },
};

export const getHandlerById = (handlerId) => {
  if (!handlers[handlerId]) {
    throw Error();
  }
  return handlers[handlerId].handler;
};

export const gerProtoTypeNameByHandlerId = (handlerId) => {
  if (!handlers[handlerId]) {
    throw Error();
  }
  return handlers[handlerId].protoType;
};
