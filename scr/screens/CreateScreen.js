import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Context } from '../context/BolgContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Enter Content :</Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />
            <Button
                title='Add Bolg Post'
                onPress={() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('index');
                    });

                }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        padding: 5
    },
    label: {
        fontSize: 20,
        margin: 5,
        padding: 5
    }
})

export default CreateScreen;
