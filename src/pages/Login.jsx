import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../styles/Login.css"; // Import the CSS file

const LoginButton = () => {
    const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();

    return (
        <>
            {/* {isAuthenticated && (
                <div className="Helo">
                    <h2>Helo, {user.name}</h2>
                </div>
            )} */}
            <div className="auth-button-container">
                {isAuthenticated ? (
                    <button className="auth-button" onClick={() => logout()}>
                        Logout
                    </button>
                ) : (
                    <button
                        className="auth-button"
                        onClick={() => loginWithPopup()}
                    >
                        Log In
                    </button>
                )}
            </div>
        </>
    );
};

export default LoginButton;
