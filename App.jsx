import { useState } from 'react';
import {View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert} from 'react-native';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const varifyCredentials = () => {
    if(email == 'myemail@assignment.com' && password == '123456'){
      Alert.alert('You have succesfully logged in');
    }else{
      Alert.alert('Your credentials are wrong');
    }
  }

   return (
    <SafeAreaView >
      <View
        style={{
          marginTop: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
          }}>
          Enter Email
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 1,
            backgroundColor: '#Ffff',
            borderRadius: 7,
            borderWidth: 1,
            height: 40,
            width: '80%',
            color: 'black',
            paddingLeft: 20,
            marginTop: 20,
            fontSize: 18,
          }}
          placeholder={'Enter you email id'}
          onChangeText={text => {
            // write the code here
            setEmail(text);
          }}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            marginTop: 50
          }}>
          Enter Password
        </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 1,
            backgroundColor: '#Ffff',
            borderRadius: 7,
            borderWidth: 1,
            height: 40,
            width: '80%',
            color: 'black',
            paddingLeft: 20,
            marginTop: 20,
            fontSize: 18,
          }}
          placeholder={'Enter you password'}
          onChangeText={text => {
            // write the code here
            setPassword(text);
          }}
        />
        <TouchableOpacity style={{
          backgroundColor: 'blue',
          marginTop: 30
        }}
        onPress={() => {
          varifyCredentials();
        }}>
          <Text style={{
            padding: 10,
            fontSize: 18,
            fontWeight: '700',
            color: 'white'
          }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
