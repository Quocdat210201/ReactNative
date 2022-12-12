import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {useState, useEffect} from 'react';
import DialogInput from 'react-native-dialog-input';
import Constant from '../../controller/Constant';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PhoneBook from './phoneBook';
import {Button, Dialog, Portal} from 'react-native-paper';
import { red100 } from 'react-native-paper/lib/typescript/styles/colors';

const DetailPhoneBook = () => {
  const route = useRoute();
  const phoneItem = route.params?.phoneItem;
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState(phoneItem?.name);
  const [phoneNumber, setPhoneNumber] = useState(phoneItem?.phoneNumber);

  return (
    <View style={styles.rootView}>
      <View style={styles.contactView}>
        <TouchableOpacity style={styles.buttonAvatar}>
          <Image style={styles.avatarImg} source={phoneItem?.avatar} />
        </TouchableOpacity>
        <View style={styles.contentView}>
          <Text style={styles.nameView}>{name}</Text>
          <Text styles={styles.phoneNumber}>{phoneNumber}</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.callIcon}>
            <Icon name="phone" size={25} color="blue"></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.callIcon}
            onPress={() => setVisible(true)}>
            <Icon name="edit" size={25} color="orange"></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <Dialog visible={visible}>
        <Dialog.Title style={{textAlign: 'center'}}>
          Chỉnh sửa thông tin
        </Dialog.Title>
        <Dialog.Content>
          <TextInput
            style={styles.dialogInput}
            onChangeText={value => setName(value)}
            value={name}
            autoCapitalize={'none'}
            //   autoFocus={true}
          />
          <TextInput
            style={styles.dialogInput}
            onChangeText={value => setPhoneNumber(value)}
            value={phoneNumber}
            autoCapitalize={'none'}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setVisible(false)}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    flexDirection: 'column',
  },
  contactView: {
    width: Constant.screen.width * 0.9,
    height: Constant.screen.height * 0.35,
    backgroundColor: Constant.color.white,
    alignItems: 'center',
    borderRadius: 30,
    paddingTop: 10,
  },
  buttonAvatar: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    backgroundColor: 'transform',
  },
  avatarImg: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: Constant.color.gray,
  },
  contentView: {
    marginVertical: 10,
    alignItems: 'center',
  },
  nameView: {
    fontSize: 16,
    color: Constant.color.black,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 16,
  },
  buttonView: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  callIcon: {
    marginHorizontal: 10,
  },
  diaryView: {
    width: Constant.screen.width * 0.9,
    height: Constant.screen.height * 0.4,
    backgroundColor: Constant.color.white,
    borderRadius: 30,
    marginTop: 20,
  },
  diaryName: {
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dialogInput: {
    marginTop: 10,
    borderWidth: 1,
    borderColor:'#c9c9c9',
    borderRadius: 100,
    paddingHorizontal: 16,

  },
});

export default DetailPhoneBook;
