import { configureStore } from '@reduxjs/toolkit';
import { mockApi } from './mockApiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        [mockApi.reducerPath]: mockApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mockApi.middleware),
}) 

setupListeners(store.dispatch);