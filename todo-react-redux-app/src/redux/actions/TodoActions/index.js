import axios from 'axios';
//axios interceptor
import instance from '../../../services/api/authInterceptors';
import { preparedUrl } from '../../../services/api/handlers';

import { clearStorage, saveToken, getToken } from '../../../services/localDB';
import {
  loadUserAction,
  signUpAction,
  signInAction,
  logoutAction,
  updateUserAction,
  changeAvatarAction,
  verificationAction,
  resetPwdAction,
  validateAccountAction,
  setNewPasswordAction
} from './authActions';

const auth_url = preparedUrl({ base_url: '/auth' }).init;
const users_url = preparedUrl({ base_url: '/users' }).init;

const loadUser = loadUserAction({
  ApiCall: instance,
  url: auth_url
});

const register = signUpAction({
  ApiCall: instance,
  url: users_url
});

const login = signInAction({
  ApiCall: instance,
  url: auth_url
});

const logout = logoutAction();

const updateUser = updateUserAction({
  ApiCall: instance,
  url: users_url
});

const changeAvatar = changeAvatarAction({
  ApiCall: instance,
  url: users_url
});

const verification = verificationAction({
  getToken: getToken
});

const resetPwd = resetPwdAction({
  ApiCall: instance,
  url: auth_url
});

const validateAccount = validateAccountAction({
  ApiCall: instance,
  url: auth_url
});

const setNewPassword = setNewPasswordAction({
  ApiCall: instance,
  url: auth_url
});

export {
  loadUser,
  register,
  login,
  logout,
  updateUser,
  changeAvatar,
  verification,
  resetPwd,
  validateAccount,
  setNewPassword
};
