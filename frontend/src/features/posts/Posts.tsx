import React from "react"

import styles from "./Posts.module.scss"
import {useGetPostsQuery} from "./PostsSlice"

const Posts = () => {
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetPostsQuery()

    console.log("posts", posts)

    return (
        <section className={styles.posts}>
            {isLoading && <p>Loading...</p>}
            {isSuccess && posts.map(post => (
                <article className={styles.post} key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </article>
            ))}
        </section>
    )
}

export default Posts
