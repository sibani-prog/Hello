import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import {Card} from 'react-native-paper';

export default function App() {
  const categories = ['Projects', 'Milestone', 'Task'];
  const [categoryIndex, setCategoryIndex] = React.useState(2);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      xyz: 'Hello Design 2.0',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      xyz: 'Demo to Nikhil ',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      xyz: 'Hello Design 2.0',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      xyz: 'Project Discuss Meeting',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      xyz: 'New Employee Verification ',
    },
  ];
  const [val, setVal] = useState(0);
  return (
    <View style={[styles.container, {marginTop: 70}]}>
      <View style={{paddingTop: 10}}>
        <Text>Trash</Text>
      </View>
      <View style={styles.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setCategoryIndex(index)}>
            <Text
              style={[
                categoryIndex == index
                  ? styles.categoryTextSelected
                  : styles.text,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{marginHorizontal: 20}}>
        <Text>The project automatically remove from trash after 30 days </Text>
      </View>
      <View style={[styles.container, {backgroundColor: 'yellow'}]}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                backgroundColor: 'blue',
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 40,
                borderRadius: 5,
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  backgroundColor: 'lightblue',
                  justifyContent: 'space-between',
                  marginLeft: 10,
                }}>
                <Text>{item.xyz}</Text>
                <View style={{flexDirection: 'row', paddingRight: 2}}>
                  <TouchableOpacity onPress={() => setVal(val + 1)}>
                    <Icon name="reload" color="green" />
                  </TouchableOpacity>
                  <Icon name="delete" color="red" />
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryListContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  categoryTextSelected: {
    color: 'blue',
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: 'blue',
  },
  listitem: {
    padding: 20,
    backgroundcolor: 'white',
    flexdirection: 'row',
    elevation: 12,
    borderradius: 7,
    marginvertical: 10,
  },
  text: {
    color: 'black',
  },
});
