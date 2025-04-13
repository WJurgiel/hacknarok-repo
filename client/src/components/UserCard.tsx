import {Image, Avatar, Card, Group, Text} from "@mantine/core";
import {UserCardProps} from "../types/UserCardProps.ts";
import React from 'react'
export const UserCard: React.FC<UserCardProps> = ({avatarUrl,name, surname, lastMessage, chatLanguage, isMessageUnread}) => {
    const flagUrl = `https://flagsapi.com/GB/flat/64.png`;
    return (
        <Card
            shadow="xs"
            padding="sm"
            radius="sm"
            style={{
                width: '100%',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer',
                backgroundColor: '#234459',
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '';
                (e.currentTarget as HTMLElement).style.transform = '';
            }}
        >
            {isMessageUnread && (
                <div
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: 15,
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: 'red',
                        border: '2px solid white',
                    }}
                />
            )}
            <Group align="center" >
                <Avatar src={avatarUrl} radius="xl" size="md" />
                <div style={{ flex: 1, minWidth: 0 }}>
                    <Group spacing={4}>
                        <Text fw={500} size="sm" style={{color: 'white'}}>
                            {name} {surname}
                        </Text>
                        <Image
                            src={flagUrl}
                            alt={chatLanguage}
                            width={24}
                            height={18}
                            radius="xs"
                        />
                    </Group>

                    {!isMessageUnread && <Text size="xs" c="dimmed" lineClamp={1} style={{color: "white"}}>
                        {lastMessage}
                    </Text>}
                    {isMessageUnread && <Text size="xs" lineClamp={1} style={{color: "white"}}>
                        {lastMessage}
                    </Text>}
                </div>
            </Group>
        </Card>
    );
}