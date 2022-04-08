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
import {REGISTER_API} from '../../helpers/baseAPI';
import {useDispatch, useSelector} from 'react-redux';
import {SetUsername, SetPassword, SetEmail} from './redux/action';

const Index = ({navigation}) => {
  const dispatch = useDispatch();
  const {email, password, name} = useSelector(state => state.register);

  const body = {
    email: email,
    password: password,
    name: name,
  };

  const register = async () => {
    try {
      const res = await axios.post(`${REGISTER_API}`, body);
      if (res.status <= 201);
      Alert.alert('Register Succes');
      navigation.navigate('Login');
      // navigation.navigate('Success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{justifyContent: 'center', flex: 1, marginTop: 80}}>
        <View style={{backgroundColor: 'aqua', flex: 1}}></View>
        <TextInput
          style={styles.item}
          onChangeText={item => dispatch(SetUsername(item))}
          item={name}
          placeholder="Fullname"
        />
        <TextInput
          style={styles.item}
          onChangeText={item => dispatch(SetEmail(item))}
          item={email}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.item}
          onChangeText={item => dispatch(SetPassword(item))}
          item={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Don't have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textlogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D6EAFF',
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
