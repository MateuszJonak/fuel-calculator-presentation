import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { getPrice } from '../../store/calculator/selectors';
import { colors } from '../../config';
import FormView from './FormView';
import ResultView from './ResultView';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ScreensCalculator extends Component {
  render() {
    return (
      <ScrollView
        scrollEnabled={false}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <SafeAreaView>
          <KeyboardAvoidingView
            behavior="position"
            enabled
            contentContainerStyle={styles.formContainer}>
            <Icon name="fuel" size={100} type="material-community" />
            <FormView />
            <ResultView price={this.props.price} />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  formContainer: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  price: getPrice(state),
});

export default connect(
  mapStateToProps,
  {},
)(ScreensCalculator);
