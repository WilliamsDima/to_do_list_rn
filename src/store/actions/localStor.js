/* eslint-disable prettier/prettier */
import {MMKVLoader} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();

export const writeLocalStorString = async (name, value) => {
  await MMKV.setStringAsync(name, value);
};

export const readLocalStorString = name => {
  const value = MMKV.getString(name);
  return value;
};

export const writeLocalStorArray = async (name, value) => {
  await MMKV.setArrayAsync(name, value);
};

export const readLocalStorArray = name => {
  const value = MMKV.getArray(name);
  return value;
};
