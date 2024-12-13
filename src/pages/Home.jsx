import React from "react";
import Timerclock from "../components/Timerclock";
import Iframe from "react-iframe";
import TodoList from "../components/TodoList";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
    const { user, loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <div className="Home">
            <Timerclock />
            <Iframe
                url="https://open.spotify.com/embed/track/1ktAfHym69UrvWIgx2qPPm?utm_source=generator"
                width="320px"
                height="160px"
                id=""
                className=""
                display="block"
                position="absolute"
            />
            <TodoList />
            <Login />
        </div>
    );
}

export default Home;
