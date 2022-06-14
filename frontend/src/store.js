import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import { registeruser, getuser, resendotp, updateuser, otpverifie, updatedetailsuserreducer } from './Reducer/userreducer';
import {Allproducts, singleProduct} from './Reducer/productreducer'
import { create_bag_reducer, create_wishlist_reducer, delete_bag_reducer, delete_wish_reducer, get_bag_reducer, get_wishlist_reducer, update_qty_bag_reducer } from './Reducer/orderreducer';


const reducer = combineReducers({
      Registeruser: registeruser,
      user : getuser,
      resendotp: resendotp,
      updateuser: updateuser,
      userdetails: otpverifie,
      Allproducts:Allproducts,
      Sproduct: singleProduct,
      wishlist:create_wishlist_reducer,
      wishlist_data:get_wishlist_reducer,
      bag:create_bag_reducer,
      bag_data:get_bag_reducer,
      update_bag: update_qty_bag_reducer,
      updateuser2:updatedetailsuserreducer,
      deletebag:delete_bag_reducer,
      deletewish:delete_wish_reducer
      
})

let initialState = {};

const middleware  = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools( applyMiddleware(...middleware)))


export default store
