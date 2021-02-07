import { createStore } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStore from '@react-native-community/async-storage';

import Reducers from './reducers/index';

const persistedReducer = persistReducer({
    key: 'root',
    storage: AsyncStore,
    whitelist:['userReducer']

}, Reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };