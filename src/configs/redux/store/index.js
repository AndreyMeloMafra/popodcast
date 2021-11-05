import { configureStore } from '@reduxjs/toolkit';
import playerSlice from '../ducks/player';

export const store = configureStore({
    reducer: {
        playerSlice: playerSlice
    }
})