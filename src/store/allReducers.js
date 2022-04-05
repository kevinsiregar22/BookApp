// import {detailReducer} from '../screens/Detail/redux/reducer';
// import {homeReducer} from '../screens/Home/redux/reducer';
import {loginReducer} from '../screens/Login/redux/reducer';
import {registerReducer} from '../screens/Registrasi/redux/reducer';
import {global} from './globalReducer';
import {combineReducers} from 'redux';

export const allReducers = combineReducers({
  //   detail: detailReducer,
  //   home: homeReducer,
  login: loginReducer,
  //   register: registerReducer,
  //   global: global, //global: global
});
