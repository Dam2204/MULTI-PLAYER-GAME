import { toCamelCase } from '../../utils/transformCase.js';
import dbPool from '../database.js';
import { USER_QUERIES } from './user.queries.js';

export const findUserByDeviceId = async (deviceId) => {
  try {
    const [rows] = await dbPool.query(USER_QUERIES.FIND_USER_BY_DEVICE_ID, [deviceId]);
    return toCamelCase(rows[0]);
  } catch (e) {
    console.error('유저 조회 실패', e);
  }
};

export const createUser = async (deviceId) => {
  try {
    await dbPool.query(USER_QUERIES.CREATE_USER, [deviceId]);
    return { deviceId };
  } catch (e) {
    console.error('유저 생성 실패', e);
  }
};

export const updateUserLogin = async (deviceId) => {
  try {
    await dbPool.query(USER_QUERIES.UPDATE_USER_LOGIN, [deviceId]);
  } catch (e) {
    console.error('유저 로그인 정보 업데이트 실패', e);
  }
};

export const updateUserLocation = async (x, y, deviceId) => {
  try {
    await dbPool.query(USER_QUERIES.UPDATE_USER_LOCATION, [x, y, deviceId]);
  } catch (e) {
    console.error('유저 위치 정보 업데이트 실패', e);
  }
};
