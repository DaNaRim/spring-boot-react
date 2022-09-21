import React, {FormEvent, useState} from "react"
import PostFC from "./post/PostFC"

import styles from "./Posts.module.scss"
import {useCreatePostMutation, useGetPostsQuery} from "./PostsSlice"

const Posts = () => {
    const [title, setTitle] = useState<string>("")
    const [content, setContent] = useState<string>("")

    const {
        data: posts,
        isLoading: isLoadingPosts,
        isSuccess: isSuccessPosts,
        isError: isErrorPosts,
        error: errorPosts,
    } = useGetPostsQuery()

    const [
        createPost, {
            isLoading: isCreatingPost,
            isSuccess: isCreatePostSuccess,
            isError: isCreatePostError,
            error: createPostError,
        },
    ] = useCreatePostMutation()

    const handleCreatePost = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (title && content) {
            createPost({title, content})
        }
    }

    return (
        <section className={styles.posts}>
            <header>
                <form onSubmit={handleCreatePost}>
                    <h2>Add Post</h2>

                    {isCreatingPost && <p>Creating post...</p>}
                    {isCreatePostSuccess && <p>Post created successfully!</p>}
                    {isCreatePostError && <p>{JSON.stringify(createPostError)}</p>}
                    {(!isCreatingPost || !isCreatePostError) && (
                        <fieldset>
                            <label htmlFor="title">Title</label>
                            <input type="text"
                                   id="title"
                                   name="title"
                                   value={title}
                                   onChange={e => setTitle(e.target.value)}/>

                            <label htmlFor="content">Content</label>
                            <textarea id="content"
                                      name="content"
                                      value={content}
                                      onChange={e => setContent(e.target.value)}/>

                            <button type="submit">Add Post</button>
                        </fieldset>
                    )}
                </form>
            </header>

            {isLoadingPosts && <p>Loading...</p>}
            {isSuccessPosts && posts.map(post => (
                <PostFC key={post.id} post={post}/>
            ))}
        </section>
    )
}

export default Posts
