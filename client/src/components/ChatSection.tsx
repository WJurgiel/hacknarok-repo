import {Box, ScrollArea, Stack} from "@mantine/core";
import {MessageInput} from "./MessageInput.tsx";
import {useState} from "react";
import {MessageBox} from "./MessageBox.tsx";

interface ChatSectionProps {
    onOpenOverview: (messageText:string) => void;
}
export const ChatSection: React.FC<ChatSectionProps> = ({onOpenOverview}) => {
    const [messages, setMessages] = useState([
        { message: 'Hey there!', fromSelf: false },
        { message: 'Hi! How are you?', fromSelf: true },
        { message: 'I’m good, learning Polish 😄', fromSelf: false },
    ]);

    const handleSend = (msg: string) => {
        setMessages((prev) => [...prev, { message: msg, fromSelf: true }]);
    };
    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                padding: '1rem',
            }}
        >
            <ScrollArea style={{ flex: 1, marginBottom: '1rem' }}>
                <Stack spacing="xs">
                    {messages.map((msg, idx) => (
                        <MessageBox key={idx} message={msg.message} fromSelf={msg.fromSelf} onClick={()=>onOpenOverview(msg.message)} />
                    ))}
                </Stack>
            </ScrollArea>

            <MessageInput onSend={handleSend} />
        </Box>
    );
};