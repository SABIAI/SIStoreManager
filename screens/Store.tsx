import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Store extends Component {
    render() {
      return (
        <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Text>Store Screen</Text>
        </View>
      );
    }
  }

export default Store;