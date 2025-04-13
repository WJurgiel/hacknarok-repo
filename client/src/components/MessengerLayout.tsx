import {Box, Flex} from "@mantine/core";
import {ChatList} from "./ChatList.tsx";
import {ChatSection} from "./ChatSection.tsx";
import {OverviewSection} from "./OverviewSection.tsx";
import {useState} from "react";

export const MessengerLayout: React.FC = () => {
    const [isOverviewOpen, setIsOverviewOpen] = useState(false);
    const [selectedMessage, setSelectedMessage] = useState<string>('');
    const handleOpenOverview = (messageText: string) => {
        setSelectedMessage(messageText);
        setIsOverviewOpen(true);
    };
    const handleCloseOverview = () => {
        setSelectedMessage("");
        setIsOverviewOpen(false);
    }

    const mockUsers= [
        {
            avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
            name: 'Anna',
            surname: 'Kowalska',
            lastMessage: 'Let’s catch up tomorrow!',
            chatLanguage: "PL",
            isMessageUnread: true
        },
        {
            avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
            name: 'John',
            surname: 'Smith',
            lastMessage: 'Sure, I’ll send the file!',
            chatLanguage: "BE"
        },
        {
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/640px-American_Beaver.jpg',
            name: 'Bu',
            surname: 'Br',
            lastMessage: 'Siema masz jakąś kłodę kurde ten',
            chatLanguage: "DE"
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
        }]
    return (
        <Flex style={{ height: '90vh' }}>
            <Box style={{ width: '30vw' }}>
                <ChatList users={mockUsers} />
            </Box>
            <Box
                style={{
                    flex: isOverviewOpen ? 1 : 2,
                    margin: '0 1rem',
                    backgroundColor: '#34444C',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <ChatSection onOpenOverview={handleOpenOverview} />
            </Box>

            {isOverviewOpen && (
                <Box
                    style={{
                        width: '25vw',
                        backgroundColor: '#edf2f7',
                        borderRadius: '12px',
                        boxShadow: '0 0 8px rgba(0,0,0,0.05)',
                        padding: '1rem',
                    }}
                >
                    <OverviewSection message={selectedMessage} onClose={handleCloseOverview} />
                </Box>
            )}
        </Flex>
    );
};
