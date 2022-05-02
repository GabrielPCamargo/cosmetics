import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'COSMETICS',
      storage,
      whitelist: ['login'],
    },
    reducers
  );

  return persistedReducer;
};
