import React from "react"
import Posts from "../../../features/posts/Posts"
import NavBar from "../../components/Nav/NavBar"

const PostsPage = () => {
    return (
        <main>
            <NavBar/>
            <h1 style={{textAlign: "center", paddingTop: "2rem"}}>Posts Page</h1>
            <Posts/>
        </main>
    )
}

export default PostsPage
