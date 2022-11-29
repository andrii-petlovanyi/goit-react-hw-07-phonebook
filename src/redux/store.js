import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import { filterReducer } from './filterSlice';
import { contactReducer } from './contactsSlice';

const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['filter'],
};

const persistedContacts = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedContacts,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
