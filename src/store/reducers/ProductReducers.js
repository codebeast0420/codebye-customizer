import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  SET_CONFIGURATION,
  SET_SAVED,
  SET_MODAL,
  CHANGING_PRODUCT,
  SET_PRODUCT,
  GET_PRODUCT_PARTS,
  GET_PRODUCT_PARTS_SUCCESS,
  GET_PRODUCT_PARTS_FAIL,
  SET_PRODUCT_PARTS,
  GET_THEMES_SUCCESS,
  GET_THEMES,
  GET_THEMES_FAIL,
  QUERY_STRING,
  SET_IMAGE_FUNC,
  PRE_MADE_PRODUCT,
} from '../actions/types';

const GET_PRODUCTS_INITIAL_STATE = {
  loading: false,
  data: [],
  error: '',
};
export const getProductsReducer = (state = GET_PRODUCTS_INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case GET_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

const GET_PRODUCT_INITIAL_STATE = {
  loading: false,
  data: {},
  error: '',
};
export const getProductReducer = (state = GET_PRODUCT_INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, loading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case GET_PRODUCT_FAIL:
      return { ...state, loading: false, error: action.error };
    case SET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};


const GET_PRODUCT_PARTS_INITIAL_STATE = {
  loading: false,
  data: {},
  error: '',
};
export const getProductPartsReducer = (state = GET_PRODUCT_PARTS_INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCT_PARTS:
      return { ...state, loading: true };
    case GET_PRODUCT_PARTS_SUCCESS:
      return { ...state, loading: false, data: action.payload.data.parts };
    case GET_PRODUCT_PARTS_FAIL:
      return { ...state, loading: false, error: action.error };
    case SET_PRODUCT_PARTS:
      return action.payload;
    default:
      return state;
  }
};

const GET_THEMES_INITIAL_STATE = {
  loading: false,
  data: {},
  error: '',
};
export const getThemesReducer = (state = GET_THEMES_INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_THEMES:
      return { ...state, loading: true };
    case GET_THEMES_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case GET_THEMES_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

const SET_CONFIGURATION_INITIAL_STATE = {
  message: '',
  pa_material: {},
  pa_stone: { choice: {} },
  pa_stone_type: {},
  pa_size: {},
  pa_hook_type_earrings: {},
};
export const setProductConfigurationReducer = (state = SET_CONFIGURATION_INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CONFIGURATION:
      return action.payload;
    default:
      return state;
  }
};

const SET_SAVED_INITIAL_STATE = false;
export const setSavedReducer = (state = SET_SAVED_INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SAVED:
      return action.payload;
    default:
      return state;
  }
};

const SET_MODAL_INITIAL_STATE = false;
export const setModalReducer = (state = SET_MODAL_INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MODAL:
      return action.payload;
    default:
      return state;
  }
};

const SET_IMAGE_FUNC_INITIAL_STATE = () => {};
export const setImageFuncReducer = (state = SET_IMAGE_FUNC_INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_IMAGE_FUNC:
      return action.payload;
    default:
      return state;
  }
};

const CHANGING_PRODUCT_INITIAL_STATE = false;
export const changingProductReducer = (state = CHANGING_PRODUCT_INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGING_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

const QUERY_INITIAL_STATE = {
  retailer: false,
  seller: false,
};
export const setQueryStringReducer = (state = QUERY_INITIAL_STATE, action) => {
  switch (action.type) {
    case QUERY_STRING:
      return action.payload;
    default:
      return state;
  }
};

const PRE_MADE_PRODUCT_INITIAL_STATE = {
  isPremade: false,
  id: 0,
  parent_id: 0,
  message: '',
  price: 0,
};
export const setPreMadeProductReducer = (state = PRE_MADE_PRODUCT_INITIAL_STATE, action) => {
  switch (action.type) {
    case PRE_MADE_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
