import React from 'react';
import { Link } from 'react-router-dom';
import './CreateUser.css';

const CreateUser = () => {
    return (
        <div className="create-container">
            <div className="create-box">
                <h1>Create an account</h1>
                <form>
                    <label htmlFor="name">Name</label><br />
                    <input type="text" name="name" required /><br /><br />
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" required /><br /><br />
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" required /><br /><br />
                    <label htmlFor="confirm-password">Confirm Password</label><br />
                    <input type="password" name="confirm-password" required /><br /><br />
                    <input type="submit" value="Submit" /><br /><br />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <p>----------- Or -----------</p>
                <button className="google-btn">Continue with Google</button>
            </div>
        </div>
    );
};

export default CreateUser;