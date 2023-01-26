import React from 'react';

function ShowCard({show, onShowClicked, onShowDelete}) {

    function getStreamingLogo(streamOnString) {
        let imgSrc;
        switch (streamOnString) {
            case "Amazon":
                imgSrc = "./images/amazon.png";
                break;
            case "HBO":
                imgSrc = "./images/hbo.webp";
                break;
            case "Hulu":
                imgSrc = "./images/hulu.png";
                break;
            case "Netflix":
                imgSrc = "./images/netflix.jpeg";
                break;
            case "Peacock":
                imgSrc = "./images/peacock.png";
                break;
        }
        return imgSrc;
    }

    return(
        <div className="show-card" onClick={() => console.log("Clicking card...")}>
            <img src={show.image} alt={show.name} className="show-art"/>
            <div className="details-container">
                <header>
                    <h3>{show.name}</h3>                    
                </header>
                <p>{show.summary}</p>
                <footer>
                    <img src={getStreamingLogo(show.stream_on)} alt={show.stream_on} className="streaming-logo"></img>
                    <button onClick={() => console.log("Clicked delete...")}>Delete</button>
                </footer>
            </div>
        </div>
    );
}

export default ShowCard;