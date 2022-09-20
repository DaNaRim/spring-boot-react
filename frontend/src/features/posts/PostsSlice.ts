import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import {RootState} from "../../app/store"

export interface Post {
    id: number;
    title: string;
    content: string;
}

export interface PostsState {
    posts: Post[];
    status: "idle" | "loading" | "failed";
}

const initialState: PostsState = {
    posts: [],
    status: "idle",
}

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    () => {
        return axios.get(`/api/posts`)
            .then(response => response.data)
    },
)

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = "idle"
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.status = "failed"
            })
    },
})

export const postsSelector = (state: RootState) => state.posts.posts

export default postsSlice.reducer
