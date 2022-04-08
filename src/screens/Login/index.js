import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import {ms} from 'react-native-size-matters';
import React from 'react';
import {
  SetLoginEmail,
  SetLoginPassword,
  SetToken,
  setName,
} from './redux/action';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {LOGIN_API} from '../../helpers/baseAPI';

const Index = ({navigation}) => {
  const {email, password, token} = useSelector(state => state.login);
  const dispatch = useDispatch();

  const body = {
    email: email,
    password: password, //
  };

  const login = async () => {
    try {
      const res = await axios.post(`${LOGIN_API}`, body);
      const getToken = () => {
        dispatch(SetToken(res.data.tokens.access.token));
      };

      const getName = () => {
        dispatch(setName(res.data.user.name));
      };
      getName();

      if (res.status <= 201) getToken();
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.item}
        onChangeText={item => dispatch(SetLoginEmail(item))}
        textContentType="emailAddress"
        placeholder="Email"
      />
      <TextInput
        style={styles.item}
        onChangeText={item => dispatch(SetLoginPassword(item))}
        placeholder="Password"
        secureTextEntry={true}
      />

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Don't have an account?</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.textregister}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D6EAFF',
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
