import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value.trim();

        if (!email) {
            setError('Email is required');
            return;
        }

        try {
            await axios.post(`https://server-sigma-mocha.vercel.app/users/${email}`);

            // Store fake token and email
            localStorage.setItem('fakeToken', 'token_123456');
            localStorage.setItem('userEmail', email);

            // Navigate to task page or home
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Login failed. Try again.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="Enter your email" required />
                <input type="submit" value="Login" />
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Login;
