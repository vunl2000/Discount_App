import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const middleware = [thunk];
const initialState = {};

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ["account"], //! không lưu 
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);
export default store;


// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import rootReducer from './reducer';

// const middleware = [thunk];
// const initialState = {};

// export default createStore(
//     rootReducer,
//     initialState,
//     applyMiddleware(...middleware),
// );

