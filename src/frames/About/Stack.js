import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ScreensAbout from '../../screens/About';
import { colors } from '../../config';
import { HeaderIcon } from '../../components/Header';

const FramesAboutStack = createStackNavigator({
  About: {
    screen: ScreensAbout,
    navigationOptions: ({ navigation }) => ({
      title: 'About',
      headerStyle: {
        backgroundColor: colors.navbar,
      },
      headerLeft: (
        <HeaderIcon
          name="menu"
          type="entypo"
          onPress={() => navigation.openDrawer()}
        />
      ),
    }),
  },
});

FramesAboutStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="md-information-circle"
      size={30}
      iconStyle={{
        width: 30,
        height: 30,
      }}
      type="ionicon"
      color={tintColor}
    />
  ),
};

export default FramesAboutStack;
