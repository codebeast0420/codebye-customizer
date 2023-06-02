import { combineReducers } from 'redux';
import {
  getProductsReducer,
  getProductReducer,
  setProductConfigurationReducer,
  setSavedReducer,
  setModalReducer,
  changingProductReducer,
  getProductPartsReducer,
  getThemesReducer,
  setImageFuncReducer,
  setQueryStringReducer,
  setPreMadeProductReducer,
} from './ProductReducers';

export default combineReducers({
  products: getProductsReducer,
  product: getProductReducer,
  productParts: getProductPartsReducer,
  themes: getThemesReducer,
  configuration: setProductConfigurationReducer,
  saved: setSavedReducer,
  modal: setModalReducer,
  imageFunc: setImageFuncReducer,
  changingProduct: changingProductReducer,
  queryString: setQueryStringReducer,
  preMadeProduct: setPreMadeProductReducer,
});
