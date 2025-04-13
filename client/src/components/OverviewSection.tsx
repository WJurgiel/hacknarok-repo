import {Box, Button, Group, ScrollArea, Stack, Text, Title} from '@mantine/core'
import {useEffect, useState} from "react";
import axios from "axios";
interface OverviewSectionProps {
    message: string;
    onClose: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ message, onClose }) => {
    const [translation, setTranslation] = useState('');
    const [feedback, setFeedback] = useState('');
    const [loading, setLoading] = useState(false);

    console.log(message)
    const fetchData = async () => {
        setLoading(true);
        const payload = {
            text: message,
            userLanguage: "polish", // Or dynamically get user's selected language
        };
        try {
            const translateResponse = await axios.post('http://localhost:8080/api/translate', payload);
            setTranslation(translateResponse.data);

            const feedbackResponse = await axios.post('http://localhost:8080/api/feedback', payload);
            setFeedback(feedbackResponse.data);
        } catch (error) {
            console.error('Error fetching AI data:', error);
            setTranslation('Failed to load translation.');
            setFeedback('Failed to load feedback.');
        }
        setLoading(false);
    };

    useEffect(() => {
        setTranslation('');
        setFeedback('');
        fetchData();
    }, [message]);

    return (
        <Box style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Group position="apart" mb="sm">
                <Title order={4}>AI OVERVIEW</Title>
                <Group>
                    <Button size="xs" variant="outline" onClick={fetchData} loading={loading}>
                        Retry
                    </Button>
                    <Button size="xs" color="red" variant="light" onClick={onClose}>
                        Close
                    </Button>
                </Group>
            </Group>

            <ScrollArea style={{ flex: 1 }}>
                <Stack spacing="md">
                    <Box>
                        <Title order={5}>Translation</Title>
                        <Text>{loading && !translation ? 'Loading...' : translation}</Text>
                    </Box>
                    <Box>
                        <Title order={5}>Feedback</Title>
                        <Text>{loading && !feedback ? 'Loading...' : feedback}</Text>
                    </Box>
                </Stack>
            </ScrollArea>
        </Box>
    );
};