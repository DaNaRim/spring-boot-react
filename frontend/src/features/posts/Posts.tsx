import React, {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../app/hooks"

import styles from "./Posts.module.scss"
import {fetchPosts, postsSelector} from "./PostsSlice"

const Posts = () => {
    const dispatch = useAppDispatch()

    const posts = useAppSelector(postsSelector)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <section className={styles.posts}>
            {posts.length !== 0 && posts.map(post => (
                <article className={styles.post} key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </article>
            ))}
        </section>
    )
}

export default Posts
