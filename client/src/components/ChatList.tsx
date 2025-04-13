import {ChatListProps} from "../types/ChatListProps.ts";
import React, {useState} from 'react'
import {Box, ScrollArea, Stack} from "@mantine/core";
import {UserCard} from "./UserCard.tsx";
import {SearchBar} from "./SearchBar.tsx";
import Header from "./Header.tsx";
import AddNewFriendButton from "./AddNewFriendButton.tsx";
export const ChatList : React.FC<ChatListProps> = ({users}) =>{
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setFilteredUsers(
            users.filter((user) =>
                `${user.name} ${user.surname}`.toLowerCase().includes(query.toLowerCase())
            )
        );
    };
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '25vw'}}>
            <Box>
                <Header />
                <Box mt="md">
                    <AddNewFriendButton />
                </Box>
            </Box>

            <Box
                p="sm"
                style={{
                    width: '100%',
                    height: '78vh',
                    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
                    backgroundColor: '#234459',
                    borderRadius: '12px',
                    marginTop: '1rem',
                }}
            >
                <Box mt="md" px="md">
                    <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
                </Box>
                <ScrollArea style={{height: '80%'}} scrollbarSize={6}>
                    <Stack spacing="xs">
                        {filteredUsers.map((user, idx) => (
                            <UserCard key={idx} {...user} />
                        ))}
                    </Stack>
                </ScrollArea>
            </Box>
        </div>

    );
}