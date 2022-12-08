import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
// import LinearGradient from 'react-native-linear-gradient';

import Constant from '../../../controller/Constant';

const LoginScreen = () => {
  const [checked, setChecked] = React.useState('Cá nhân');

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Image styles={styles.backIcon} source={Constant.images.back} />
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={Constant.images.logo} />
            <Text style={styles.logoTitle}>CARECAR</Text>
          </View>

          <View style={styles.radioButtonContainer}>
            <RadioButton
              style={styles.radioButton}
              value="Cá nhân"
              status={checked === 'Cá nhân' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Cá nhân')}></RadioButton>
            <Text style={styles.radioButtonTitle}>Cá nhân</Text>
            <RadioButton
              style={styles.radioButton}
              value="Garage"
              status={checked === 'Garage' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Garage')}></RadioButton>
            <Text style={styles.radioButtonTitle}>Garage</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Số điện thoại"
              placeholderTextColor="rgba(0,0,0,0.2)"
              keyboardType="numeric"
              autoCorrect={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              placeholderTextColor="rgba(0,0,0,0.2)"
              autoCorrect={false}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Đăng nhập</Text>
          </TouchableOpacity>

          <View style={styles.socialNetwork}>
            <TouchableOpacity style={styles.socialNetworkBorder}>
              <Image
                style={styles.socialNetworkIcon}
                source={Constant.images.facebook}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialNetworkBorder}>
              <Image
                style={styles.socialNetworkIcon}
                source={Constant.images.zalo}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialNetworkBorder}>
              <Image
                style={styles.socialNetworkIcon}
                source={Constant.images.apple}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.registerTitle}>Bạn chưa có tài khoản?</Text>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f79925',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  loginContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  logo: {
    width: 150,
    height: 50,
  },
  logoTitle: {
    fontSize: 16,
    color: Constant.color.primary,
    fontWeight: 'bold',
  },
  radioButtonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  // radioButton: {
  //     height: 20,
  //     width: 20,
  //     backgroundColor: Constant.color.while,
  //     borderRadius: 10,
  //     borderWidth: 1,
  //     borderColor: Constant.color.black,
  //     alignItems: 'center',
  //     justifyContent: 'center'
  // },
  radioButtonTitle: {
    fontSize: 16,
    marginLeft: 5,
    color: Constant.color.black,
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15,
  },
  inputTitle: {
    fontSize: 16,
    color: Constant.color.gray,
    fontWeight: 'bold',
  },
  input: {
    width: 280,
    height: 40,
    fontSize: 16,
    color: Constant.color.black,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: Constant.color.while,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    marginTop: 15,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#D0211C',
    paddingVertical: 10,
    width: 280,
    alignItems: 'center',
    borderRadius: 8,
  },
  loginButtonText: {
    fontSize: 16,
    color: Constant.color.while,
    fontWeight: 'bold',
  },
  socialNetwork: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  socialNetworkBorder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  socialNetworkIcon: {
    width: 50,
    height: 50,
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#D0211C',
    fontSize: 16,
    marginTop: 10,
  },
  registerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  registerTitle: {
    fontSize: 16,
    color: Constant.color.black,
  },
  registerButton: {
    marginLeft: 10,
    backgroundColor: '#D0211C',
    width: 'auto',
    height: 'auto',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    color: Constant.color.while,
    fontWeight: 'bold',
    paddingHorizontal: 13,
    paddingVertical: 7,
  },
});

export default LoginScreen;
