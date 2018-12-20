import React from 'react'
import { Parallax } from 'react-parallax'
import './ParallaxWindow.css'
 
const ParallaxWindow = props => (
    <div className={props.side}>
        <Parallax
            blur={props.blur}
            bgImage={props.imagePath}
            bgImageAlt={props.imageAlt}
            strength={props.strength}
        >
            <div className="parallax-content">{props.content}</div>
        </Parallax>
    </div>
)

export default ParallaxWindow