/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { getThemeApp } from '../theme/styles';

export const Header = React.memo(({themeHandler, themeApp}) => {
    
    const theme = getThemeApp(themeApp);


  return (
    <View>
        <View style={[styles.header, {backgroundColor: theme.header.bg}]}>

            <View>
                <Text style={styles.text}>Запоминатор Lite</Text>
            </View>

            
            <TouchableOpacity style={styles.btn} onPress={themeHandler}>
                <View style={[styles.light,  themeApp === 'dark' && {display: 'flex'}]}></View>
                <View style={[styles.dark, themeApp === 'light' && {display: 'flex'}]}></View>
            </TouchableOpacity>
            
        </View>
    </View>
  );
})

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#ccc',
        justifyContent: 'space-between'
    },
    btn: {
        height: 30,
        width: 30,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#2EE5AC',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    light: {
        display: 'none',
        height: 15,
        width: 15,
        borderRadius: 5,
        backgroundColor: '#ccc'
    },
    dark: {
        display: 'none',
        height: 15,
        width: 15,
        borderRadius: 5,
        backgroundColor: '#000'
    },
    text: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20
    }
});
