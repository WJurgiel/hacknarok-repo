import {ChatListProps} from "../types/ChatListProps.ts";
import React, {useEffect, useState} from 'react'
import {Box, ScrollArea, Stack} from "@mantine/core";
import {UserCard} from "./UserCard.tsx";
import {SearchBar} from "./SearchBar.tsx";
import Header from "./Header.tsx";
import AddNewFriendButton from "./AddNewFriendButton.tsx";
import axios from "axios";
import {useCookies} from "react-cookie";
export const ChatList : React.FC<ChatListProps> = ({users}) =>{
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [cookies, setCookie] = useCookies(["email"]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setFilteredUsers(
            users.filter((user) =>
                `${user.name} ${user.surname}`.toLowerCase().includes(query.toLowerCase())
            )
        );
    };
    useEffect(() => {
        console.log(cookies.email);

        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8080/api/v1/lastChatters', {
                    email: cookies.email
                });
                console.log(response.data);
                setFilteredUsers(response.data);
            } catch (err) {
                console.error('Błąd pobierania:', err);
            }
        };

        if (cookies.email) {
            fetchData(); // ⬅️ TUTAJ było brakujące wywołanie!
        }
    }, [cookies.email]);


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
                        {filteredUsers.map((message, idx) => (
                            message.fromUser && (
                                <UserCard
                                    key={idx}
                                    name={message.fromUser.name}
                                    email={message.fromUser.email}
                                    lastMessage={message.text}
                                    avatarUrl={"/public/profile-pic.png"}
                                />
                            )
                        ))}
                    </Stack>
                </ScrollArea>
            </Box>
        </div>

    );
}