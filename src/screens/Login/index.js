import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Poppins from '../../components/Poppins';
import {Input, Icon, Button} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';

// import {UserOutlined} from '@ant-design/icons';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
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
        <Button title="LOGIN" type="solid" />
      </View>
      <View>
        <View>
          <Poppins>don't have an account ?</Poppins>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Poppins>Register Now </Poppins>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
