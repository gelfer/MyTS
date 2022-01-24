import React, {useState} from 'react';
import {Field} from 'formik';
import * as Yup from 'yup';
import {View, Text, Alert} from 'react-native';
import styles from './styles';
import AppFormField from '../../components/Form/AppFormField';
import AppFormSubmitButton from '../../components/Form/AppFormSubmitButton';
import AppForm from '../../components/Form/AppForm';
import AppFormEyeIcon from '../../components/Form/AppFormEyeIcon';
import {useHooks} from './hooks';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Email is incorrect.')
    .required('Email is required.')
    .label('Email'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter.')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter.')
    .matches(/\d/, 'Password must have a number.')
    .min(8, ({min}) => `Password must be at least ${min} characters.`)
    .required('Password is required.')
    .label('Password'),
  // confirmPassword: Yup.string()
  //   .oneOf([Yup.ref('password')], 'Passwords do not match.')
  //   .required('Please confirm the password.')
  //   .label('Confirm password'),
});

interface MyFormValues {
  email: string;
  password: string;
}

const SignIn: React.FC<{}> = ({navigation}) => {
  const {display} = useHooks();

  const initialValues: MyFormValues = {
    email: '',
    password: '',
  };

  const [showPassword, setShowPassword] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={{marginVertical: 20}}>Sign In</Text>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: any, actions: any) => {
          console.log({values, actions});
          Alert.alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}>
        <Field
          component={AppFormField}
          name="email"
          placeholder="Email"
          autoComplete="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <Field
          component={AppFormField}
          name="password"
          placeholder="password"
          secureTextEntry={showPassword}
          textContentType="password"
          toggleEye={AppFormEyeIcon({
            showPassword,
            setShowPassword,
          })}
        />
        {/* <Field
          component={AppFormField}
          name="confirmPassword"
          placeholder="Confirm Password"
          secureTextEntry={showPassword}
          textContentType="password"
          toggleEye={AppFormEyeIcon({
            showPassword,
            setShowPassword,
          })}
        /> */}
        <AppFormSubmitButton title="Submit" />
      </AppForm>
      <Text style={{marginVertical: 20}}>Or, sign In with Google</Text>
      {display}

      <Text style={{marginVertical: 20}}>Don't have an account? Sign up.</Text>
    </View>
  );
};

export default SignIn;
