import React from 'react';
import {
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

const Converstation = ({carItem}) => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={carItem?.thumnail}
          style={styles.avatarImage}></Image>
        <View
          style={styles.body}>
          <Text
            style={styles.textName}>
            {carItem?.name}
          </Text>
          <View
            style={styles.action}>
            <View
              style={styles.alignCenter}>
              <Icon name="star" size={16} color={'orange'} />
              <Text
                style={styles.mgl6}>
                {carItem?.star}
              </Text>
            </View>
            <View
              style={styles.alignCenter}>
              <Icon name="wechat" size={16} color={'orange'} />
              <Text
                style={styles.mgl6}>
                {carItem?.comment}
              </Text>
            </View>
            <View
              style={styles.alignCenter}>
              <Icon name="camera" size={16} color={'red'} />
              <Text
                style={styles.mgl6}>
                {carItem?.image}
              </Text>
            </View>
          </View>
          <View
            style={styles.alignCenter}>
            <Icon name="map-marker" size={16} color="black"></Icon>
            <Text
              style={styles.mgl6}>
              {carItem?.address}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
  },
  avatarImage: {
    width: 176,
    height: 150,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  body:{
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  textName: {
    color: 'black',
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 6,
  },
  alignCenter: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  mgl6: {
    marginLeft:6
  }

});

export default Converstation;
