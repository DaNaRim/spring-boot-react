import React from "react"
import {Route, Routes} from "react-router"
import "./App.css"
import HomePage from "./common/pages/Home/HomePage"
import PostsPage from "./common/pages/Posts/PostsPage"

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/posts" element={<PostsPage/>}/>
        </Routes>
    )
}

export default App
