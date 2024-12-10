import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "../styles/Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Login attempted with:", { email, password });
    };

    return (
        <Container className="login-wrapper">
            <div className="login-form-container">
                <h2 className="login-title">Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group
                        className="form-group"
                        controlId="formBasicEmail"
                    >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group
                        className="form-group"
                        controlId="formBasicPassword"
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button type="submit" className="login-button">
                        Login
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default Login;
