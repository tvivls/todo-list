import axios from 'axios';

export const $host = axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const path = `${$host}todos/`;
