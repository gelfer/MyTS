import React from 'react';
import {Text, View, TextInput} from 'react-native';

const AppFormField = (props: any) => {
  const {
    placeholder,
    toggleEye,
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <View style={{width: '100%'}}>
      <TextInput
        placeholder={placeholder}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        style={{
          padding: 20,
          borderWidth: 2,
          borderRadius: 8,
          borderColor: '#ccc',
          marginBottom: 10,
        }}
        {...inputProps}
      />
      {toggleEye}
      {hasError && (
        <Text style={{color: 'red', marginBottom: 10}}>{errors[name]}</Text>
      )}
    </View>
  );
};

export default AppFormField;
