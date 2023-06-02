import {
  GET_PRODUCTS,
  GET_PRODUCT,
  SET_CONFIGURATION,
  SET_SAVED,
  SET_MODAL,
  CHANGING_PRODUCT,
  SET_PRODUCT,
  GET_PRODUCT_PARTS,
  SET_PRODUCT_PARTS,
  GET_THEMES,
  QUERY_STRING,
  SET_IMAGE_FUNC,
  PRE_MADE_PRODUCT,
} from './types';

export const getProductsAction = data => ({
  type: GET_PRODUCTS,
  payload: {
    request: {
      url: 'v1/product',
      method: 'GET',
      data,
    },
  },
});

export const getProductAction = (id, data) => ({
  type: GET_PRODUCT,
  payload: {
    request: {
      url: `v2/product/${id}`,
      method: 'GET',
      params: data,
    },
  },
});

export const getProductPartsAction = id => ({
  type: GET_PRODUCT_PARTS,
  payload: {
    request: {
      url: `v1/product/${id}`,
      method: 'GET',
      params: {
        show_parts: true,
      },
    },
  },
});

export const getThemesAction = () => ({
  type: GET_THEMES,
  payload: {
    request: {
      url: 'v1/get_themes',
      method: 'GET',
    },
  },
});

export const setProductConfigurationAction = data => ({
  type: SET_CONFIGURATION,
  payload: data,
});

export const setSavedAction = saved => ({
  type: SET_SAVED,
  payload: saved,
});

export const setDoneModalAction = state => ({
  type: SET_MODAL,
  payload: state,
});

export const setImageFuncAction = state => ({
  type: SET_IMAGE_FUNC,
  payload: state,
});

export const changingProductAction = state => ({
  type: CHANGING_PRODUCT,
  payload: state,
});

export const setProductAction = state => ({
  type: SET_PRODUCT,
  payload: state,
});

export const setProductPArtsAction = state => ({
  type: SET_PRODUCT_PARTS,
  payload: state,
});

export const setQueryStringAction = state => ({
  type: QUERY_STRING,
  payload: state,
});

export const setPremadeProductAction = state => ({
  type: PRE_MADE_PRODUCT,
  payload: state,
});
