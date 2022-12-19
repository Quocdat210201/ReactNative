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
import Constant from '../../../controller/Constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
import {useNavigation} from '@react-navigation/native';

const PhoneBookItems = ({phoneItem}) => {
  const navigation = useNavigation();

  const handleTapPhoneBookItem = () => {
    navigation.navigate(Constant.nameScreen.DetailPhoneBook, {phoneItem});

    // navigation.dispatch(StackActions.push(Constant.nameScreens.DetailContact))
  };

  return (
    <TouchableOpacity onPress={handleTapPhoneBookItem} style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.contentAvatar} source={{ uri : phoneItem?.avatar}}></Image>
        <View style={styles.contentInfo}>
          <Text style={styles.contentInfoName}>{`${phoneItem?.first_name} ${phoneItem?.last_name}`}</Text>
          <Text style={styles.contentInfoNumberPhone}>
            {phoneItem?.email}
          </Text>
        </View>
      </View>
      <View style={styles.iconPhone}>
        <Icon name="phone" size={26} color="blue"></Icon>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  contentAvatar: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    borderRadius: 100,
    marginTop: 18,
  },
  contentInfo: {
    marginLeft: 8,
  },
  contentInfoName: {
    fontSize: 16,
    color: 'black',
    marginTop: 18,
  },
  contentInfoNumberPhone: {
    fontSize: 16,
    color: 'black',
  },
  iconPhone: {
    backgroundColor: '#ddd',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});

export default PhoneBookItems;
