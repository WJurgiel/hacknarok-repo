import styles from './modules/Login.module.css';
import {
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Stack,
    Group
} from '@mantine/core';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError('');
        try {
            const response = await axios.post('http://localhost:8080/api/v1/login/form', {
                email,
                password,
            }, {withCredentials: true});

            console.log('Login success:', response.data);
            navigate('/home');
        } catch (err: unknown) {
            console.error('Login failed:', err);
            setError('Invalid email or password');
        }
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginContainer}>
                <Group className={styles.logoBlock} align="center">
                    <img src="/logo.png" alt="BabelPal Logo" style={{ height: 100 }} />
                    <Title order={2} className={styles.appTitle}>BabelPal</Title>
                </Group>
                <Text c="dimmed" size="lg" >
                    Where languages meet and friendships grow.
                </Text>

                <div className={styles.loginCard}>
                    <div className={styles.loginImage}>
                        <img src="/login-pic.svg" alt="Login illustration" />
                    </div>

                    <div className={styles.loginForm}>
                        <Stack>
                            <TextInput
                                label="Email"
                                c="white"
                                placeholder="you@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                                required
                            />
                            <PasswordInput
                                label="Password"
                                c="white"
                                placeholder="Your password"
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                                required
                            />
                            {error && <Text c="red" size="sm">{error}</Text>}
                            <Button className={styles.loginButton} color="#829EAB" c="black" fullWidth  onClick={handleLogin}>Login</Button>
                            <Text c="white" size="sm">
                                Don't have an account?{' '}
                                <Button variant="subtle" size="xs" onClick={handleRegister}>
                                    Sign up
                                </Button>
                            </Text>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
