import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contacts-slice';
import filterReducer from './filter/filter-slice';

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const persistConfig = {
    key: "contacts",
    storage,
    whitelist: ["contacts"],
    // blacklist: ["filter"]
};

const percistedReducer = persistReducer(persistConfig, rootReducer);

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
});

export const store = configureStore({
    reducer: percistedReducer,
    middleware: customizedMiddleware,
});

export const persistor = persistStore(store);