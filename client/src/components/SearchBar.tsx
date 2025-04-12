import {SearchBarProps} from "../types/SearchBarProps.ts";
import {TextInput} from "@mantine/core";

export const SearchBar: React.FC<SearchBarProps> = ({searchQuery, onSearch}) => {
    return (
        <TextInput
            placeholder="Search for a conversation..."
            value={searchQuery}
            onChange={(e) => onSearch(e.currentTarget.value)}
            icon="🔍"
            mb="md"
            style={{
                width: '90%',
                justifySelf: 'center'
            }}
        />
    );
}