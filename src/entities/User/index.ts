export { userReducer } from './model/slice/userSlice';
export { UserSchema, User } from './model/types/user';
export { setAuthData, setUserMounted, logout } from './model/slice/userSlice';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';
