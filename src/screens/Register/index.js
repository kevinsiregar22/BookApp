import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Poppins from '../../components/Poppins';
import {Input, Icon, Button} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Register({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <Input
        placeholder="Fullname"
        leftIcon={{type: 'font-awesome', name: 'user'}}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder="Username"
        leftIcon={{type: 'font-awesome', name: 'user'}}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        leftIcon={{type: 'font-awesome-5', name: 'key'}}
      />

      <View>
        <Button title="REGISTER" type="solid" />
      </View>
      <View>
        <Poppins>already has an account ?</Poppins>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Poppins>LOGIN NOW </Poppins>
        </TouchableOpacity>
      </View>
    </View>
  );
}
