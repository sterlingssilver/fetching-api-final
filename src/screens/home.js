import React from 'react';
import { Text, View } from 'react-native';
import Characters from '../components/Users';



const HomeScreen = props => {
    return (
       <Characters  navigation={props.navigation}/>
    );
};

HomeScreen.navigationOptions = {
    title: 'Character List'
};


export default HomeScreen;