import React, {useEffect, useState} from 'react';
import {TextInput, TouchableOpacity, View, Text, FlatList} from 'react-native';
import {fontColors, fontFamilies} from '../../Components/colors';
import {styles} from './styling';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import Posts from '../../Components/Post';
const Post = () => {
  const navigation = useNavigation();
  const [apiData, setApiData] = useState('');

  const getData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/Posts',
    );
    console.log('response', JSON.stringify(response));
    setApiData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={[styles.container]}>
      <View style={[styles.textContainer]}>
        <Text style={styles.upperText}>Posts</Text>
      </View>
      <FlatList
        data={apiData}
        renderItem={({item}) => {
          console.log('item', item);
          return <Posts heading={item.title} body={item.body} />;
        }}
      />
    </View>
  );
};

export default Post;
