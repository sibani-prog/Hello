/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
} from 'react-native';
import Home from './src/screens/Home';
import List from './src/screens/List';
import AppNavigator from './src/screens/routes/AppNavigator';

const App = () => {
  console.log('......', Dimensions.get('window').width);
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
  );
};
//   <View style={{flex: 1}}>
//     <Text style={{fontSize: 15}}>Login</Text>
//     <View
//       style={{
//         height: 70,
//         width: Dimensions.get('window').width - 20,
//         backgroundColor: 'lightgray',
//         margin: 10,
//         borderRadius: 7,
//         padding: 10,
//       }}>
//       <Text>Email</Text>
//       <TextInput placeholder="Enter your Email here" />
//     </View>
//     <View
//       style={{
//         height: 70,
//         width: Dimensions.get('window').width - 20,
//         margin: 10,
//         borderRadius: 7,
//         backgroundColor: 'lightgray',
//         padding: 10,
//       }}>
//       <Text>Password</Text>
//       <View style={{flexDirection: 'row', alignItems: 'center'}}>
//         <TextInput style={{flex: 1}} placeholder="Enter your Password here" />
//         <Image
//           style={{height: 10, width: 15}}
//           source={require('./Assets/icons8-eye-24.png')}
//         />
//       </View>
//       <View
//         style={{
//           height: 40,
//           width: '100%',
//           backgroundColor: 'blue',
//           allignItems: 'centre',
//           justifyContent: 'center',
//           borderRadius: 5,
//           margin: 10,
//           marginTop: 10,
//         }}>
//         <Text style={{color: 'white'}}>Login</Text>
//       </View>
//     </View>
//   </View>;
// };

export default App; //     <------------YOU had to add this line,you commented accidentally
