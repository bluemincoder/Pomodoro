import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Auth0Provider
                domain="dev-tke500i14lg1vjzt.us.auth0.com"
                clientId="4gGFQnKwkmplz8DGrgcftebcdTSsVqv5"
                authorizationParams={{
                    redirect_uri: window.location.origin,
                }}
            >
                <App />
            </Auth0Provider>
        </BrowserRouter>
    </StrictMode>
);
