import {ChatListProps} from "../types/ChatListProps.ts";
import React from 'react'
import {Box, ScrollArea, Stack} from "@mantine/core";
import {UserCard} from "./UserCard.tsx";
export const ChatList : React.FC<ChatListProps> = ({users}) =>{
    return (
        <Box
            p="sm"
            style={{
                width: '100%',
                maxWidth: 400,
                height: '80vh', // or use '100%' for a flex parent
                boxShadow: '0 0 10px rgba(0,0,0,0.05)',
                backgroundColor: '#f8f9fa',
                borderRight: '1px solid #e0e0e0',
                borderRadius: '12px'
            }}
        >
            <ScrollArea style={{ height: '100%' }} scrollbarSize={6}>
                <Stack spacing="xs">
                    {users.map((user, idx) => (
                        <UserCard key={idx} {...user} />
                    ))}
                </Stack>
            </ScrollArea>
        </Box>
    );
}