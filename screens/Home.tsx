import React, {Component} from 'react';
import {Text, View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import  Dashboard from './Dashboard';
import  Bookings from './Bookings';
import  Store from './Store';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Add/Modify Store(s)" component={Store} />
      <Drawer.Screen name="Bookings" component={Bookings} />
    </Drawer.Navigator>
  );
}


class Home extends Component {
    render() {
      return (
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      );
    }
  }

export default Home;