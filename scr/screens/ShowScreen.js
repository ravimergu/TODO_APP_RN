import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Context } from '../context/BolgContext';

import Icon from 'react-native-vector-icons/EvilIcons';

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find((bp) => bp.id == id);
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => {
            navigation.navigate('index');
        }}>
            <Icon name='pencil' size={30} />
        </TouchableOpacity>
    };
}
const styles = StyleSheet.create({

})

export default ShowScreen
