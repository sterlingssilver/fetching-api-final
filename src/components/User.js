import React from 'react';
import { Text, ScrollView } from 'react-native';

const Character = props => {
    return (
        <ScrollView>
            <Text  style={{padding: 10 }}>{props.characters.name}</Text>
        </ScrollView>
    );
};
export default Character;