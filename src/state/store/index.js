import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}
const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, {}, composeWithDevTools(applyMiddleware(...middlewares)));
const persistor = persistStore(store);
export { persistor, store };
