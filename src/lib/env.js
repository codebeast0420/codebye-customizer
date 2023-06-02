/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducers from '../store/reducers';

export const URL = process.env.REACT_APP_API_URL;

const endpointStart = 'wp-json/codebyedge/';

const server = {
  baseURL: `${URL}${endpointStart}`,
  responseType: 'json',
};

export const client = axios.create(server);
export const store = createStore(reducers, applyMiddleware(axiosMiddleware(client)));
