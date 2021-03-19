import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
                <form>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" required /><br /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" required /><br /><br />
                    <input type="checkbox" name="remember" />
                    <label htmlFor="remember">Remember Me</label><br /><br />
                    <p>Forgot Password?</p>
                    <input type="submit" value="Submit" /><br />
                </form>
                <p>Don't have an account? <Link to="/create">Create an account</Link></p>
                <p>----------- Or -----------</p>
                <button className="google-btn">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;