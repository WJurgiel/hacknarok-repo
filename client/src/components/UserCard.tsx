import {Avatar, Card, Group, Text} from "@mantine/core";
import {UserCardProps} from "../types/UserCardProps.ts";
import React from 'react'
export const UserCard: React.FC<UserCardProps> = ({avatarUrl,name, surname, lastMessage}) => {
    return (
        <Card
            shadow="xs"
            padding="sm"
            radius="sm"
            withBorder
            style={{
                width: '100%',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                (e.currentTarget as HTMLElement).style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '';
                (e.currentTarget as HTMLElement).style.transform = '';
            }}
        >
            <Group align="center" >
                <Avatar src={avatarUrl} radius="xl" size="md" />
                <div style={{ flex: 1, minWidth: 0 }}>
                    <Text fw={500} size="xm">
                        {name} {surname}
                    </Text>
                    <Text size="xs" c="dimmed" lineClamp={1}>
                        {lastMessage}
                    </Text>
                </div>
            </Group>
        </Card>
    );
}