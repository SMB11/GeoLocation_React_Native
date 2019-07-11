import React, { Fragment } from 'react';
import {
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  PermissionsAndroid
} from 'react-native';

import GetButton from './src/components/button'
// if (__DEV__) {
//   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }
// import Reactotron from 'reactotron-react-native'
import { requestLocationPermission } from './src/access';






class App extends React.Component {
  state = {}

  ButtonPressedHandler = () => {
    console.log("mtav!!!!")
    console.log(navigator)

    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position);

        console.log(location)
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: false, timeout: 2000000 }
    );
  }
  async componentDidMount() {
    await requestLocationPermission()
  }
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <Text>GPS Info</Text>
        <GetButton
          buttonPressed={this.ButtonPressedHandler}
          title="Get GPS Data"
        />
      </View>
    );
  }
}

export default App;



