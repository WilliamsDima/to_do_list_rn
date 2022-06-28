import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import { Header } from '../components/Header';
import { ToDos } from '../components/ToDos';
import { Form } from '../components/form';
import { useDispatch, useSelector } from 'react-redux';
import { chengeThemeApp } from '../store/redusers/main';
import { getThemeApp } from '../theme/styles';

export const Main = () => {

  const dispatch = useDispatch();
  const applicationTheme = useSelector(state => state.main.applicationTheme);
  const theme = getThemeApp(applicationTheme);
  const contentStyle = theme.content.bg;
  const [themeApp, setThemeApp] = useState('light');

  const themeHandler = () => {
    if (themeApp === 'light') {
      setThemeApp('dark');
      dispatch(chengeThemeApp('dark'));
    } else {
      setThemeApp('light');
      dispatch(chengeThemeApp('light'));
    }
  };

  useEffect(() => {
    setThemeApp(applicationTheme);
  }, []);

  return (
      <SafeAreaView style={{flex: 1, backgroundColor: contentStyle}}>
        <Header themeHandler={themeHandler} themeApp={themeApp}/>
        <ToDos />
        <Form />
      </SafeAreaView>
  );
};
