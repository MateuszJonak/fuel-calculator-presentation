import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import ScreensCalculator from '../../screens/Calculator';
import ScreensInfo from '../../screens/Info';
import { colors } from '../../config';
import { HeaderIcon } from '../../components/Header';

const FramesCalculatorStack = createStackNavigator({
  Form: {
    screen: ScreensCalculator,
    navigationOptions: ({ navigation }) => ({
      title: 'Calculator',
      headerStyle: {
        backgroundColor: colors.navbar,
      },
      headerLeft: (
        <HeaderIcon
          name="menu"
          containerStyle={{ paddingLeft: 10 }}
          type="entypo"
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerRight: (
        <HeaderIcon
          name="ios-information-circle-outline"
          containerStyle={{ paddingRight: 10 }}
          type="ionicon"
          onPress={() => navigation.navigate('Info')}
        />
      ),
    }),
  },
  Info: {
    screen: ScreensInfo,
    navigationOptions: ({ navigation }) => ({
      title: 'Info',
      headerStyle: {
        backgroundColor: colors.navbar,
      },
      headerLeft: (
        <HeaderIcon
          name="md-arrow-back"
          containerStyle={{ paddingLeft: 10 }}
          type="ionicon"
          onPress={() => navigation.goBack()}
        />
      ),
    }),
  },
});

FramesCalculatorStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <Icon
      name="md-calculator"
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

export default FramesCalculatorStack;
