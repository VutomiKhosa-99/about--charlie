import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

import "./App.scss"


export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}