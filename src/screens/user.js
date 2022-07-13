import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const CharacterScreen = props => {

    const id = props.navigation.getParam('id');

    const [isLoading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [charactersName, setCharactersName] = useState([]);
    const [charactersNickname , setCharactersNickname] = useState([]);
    const [charactersStatus, setCharactersStatus] = useState([]);
    const [charactersAppearance , setCharactersAppearance] = useState([]);

    const getCharacters = () => {

        fetch('https://www.breakingbadapi.com/api/characters' + id)
            .then((response) => response.json())
            .then((json) => {
                setCharacters(json);
                console.log(json);
                setCharactersName(json.name);
                setCharactersNickname(json.nickname);
                setCharactersStatus(json.status);
                setCharactersAppearance(json.appearance)
                
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
    useEffect(() => {
        console.log()
        setLoading(true);
        getCharacters();
    }, []);
    return (

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {isLoading ? <Text>Loading...</Text> :
                (
                    <View>
                        <Text style={{ alignItems: 'center', fontSize: 25 }}>{charactersName.name}</Text>
                        <Text>Occupation: {characters.occupation}</Text>
                        <Text>Status: {charactersStatus.status} </Text>
                        <Text>Nickname: {charactersNickname.nickname}</Text>
                        <Text>Season Appearance{charactersAppearance.appearance}  </Text>
                    </View>
                )}
        </View>
    );
};
CharacterScreen.navigationOptions = {
    title: 'User Details'
};
export default CharacterScreen;