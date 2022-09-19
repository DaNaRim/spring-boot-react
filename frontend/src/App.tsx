import React from "react"
import {Route, Routes} from "react-router"
import "./App.css"
import HomePage from "./pages/HomePage"
import Posts from "./pages/Posts"

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/posts" element={<Posts/>}/>
        </Routes>
    )
}

export default App
