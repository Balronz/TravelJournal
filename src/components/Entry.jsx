import React from "react";


export default function Entry(props) {

    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" 
                    src= {props.item.img.src}
                    alt={props.item.img.alt} />
            </div>
            <div>
                <img className="marker" 
                    src="/src/assets/marker.png" 
                    alt="Marker logo" />
                <span>{props.item.country}</span> 
                <a href={props.item.googleMapsLink}> View on Google Maps</a>
                <h2>{props.item.title}</h2>
                <p>{props.item.dates}</p>
                <p>{props.item.text}</p>
            </div>


        </article>
    );
}