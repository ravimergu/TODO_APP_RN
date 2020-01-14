import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { Context } from '../context/BolgContext';
import Icon from 'react-native-vector-icons/Feather';

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBolgPost } = useContext(Context);
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={bp => bp.id}
                renderItem={
                    ({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("show", { id: item.id })}>
                                <View style={styles.row}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <TouchableOpacity onPress={() => deleteBolgPost(item.id)}>
                                        <Icon size={18} name='trash' />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {

    return {
        headerRight: <TouchableOpacity onPress={() => {
            navigation.navigate('create');
        }}>
            <Icon name='plus' size={30} />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    }
})
export default IndexScreen
