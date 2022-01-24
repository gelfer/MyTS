import React from 'react';
import {Button} from 'react-native';
import {useFormikContext} from 'formik';

interface Props {
  title: string;
}

const AppFormSubmitButton = ({title}: Props) => {
  const {handleSubmit, isValid} = useFormikContext();
  return <Button onPress={handleSubmit} title={title} disabled={!isValid} />;
};

export default AppFormSubmitButton;
