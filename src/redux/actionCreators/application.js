import { LOADING_PENDING, LOADING_SUCCESS } from '../actionConstants/application';

export const loading = () => ({
  type: LOADING_PENDING,
});

export const loadingSuccess = () => ({
  type: LOADING_SUCCESS,
});
