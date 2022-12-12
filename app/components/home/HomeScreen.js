import React, {useState} from 'react';
import {
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
import Converstation from './components/ConverstationItem';
import Icon from 'react-native-vector-icons/FontAwesome';

const carItem = [
  {
    id: 1,
    thumnail: Constant.images.car1,
    name: 'HOANG TRANG car',
    star: 5,
    comment: 23,
    image: 5,
    address: 'Hải Châu, Đà Nẵng',
  },
  {
    id: 2,
    thumnail: Constant.images.car2,
    name: 'Shinwa Pro',
    star: 4.8,
    comment: 17,
    image: 0,
    address: 'Cẩm Lệ, Đà Nẵng',
  },
  {
    id: 3,
    thumnail: Constant.images.car3,
    name: 'Garage Hoàng Anh',
    star: 4.7,
    comment: 12,
    image: 0,
    address: 'Cẩm Lệ, Đà Nẵng',
  },
  {
    id: 4,
    thumnail: Constant.images.car4,
    name: 'Garage Nomura',
    star: 4.4,
    comment: 20,
    image: 10,
    address: 'Hải Châu, Đà Nẵng',
  },
  {
    id: 5,
    thumnail: Constant.images.car5,
    name: 'Garage Ô Tô Ninh',
    star: 4.3,
    comment: 13,
    image: 0,
    address: 'Liên Chiểu, Đà Nẵng',
  },
];

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.actionTop}>
        <View style={styles.search}>
          <TouchableOpacity>
            <Image style={styles.logo} source={Constant.images.search} />
          </TouchableOpacity>
          <TextInput
            style={styles.inputSearch}
            placeholder="Nhập tên garage hoặc dịch vụ"></TextInput>
        </View>
        <View style={styles.inputSelect}>
          <TextInput style={styles.inputText} placeholder="Đà Nẵng"></TextInput>
          <TouchableOpacity>
            <Image style={styles.logo} source={Constant.images.down}></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.title}>Đối tác uy tín</Text>
        <TouchableOpacity
          style={styles.arowRight}>
          <Icon name="arrow-right" size={16} color={'black'}></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.MainContainer}>
        <FlatList
          numColumns={2}
          data={carItem}
          renderItem={({item, index}) => <Converstation carItem={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  container: {flex: 1, backgroundColor: '#f1f1f1'},
  actionTop: {
    flexDirection: 'row',
  },
  search: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'red',
  },
  input: {
    width: 220,
    fontSize: 16,
    color: Constant.color.black,
    borderRadius: 8,
  },
  inputSelect: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'red',
    marginRight: 10,
  },
  inputSearch: {
    width: 220,
    paddingVertical: 2,
    paddingHorizontal: 10,
    color: 'black',
  },
  inputText: {
    padding: 2,
    color: 'black',
  },
  logo: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    fontWeight: 'bold',
    marginVertical: 6,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  logoRight: {
    width: 16,
    height: 16,
    resizeMode: 'cover',
  },
  arowRight: {
    backgroundColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 500,
  }
});

export default HomeScreen;
