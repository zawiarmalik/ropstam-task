import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import {fontColors, fontFamilies} from '../../Components/colors';
import {styles} from './styling';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import Loader from '../../Components/Loader';
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleButton = async () => {
    setLoading(true);
    let dataToSend = {
      email: email,
      password: password,
      device_token: 'zasdcvgtghnkiuhgfde345tewasdfghjkm',
    };
    const response = await axios.post(
      ' http://buddy.ropstambpo.com/api/login',
      dataToSend,
    );
    console.log('response', JSON.stringify(response.data.meta.status));
    global.token = response.data.data.access_token;
    setLoading(false);
    if (
      response.data.meta.status === '200' ||
      response.data.meta.status === 200
    ) {
      setLoading(false);
      navigation.navigate('post');
    }
  };
  const render = () => {
    return (
      <View style={[styles.container]}>
        <Text style={styles.upperText}>Hello Again!</Text>
        <Text style={[styles.upperText, {fontFamily: fontFamilies.regular}]}>
          Chance to Get Your Life Better
        </Text>
        <TextInput
          placeholder="E-mail"
          style={styles.input}
          onChangeText={val => {
            setEmail(val);
          }}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={val => {
            setPassword(val);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleButton();
          }}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return loading ? <Loader /> : render();
};

export default Login;
