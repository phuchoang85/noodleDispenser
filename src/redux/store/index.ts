import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import codeSlice from '@Redux/selector/CodeSlice';
import noodelSlice from '@Redux/selector/NoodlesSlice';
import {configureStore} from '@reduxjs/toolkit';
const rootReducer = combineReducers({
  code: codeSlice,
  noodel: noodelSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'store',
  storage: AsyncStorage,
  whitelist: ['code', 'noodel'],
};
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    root: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
