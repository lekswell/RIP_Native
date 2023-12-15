import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    events: [],
    event: {},
};

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setEvents: (state, { payload }) => {
            console.log('setEvents');
            state.events = payload;
            // console.log(payload)
        },
        setEvent: (state, { payload }) => {
            console.log('setEvent');
            state.event = payload;
        },
        resetEvent: (state) => {
            console.log('resetEvent');
            state.event = {};
        },
    },
});

export const eventReducer = eventSlice.reducer;

export const { setEvents, setEvent, resetEvent } = eventSlice.actions;