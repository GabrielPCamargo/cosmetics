import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import axios from '../../../services/axios';
import history from '../../../services/history';

import * as actions from './actions';
import * as types from '../types';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/token', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    axios.headers = `Bearer ${response.data.token}`;

    toast.success('Login realizado com sucesso');
    history.push('/myproducts');
  } catch (e) {
    yield put(actions.loginFailure());
    e.response.data.errors.map((err) => toast.error(err));
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'login.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
