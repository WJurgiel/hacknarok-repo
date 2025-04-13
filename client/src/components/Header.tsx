import { Group, Title, Box, Avatar } from '@mantine/core';

export default function Header() {
    return (
        <Box
            style={{
                backgroundColor: '#34444C',
                borderBottomRightRadius: '20px',
                padding: '12px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            }}
        >
            <Group align="center">
                <img src="/logo.png" alt="Logo" style={{ height: 50 }} />
                <Title order={3} style={{ color: '#fff', fontWeight: 700 }}>
                    BabelPal
                </Title>
            </Group>

            <Avatar src="/profile-pic.png" radius="xl" size={50} />
        </Box>
    );
}
