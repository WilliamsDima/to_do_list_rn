import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ToastAndroid, View} from 'react-native';
import { getThemeApp } from '../theme/styles';


export const Item = React.memo(({text, onRemove, todo, applicationTheme}) => {

    const theme = getThemeApp(applicationTheme);
    const textStyle = theme.text.color;
    const contentStyle = theme.content.bg;

    const removeHendler = () => {
        ToastAndroid.show('delete', 2000);
        onRemove(todo.id);
    };

    return (
        <View style={[styles.item, {borderColor: '#2EE5AC', backgroundColor: contentStyle}]}>

            <Text style={[{width: '90%', color: textStyle}]}>{text}</Text>

            <TouchableOpacity 
                onPress={removeHendler} style={{width: 30, height: 30, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.btn}>X</Text>
            </TouchableOpacity>

        </View>
    );
}) 

const styles = StyleSheet.create({
    item: {
        width: '100%',
        marginTop: 10,
        marginBottom: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btn: {
        color: 'red',
        fontSize: 21
    }
});