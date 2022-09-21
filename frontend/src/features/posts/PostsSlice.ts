import {apiSlice} from "../api/apiSlice"

export interface Post {
    id: number;
    title: string;
    content: string;
}

const POSTS_URL = "/posts"

export const postApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => POSTS_URL,
            providesTags: ["Post"],
        }),
        createPost: builder.mutation<Post, Partial<Post>>({
            query: (body) => ({
                url: POSTS_URL,
                method: "POST",
                body,
            }),
            invalidatesTags: ["Post"],
        }),
        updatePost: builder.mutation<Post, Partial<Post>>({
            query: (body) => ({
                url: POSTS_URL,
                method: "PUT",
                body,
            }),
            invalidatesTags: ["Post"],
        }),
        deletePost: builder.mutation<Post, number>({
            query: (id) => ({
                url: `${POSTS_URL}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Post"],
        }),
    }),
})

export const {
    useGetPostsQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postApi
