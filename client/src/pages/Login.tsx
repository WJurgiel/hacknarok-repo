import styles from './modules/Login.module.css';
import {
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Stack,
    Center
} from '@mantine/core';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        setError('');
        try {
            const response = await axios.post('http://localhost:8080/api/v1/login/form', {
                email,
                password,
            });

            console.log('Login success:', response.data);
        } catch (err: unknown) {
            console.error('Login failed:', err);
            setError('Invalid email or password');
        }
    };

    const handleRegister = () => {
        console.log('Navigate to register');
    };

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginContainer}>
                <Center className={styles.logoBlock}>
                    <img src="/logo.png" alt="BabelPal logo" className={styles.logo} />
                    <Title order={1} className={styles.appTitle}>BabelPal</Title>
                    <Text c="dimmed" size="lg" >
                        Where languages meet and friendships grow.
                    </Text>
                </Center>

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
                            <Button color="#829EAB" fullWidth  onClick={handleLogin}>Login</Button>
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
