import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {ms} from 'react-native-size-matters';
import React from 'react';
import {Input, Button} from '@rneui/base';
import {
  setLoginEmail,
  setLoginPassword,
  setToken,
  setName,
} from './redux/action';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

import {API} from '../../config/API';
import {colors} from '../../utils';
import {navigate} from '../../helpers/navigate';

const Index = () => {
  const {email, password, token} = useSelector(state => state.login);
  const dispatch = useDispatch();

  const body = {
    email: email,
    password: password, //
  };

  const login = async () => {
    try {
      const res = await axios.post(API.BASE_API.concat('/auth/login'), body);
      const getToken = () => {
        dispatch(setToken(res.data.tokens.access.token));
      };

      const getName = () => {
        dispatch(setName(res.data.user.name));
      };
      getName();

      if (res.status <= 201) getToken();
      navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        inputStyle={{fontSize: 18, paddingVertical: 15}}
        inputContainerStyle={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderColor: colors.border.color,
          borderRadius: 10,
        }}
        containerStyle={{paddingTop: 20, marginTop: 20}}
        leftIconContainerStyle={{
          marginRight: 8,
          marginLeft: 10,
        }}
        placeholder="Email"
        leftIcon={{
          type: 'material-icons',
          name: 'email',
          size: 30,
          color: colors.icon.color,
        }}
        onChangeText={text => dispatch(setLoginEmail(text))}
      />

      <Input
        inputStyle={{
          fontSize: 18,
          paddingVertical: 15,
          alignContent: 'center',
          justifyContent: 'center',
        }}
        inputContainerStyle={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderColor: colors.border.color,
          borderRadius: 10,
        }}
        containerStyle={{
          marginTop: 7,
        }}
        leftIconContainerStyle={{
          marginRight: 8,
          marginLeft: 10,
        }}
        placeholder="Password"
        leftIcon={{
          type: 'font-awesome-5',
          name: 'key',
          size: 30,
          color: colors.icon.color,
        }}
        onChangeText={text => dispatch(setLoginPassword(text))}
        secureTextEntry={true}
      />
      <Button
        onPress={login}
        buttonStyle={{
          padding: 15,
          borderRadius: 10,
          backgroundColor: colors.button.background,
        }}
        containerStyle={{
          paddingHorizontal: 10,
          marginTop: 25,
        }}
        titleStyle={{
          fontSize: 24,
          letterSpacing: 5,
          alignContent: 'center',
          justifyContent: 'center',
        }}
        title="LOGIN"
      />

      <Text style={styles.text}>Don't have an account?</Text>

      <TouchableOpacity onPress={() => navigate('Register')}>
        <Text style={styles.textregister}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPage,
    flex: 1,
  },
  item: {
    left: ms(40),
    top: ms(150),
    width: ms(280),
    marginBottom: ms(20),
    borderStyle: 'solid',
    borderWidth: ms(2),
    borderRadius: ms(10),
    borderColor: 'black',
    fontSize: 20,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: ms(14),
    marginLeft: ms(100),
    marginTop: ms(160),
  },
  textregister: {
    // fontWeight: 'bold',
    color: 'black',
    fontSize: ms(16),
    left: ms(138),
  },

  button: {
    backgroundColor: 'lightblue',
    width: ms(260),
    height: ms(60),
    borderRadius: ms(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    top: ms(150),
    left: ms(45),
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
