import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { TextInput } from '../../components/ReduxForm';
import {
  CALCULATOR_FORM_NAME,
  INPUTS_CONFIG,
} from '../../store/calculator/constants';
import { colors } from '../../config';
import validate from './formValidate';

const SCREEN_WIDTH = Dimensions.get('window').width;
const arrayOfInputs = Object.keys(INPUTS_CONFIG).map(key => INPUTS_CONFIG[key]);

const ScreensCalculatorFormView = () => (
  <View>
    {arrayOfInputs.map((input, index) => (
      <Field
        key={index}
        name={input.name}
        placeholder={'0'}
        inputContainerStyle={styles.inputContainer}
        containerStyle={styles.container}
        errorStyle={styles.error}
        labelStyle={styles.label}
        component={TextInput}
        label={input.label}
        keyboardType="numeric"
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    width: SCREEN_WIDTH - 30,
    borderColor: colors.black,
  },
  container: {
    marginVertical: 5,
  },
  label: {
    color: colors.black,
  },
  error: {
    margin: 0,
    marginTop: 5,
  },
});

export default reduxForm({
  form: CALCULATOR_FORM_NAME,
  validate,
})(ScreensCalculatorFormView);
