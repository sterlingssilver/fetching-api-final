import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Character from './User';



const Characters = props => {

    const [isLoading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    

     const getCharacters =  () => {

        fetch('https://www.breakingbadapi.com/api/characters')
            .then((response) => response.json())
            .then((json) => { 
                setCharacters();
                console.log(json);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getCharacters();
    }, []);
    
    return(
        <View style={{ padding: 20 }}>
            {isLoading ? <Text>Loading...</Text> :
            (
                <FlatList
                    data={characters}
                    keyExtractor={({ id }) => id.characters()}
                    renderItem={({ item }) => <TouchableOpacity
                    onPress={() =>
                        props.navigation.navigate('User', {
                            id: item.id
                        })
                    }
                >
                    <View>
                        <Character characters={item.id} />
                    </View>
                </TouchableOpacity>}
                />
            )}
        </View>
    );
};
export default Characters;