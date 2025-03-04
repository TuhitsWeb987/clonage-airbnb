import { configureStore } from "@reduxjs/toolkit";
import CardSliceReducer from "../slice/cardSlice";

export const store = configureStore({
    reducer: {
        cardList: CardSliceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;