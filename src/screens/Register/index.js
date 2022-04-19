import {
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  setRegisterName,
  setRegisterEmail,
  setRegisterPassword,
} from './redux/action';

import {Button, Input} from '@rneui/base';
import {colors} from '../../utils';
import {navigate} from '../../helpers/navigate';
import {API} from '../../config/API';

const Index = ({navigation}) => {
  const dispatch = useDispatch();
  const {email, password, name} = useSelector(state => state.register);

  const payload = {
    email: email,
    password: password,
    name: name,
  };

  const postRegister = async () => {
    try {
      const res = await axios.post(
        API.BASE_API.concat('/auth/register'),
        payload,
      );
      console.log(res, 'resul');
      if (res.status <= 201);
      Alert.alert('Register Succes');
      navigation.navigate('Login');
      // navigation.navigate('Success');
    } catch (error) {
      console.log('gaaal');
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Input
        inputStyle={{fontSize: 18, paddingVertical: 15}}
        inputContainerStyle={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderRightWidth: 1,
          borderColor: colors.border.color,
          borderRadius: 10,
        }}
        containerStyle={{paddingTop: 20, marginTop: 20}}
        leftIconContainerStyle={{
          marginRight: 8,
          marginLeft: 10,
        }}
        placeholder="Username"
        leftIcon={{
          type: 'font-awesome-5',
          name: 'user-alt',
          size: 24,
          color: colors.icon.color,
        }}
        onChangeText={text => dispatch(setRegisterName(text))}
      />
      <Input
        inputStyle={{fontSize: 18, paddingVertical: 15}}
        inputContainerStyle={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderRightWidth: 1,
          borderColor: colors.border.color,
          borderRadius: 10,
        }}
        // containerStyle={{paddingTop: 20, marginTop: 0}}
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
        onChangeText={text => dispatch(setRegisterEmail(text))}
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
          borderRightWidth: 1,
          borderColor: colors.border.color,
          borderRadius: 10,
        }}
        // containerStyle={{
        //   marginTop: 7,
        // }}
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
        onChangeText={text => dispatch(setRegisterPassword(text))}
        secureTextEntry={true}
      />
      <Button
        onPress={postRegister}
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
        title="REGISTER"
      />

      <Text style={styles.text}>Don't have an account?</Text>

      <TouchableOpacity onPress={() => navigate('Login')}>
        <Text style={styles.textlogin}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPage,
    flex: 1,
  },
  logo: {
    width: ms(200),
    height: ms(200),
    marginTop: ms(100),
    marginLeft: ms(70),
  },
  item: {
    // marginTop: 20,
    width: ms(280),
    marginBottom: ms(20),
    borderStyle: 'solid',
    borderWidth: ms(2),
    borderRadius: ms(10),
    borderColor: 'gray',
    marginLeft: ms(32),
    fontSize: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    width: ms(260),
    height: ms(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ms(10),
    marginLeft: ms(40),
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
  text: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: ms(14),
    marginLeft: ms(100),
    marginTop: ms(10),
  },
  textlogin: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: ms(16),
    left: ms(144),
    // marginTop: ms(10),
  },
});
