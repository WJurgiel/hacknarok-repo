import { Button } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

export default function AddNewFriendButton() {
    return (
        <Button
            fullWidth
            radius="md"
            size="lg"
            variant="light"
            leftSection={<IconPlus size={24} />}
            styles={{
                root: {
                    backgroundColor: '#8C8C74',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '16px',
                    padding: '16px',
                    justifyContent: 'center',
                    border: 'none',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                },
                section: {
                    marginRight: 10,
                },
            }}
        >
            Draw a new friend
        </Button>
    );
}
