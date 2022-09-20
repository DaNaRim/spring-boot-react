import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit"
import {postsSlice} from "../features/posts/PostsSlice"

export const store = configureStore({
    reducer: {
        posts: postsSlice.reducer,
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
