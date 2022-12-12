import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Fea,
  FlatList,
} from 'react-native';
import Constant from '../../controller/Constant';
import PhoneBookItems from './components/phoneBookItems';
import Icon from 'react-native-vector-icons/FontAwesome';

const phoneItem = [
  {
    id: 1,
    avatar: Constant.images.car1,
    name: 'Phan Quốc Đạt',
    phoneNumber: '0964516438',
  },
  {
    id: 2,
    avatar: Constant.images.car2,
    name: 'Le Duẩn',
    phoneNumber: '096453338',
  },
  {
    id: 3,
    avatar: Constant.images.car3,
    name: 'Hàm Nghi',
    phoneNumber: '0964687438',
  },
  {
    id: 4,
    avatar: Constant.images.car4,
    name: 'Hùng Vương',
    phoneNumber: '0966781438',
  },
  {
    id: 5,
    avatar: Constant.images.car5,
    name: 'Nguyễn Hữu Thọ',
    phoneNumber: '0968765438',
  },
  {
    id: 6,
    avatar: Constant.images.car1,
    name: 'Phan Quốc Đạt',
    phoneNumber: '0964516438',
  },
  {
    id: 7,
    avatar: Constant.images.car2,
    name: 'Le Duẩn',
    phoneNumber: '096453338',
  },
  {
    id: 8,
    avatar: Constant.images.car3,
    name: 'Hàm Nghi',
    phoneNumber: '0964687438',
  },
  {
    id: 9,
    avatar: Constant.images.car4,
    name: 'Hùng Vương',
    phoneNumber: '0966781438',
  },
  {
    id: 10,
    avatar: Constant.images.car5,
    name: 'Nguyễn Hữu Thọ',
    phoneNumber: '0968765438',
  },
  {
    id: 11,
    avatar: Constant.images.car1,
    name: 'Phan Quốc Đạt',
    phoneNumber: '0964516438',
  },
  {
    id: 12,
    avatar: Constant.images.car2,
    name: 'Le Duẩn',
    phoneNumber: '096453338',
  },
  {
    id: 13,
    avatar: Constant.images.car3,
    name: 'Hàm Nghi',
    phoneNumber: '0964687438',
  },
  {
    id: 14,
    avatar: Constant.images.car4,
    name: 'Hùng Vương',
    phoneNumber: '0966781438',
  },
  {
    id: 15,
    avatar: Constant.images.car5,
    name: 'Nguyễn Hữu Thọ',
    phoneNumber: '0968765438',
  },
];

const PhoneBook = () => {
  

  return (
    <View style={styles.MainContainer}>
      <View style={{marginTop: 10}}>
        <FlatList
          numColumns={1}
          data={phoneItem}
          renderItem={({item, index}) => <PhoneBookItems phoneItem={item} />}
          keyExtractor={(item, index) => item?.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
});

export default PhoneBook;
