import {
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Stack,
    Select, Group,
} from '@mantine/core';
import {useEffect, useState} from 'react';
import axios from 'axios';
import styles from './modules/Register.module.css';
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [mainLanguage, setMainLanguage] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [languages, setLanguages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/languages/all") // <- tu Twój endpoint
            .then((res) => res.json())
            .then(data => {
                const onlyNames = data.map((language: { name: never; }) => language.name);
                setLanguages(onlyNames);
            })
            .catch((err) => console.error("Błąd pobierania:", err));
    }, []);

    const handleRegister = async () => {
        setError('');
        if (password !== repeatPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/v1/register/form', {
                name,
                surname,
                email,
                password,
                age: parseInt(age),
                gender,
                mainLanguage,
                learningLanguages: [],
            });

            console.log('Registration successful:', response.data);
            navigate('/home');
        } catch (err: unknown) {
            console.error('Registration failed:', err);
            setError('Registration failed');
        }
    };

    return (
        <div className={styles.registerWrapper}>
            <div className={styles.registerCard}>
                <div className={styles.leftSide}>
                    <Group className={styles.logoBlock} align="center">
                        <img src="/logo.png" alt="BabelPal Logo" style={{ height: 100 }} />
                        <Title order={2} className={styles.appTitle}>BabelPal</Title>
                    </Group>
                    <div className={styles.illustration}>
                        <img src="/register-pic.svg" alt="Illustration" />
                    </div>
                </div>

                <div className={styles.formSide}>
                    <Title c="white" order={2} mb="md">Create your account</Title>
                    <Stack>
                        <TextInput label="First Name" c="white" value={name} onChange={(e) => setName(e.currentTarget.value)} required />
                        <TextInput label="Last Name" c="white" value={surname} onChange={(e) => setSurname(e.currentTarget.value)} required />
                        <TextInput label="Email" c="white" value={email} onChange={(e) => setEmail(e.currentTarget.value)} required />
                        <TextInput label="Age" c="white" type="number" value={age} onChange={(e) => setAge(e.currentTarget.value)} required />
                        <Select
                            label="Gender"
                            c="white"
                            data={["male", "female", "other"]}
                            value={gender}
                            onChange={(val) => setGender(val || '')}
                            required
                        />
                        <Select
                            label="Main Language"
                            c="white"
                            searchable
                            data={languages}
                            value={mainLanguage}
                            onChange={(val) => setMainLanguage(val || '')}
                            required
                        />
                        <PasswordInput
                            label="Password"
                            c="white"
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            required
                        />
                        <PasswordInput
                            label="Repeat Password"
                            c="white"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.currentTarget.value)}
                            required
                        />
                        {error && <Text c="red" size="sm">{error}</Text>}
                        <Button color="#829EAB" c="black" fullWidth onClick={handleRegister}>Sign Up</Button>
                        <Text size="sm" c="white">
                            Already have an account?{' '}
                            <Button variant="subtle" size="xs" onClick={() => navigate('/login')}>
                                Log in
                            </Button>
                        </Text>
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default Register;