import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Dashboard extends Component {
    render() {
      return (
        <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Text>Dashboard Screen</Text>
        </View>
      );
    }
  }

export default Dashboard;