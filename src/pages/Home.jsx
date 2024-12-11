import React from "react";
import Timerclock from "../components/Timerclock";
// import Spotify from 'react-spotify-embed';
// import sp from "../components/Sp";
import Iframe from 'react-iframe'

function Home() {
    return (
        <div className="Home">
            <Timerclock />
            <Iframe url="https://open.spotify.com/embed/track/6gjarl3YlvQtnvGCZQ4IRK?utm_source=generator"
                 width="320px"
                 height="160px"
                 id=""
                 className=""
                 display="block"
                 position="absolute"/>
        </div>
    );
}

export default Home;
