import React from 'react';
import { Box, Text } from '@mantine/core';

interface MessageBoxProps {
    message: string;
    fromSelf: boolean;
    onClick?: () => void;
}

export const MessageBox: React.FC<MessageBoxProps> = ({ message, fromSelf, onClick}) => {
    return (
        <Box
            onClick={onClick}
            style={{
                alignSelf: fromSelf ? 'flex-end' : 'flex-start',
                backgroundColor: fromSelf ? '#4dabf7' : '#e9ecef',
                color: fromSelf ? 'white' : 'black',
                padding: '0.5rem 1rem',
                borderRadius: '16px',
                maxWidth: '60%',
                wordWrap: 'break-word',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
            }}
        >
            <Text>{message}</Text>
        </Box>
    );
};
