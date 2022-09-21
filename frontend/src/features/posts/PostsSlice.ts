import {apiSlice} from "../api/apiSlice"

export interface Post {
    id: number;
    title: string;
    content: string;
}

export const postApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => "posts",
        }),
        createPost: builder.mutation<Post, Partial<Post>>({
            query: (body) => ({
                url: "posts",
                method: "POST",
                body,
            }),
        }),
        updatePost: builder.mutation<Post, Partial<Post>>({
            query: (body) => ({
                url: `posts`,
                method: "PUT",
                body,
            }),
        }),
        deletePost: builder.mutation<Post, number>({
            query: (id) => ({
                url: `posts/${id}`,
            }),
        }),
    }),
})

export const {
    useGetPostsQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation,
} = postApi
