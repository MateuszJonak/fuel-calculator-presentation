import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

export default props => {
  const {
    input,
    meta: { touched, error },
    ...inputProps
  } = props;

  const isError = touched && error;

  return (
    <View>
      <Input
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        errorMessage={isError ? error : ''}
        shake={isError}
      />
    </View>
  );
};
