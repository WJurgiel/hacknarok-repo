import {Button} from "@mantine/core";
import {useEffect, useRef, useState} from "react";
import axios from 'axios'
import {UserCard} from "../components/UserCard.tsx";
import {ChatList} from "../components/ChatList.tsx";
export const HomePage = () => {
    const [timeStamp, setTimeStamp] = useState("");
    const [buttonClick, setButtonClick] = useState<boolean>(false);
    const hasMounted = useRef(false);

    useEffect(() => {
        if (hasMounted.current) {
            axios.get(
                'http://localhost:8080/api/v1/home'
            ).then(response => setTimeStamp(response.data))
        } else {
            hasMounted.current = true;
        }
    }, [buttonClick]);

    const click = () => {
        setButtonClick(prev => !prev);
    };
    const mockUsers= [
        {
            avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
            name: 'Anna',
            surname: 'Kowalska',
            lastMessage: 'Let’s catch up tomorrow!',
        },
        {
            avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
            name: 'John',
            surname: 'Smith',
            lastMessage: 'Sure, I’ll send the file!',
        },
        {
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/640px-American_Beaver.jpg',
            name: 'Bu',
            surname: 'Br',
            lastMessage: 'Siema masz jakąś kłodę kurde ten',
        },
        {
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/640px-American_Beaver.jpg',
            name: 'Bu',
            surname: 'Br',
            lastMessage: 'Siema masz jakąś kłodę kurde ten',
        },
        {
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/640px-American_Beaver.jpg',
            name: 'Bu',
            surname: 'Br',
            lastMessage: 'Siema masz jakąś kłodę kurde ten',
        },
        {
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/640px-American_Beaver.jpg',
            name: 'Bu',
            surname: 'Br',
            lastMessage: 'Siema masz jakąś kłodę kurde ten',
        },
        {
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/640px-American_Beaver.jpg',
            name: 'Bu',
            surname: 'Br',
            lastMessage: 'Siema masz jakąś kłodę kurde ten',
        },
        {
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/640px-American_Beaver.jpg',
            name: 'Bu',
            surname: 'Br',
            lastMessage: 'Siema masz jakąś kłodę kurde ten',
        }
    ];
    return (
        <>
            <Button variant="filled" onClick={click}>Button</Button>
            <ChatList users={mockUsers} />
            <br/>
            <span>{timeStamp}</span>
        </>
    );
}