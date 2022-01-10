import React from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';

const names = [
  'sibaniiiiiiii',
  'sibannnnnnnn',
  'kirannnnnnnnn',
  'sommmmmm',
  'sidddddddd',
];

const List = props => {
  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            backgroundColor: 'lightgray',
            borderRadius: 25,
          }}></TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingHorizontal: 40,
            paddingVertical: 15,
            backgroundColor: 'white',
            elevation: 15,
            borderRadius: 60,
            width: 150,
            alignItems: 'flex-start',
            marginLeft: 50,
          }}>
          <Text>Chat</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          style={{marginTop: 40, flex: 1}}
          style={{flex: 1}}
          data={names} //<-------------------this was the issue you passed {[names]}
          contentContainerStyle={{paddingBottom: 100}}
          renderItem={({item, index}) => {
            console.log('item', item);
            return (
              <View style={{flexDirection: 'row', marginVertical: 15}}>
                <Image
                  source={require('../../Assets/rock.jpg')}
                  style={{height: 75, width: 75, borderRadius: 25}}
                />
                <View style={{marginHorizontal: 20, flex: 1}}>
                  <Text style={{fontSize: 20}}>{item}</Text>
                  <Text style={{fontSize: 15, color: 'blue'}}>Great!</Text>
                </View>
                <Text style={{alignSelf: 'flex-end'}}>2.30</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default List;
