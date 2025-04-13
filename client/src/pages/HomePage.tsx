import {Button} from "@mantine/core";
import {useEffect, useRef, useState} from "react";
import axios from 'axios'
import {ChatList} from "../components/ChatList.tsx";
import {MessengerLayout} from "../components/MessengerLayout.tsx";
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

    return (
        <>
            <MessengerLayout></MessengerLayout>
        </>
    );
}