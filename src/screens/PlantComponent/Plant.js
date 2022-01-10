import React, {Component} from 'react';
import {View, Text, ScrollView, Dimensions, Image} from 'react-native';
import {dimension} from '../../constants/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import {createButtonTabNavigator} from 'reactr-navigation-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import App from '../../../App';

const Plant = () => {
  return (
    <View style={{flex: 1}}>
      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Daily Meditations
        </Text>
        <Image
          source={require('../../../Assets/rock.jpg')}
          style={{
            height: dimension.width - 70,
            width: dimension.width - 70,
            backgroundColor: 'lightgrey',
            alignSelf: 'center',
            borderRadius: 20,
            margin: 15,
          }}
        />
      </View>
      <View style={{marginHorizontal: 20, flex: 1}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>New Music</Text>
        <Text style={{color: 'lightgrey'}}>View All</Text>
        <ScrollView
          horizontal={true}
          style={{}}
          contentContainerStyle={{paddingVertical: 4}}>
          {Array(4)
            .fill('images')
            .map((item, index) => {
              return (
                <View
                  key={`${index}_profile_key`}
                  style={{
                    height: 70,
                    width: 70,
                    backgroundColor: 'white',
                    borderRadius: 30,
                    elevation: 4,
                    marginHorizontal: 50,
                  }}
                />
              );
            })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Plant;
