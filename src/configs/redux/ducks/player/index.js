import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    track: {
        title: '',
        author: '',
        track: {},
        image: {}
    }
}

export const select_track = createAction("SELECT_TRACK");

export const playerReducer = createReducer(INITIAL_STATE, (builder) => {
    builder
        .addCase(select_track, (state, action) => {
            const track = action.payload;
            state.track = track;
        });
});

export const playerSlice = createSlice({
    name: "player",
    initialState: INITIAL_STATE,
    reducers: {
        selectTrack: (state, action) => {
            return {...state, track: action.payload }
        }
    }
})

export const { selectTrack } = playerSlice.actions;

export default playerSlice.reducer;
