import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Keyboard, ToastAndroid, Alert} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getThemeApp } from '../theme/styles';
import { PlusSvg } from '../../assets/svg/PlusSvg';
import { addToDo } from '../store/redusers/main';

export const Form = React.memo(({}) => {

    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const [inputFocus, setInputFocus] = useState(false);
    const inputRef = React.createRef();

    const applicationTheme = useSelector(state => state.main.applicationTheme);

    const theme = getThemeApp(applicationTheme);
    const inputStyle = theme.input.bg;
    const textStyle = theme.text.color;

    const focusStyleContainer = inputFocus ? {backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', height: '100%'} 
    : {height: '0%'};

    const focusStyleInput = inputFocus ? {opacity: 1} : {opacity: 0};

    const setStore = () => {
        const todo = {
            id: +new Date(),
            text
        };
    
        dispatch(addToDo(todo));
    
    };
    
    const addTodoHandler = () => {
        if (text.trim().length > 300) {
            Alert.alert('Error', 'maximum - 300 characters')
        } else if (text.trim().length < 3) {
            Alert.alert('Error', 'minimum - 3 characters')
        } else {
            setStore();
            setText('');
            Keyboard.dismiss();
            ToastAndroid.show('adding', 2000);
        }
    };

        
  const focusInputHandler = (value) => {
        setInputFocus(value);

        if (value) {
        inputRef.current.focus();
        }
    };

    const fucusHandler = () => {
        if (!inputFocus) {
            focusInputHandler(true);
        } else {
            addTodoHandler();
        }
    };

    
    useEffect(() => {

        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            focusInputHandler(false);
        });
    
        return () => {
          hideSubscription.remove();
        };
    }, []);

    return (
        <View style={[styles.formContainer, focusStyleContainer]}>

            <TouchableOpacity 
            style={[styles.inputWraper, {paddingHorizontal: 10}]} 
            activeOpacity={1}
            onPress={() => Keyboard.dismiss()}>

                <TextInput 
                style={[styles.input, focusStyleInput, {backgroundColor: inputStyle, color: textStyle, borderColor: '#2EE5AC'}]} 
                placeholder={'text'} 
                placeholderTextColor={'#ccc'}
                value={text} 
                onChangeText={setText}
                multiline={true}
                ref={inputRef}/>
            </TouchableOpacity>


            
            <TouchableOpacity style={styles.addingBtn} onPress={() => fucusHandler()}>
                <PlusSvg color={'#2EE5AC'} inputFocus={inputFocus}/>
            </TouchableOpacity>
            
        </View>
    );
});

const styles = StyleSheet.create({
    formContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        zIndex: 1000,
        alignItems: 'center',

    },
    inputWraper: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    input: {
        width: '100%',
        padding: 7,
        borderRadius: 10,
        borderWidth: 1,
    },
    addingBtn: {
        bottom: 80,
        height: '100%',
    },
});
