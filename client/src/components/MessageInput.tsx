import {ActionIcon, Group, Textarea} from "@mantine/core";
import {useState} from "react";
import {IconSend2} from '@tabler/icons-react';
interface MessageInputProps {
    onSend: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
    const [value, setValue] = useState('');

    const handleSend = () => {
        if (value.trim()) {
            onSend(value);
            setValue('');
        }
    }

    return (
        <Group justify="space-between" align="flex-end" style={{width: '100%'}}>
            <Textarea
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                placeholder="Type your message..."
                autosize
                minRows={1}
                maxRows={5}
                style={{flexGrow: 1}}
            />
            <ActionIcon
                variant="filled"
                color="blue"
                size="lg"
                onClick={handleSend}
                style={{alignSelf: 'flex-end'}}
            >
                <IconSend2 size={20} />
            </ActionIcon>
        </Group>
    )
}