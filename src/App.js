import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import images from "./images"

import "./App.scss"

export function Images(props) {
    console.log(props)
    return (
        <div className="image-card">
            <img src={props.img} alt='pictures'/>
        </div>
    );
}



export default function App() {
    const image = images.map(item => {
        return (
            <Images
                key={item.id} 
                {...item}
            />
        )
    })
    return (
        <div className="container">
            <Navbar />
            <Main />
            <div className="images">
                {image}

            </div>
            
        </div>
    )
}


