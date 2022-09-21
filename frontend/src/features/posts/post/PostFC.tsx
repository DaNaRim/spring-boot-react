import React, {FormEvent, useState} from "react"
import {Post, useDeletePostMutation, useUpdatePostMutation} from "../PostsSlice"

import styles from "./Post.module.scss"

type Props = {
    post: Post
}

const PostFC: React.FC<Props> = ({post}) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)

    const [editTitle, setEditTitle] = useState<string>(post.title)
    const [editContent, setEditContent] = useState<string>(post.content)

    const [
        updatePost, {
            isLoading: isUpdatingPost,
            isSuccess: isUpdatePostSuccess,
            isError: isUpdatePostError,
            error: updatePostError,
        },
    ] = useUpdatePostMutation()

    const [
        deletePost, {
            isLoading: isDeletingPost,
            isSuccess: isDeletePostSuccess,
            isError: isDeletePostError,
            error: deletePostError,
        },
    ] = useDeletePostMutation()

    const handleUpdatePost = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (editTitle && editContent) {
            updatePost({id: post.id, title: editTitle, content: editContent})
        }
        setIsEditing(false)
    }

    const handleCancelEdit = () => {
        setIsEditing(false)
        setEditTitle(post.title)
        setEditContent(post.content)
    }

    const displayPostBody = () => {
        if (isEditing) {
            return (
                <form onSubmit={handleUpdatePost}>
                    <input type="text" name="title" value={editTitle} onChange={e => setEditTitle(e.target.value)}/>
                    <input type="text"
                           name="content"
                           value={editContent}
                           onChange={e => setEditContent(e.target.value)}/>

                    <button type="submit">Update Post</button>
                    <button onClick={handleCancelEdit}>Cancel Edit</button>
                </form>
            )
        } else {
            return (
                <div>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <button onClick={() => deletePost(post.id)}>Delete</button>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )
        }
    }

    return (
        <article className={styles.post}>
            {displayPostBody()}
        </article>
    )
}

export default PostFC
