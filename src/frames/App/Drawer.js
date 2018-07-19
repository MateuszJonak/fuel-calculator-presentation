import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import CalculatorStack from '../Calculator/Stack';
import AboutStack from '../About/Stack';
import { colors } from '../../config';

const SCREEN_WIDTH = Dimensions.get('window').width;

const FramesAppDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: colors.navbar }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Fuel Calculator</Text>
    </View>
    <View>
      <DrawerItems {...props} activeTintColor={colors.black} />
    </View>
  </View>
);

const FramesAppDrawer = createDrawerNavigator(
  {
    Calculator: {
      path: '/',
      screen: CalculatorStack,
    },
    About: {
      path: '/about',
      screen: AboutStack,
    },
  },
  {
    initialRouteName: 'Calculator',
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: FramesAppDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

export default FramesAppDrawer;
