import React, {useState} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native';

const functionName = () => {};

function functionaName() {}

const Home = ({navigation}) => {
  const [color, setColor] = useState('red');
  const [showText, setShowText] = useState(false);

  const onPressBtn = () => {
    console.log('Button pressed');

    setColor('blue');

    setShowText(true);
  };

  const randomOBject = {
    name: '',
    place: '',
    roll: '',
  };

  const {name, place, roll} = randomOBject;

  console.log('OBJECT DATA--->', name, place);
  return (
    <View style={{flex: 1}}>
      <Text>Home</Text>
      <Text>Hellow world!!!!!!</Text>
      {showText && <Text>BUTTON PRESSED</Text>}
      <Button onPress={onPressBtn} title="Button" color={color} />
      {/* <FlatList
        data={['Home 1', 'Home 2', 'Home 3', 'Home 4']}
        renderItem={({item}) => {}}
      /> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('List', {name: 'Shibani', roll: 1235});
        }}
        style={{
          height: 50,
          width: 80,
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginBottom: 100,
        }}></TouchableOpacity>

      <Text>Next</Text>
      <TouchableOpacity
        style={{
          height: 50,
          width: 80,
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginBottom: 100,
        }}>
        <Text>Instagram</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
