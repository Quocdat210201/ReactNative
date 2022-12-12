import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Constant from '../../controller/Constant';
import HomeScreen from '../home/HomeScreen';
import ProfileScreen from '../profile/ProfileScreen';
import LoginScreen from '../authentication/login/LoginScreen';
import PhoneBook from '../telephoneDirectory/phoneBook';
import DetailPhoneBook from '../telephoneDirectory/detailPhoneBook';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Constant.nameScreen.PhoneBook}>
        <Stack.Screen
          name={Constant.nameScreen.DetailPhoneBook}
          component={DetailPhoneBook}
          options={{
            title: 'Chi tiết danh bạ',
          }}
        />
        <Stack.Screen
          name={Constant.nameScreen.Login}
          component={LoginScreen}
        />
        <Stack.Screen name={Constant.nameScreen.Home} component={HomeScreen} />
        <Stack.Screen
          name={Constant.nameScreen.PhoneBook}
          component={PhoneBook}
          options={{
            title: 'Danh bạ',
            headerStyle: {
              backgroundColor: '#ccc',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
