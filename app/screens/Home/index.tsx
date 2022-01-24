import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  LogBox,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {setTestMessage} from '../../store/test';
import Card from '../../components/Card';
import Container from '../../components/Container';
import MyText from '../../components/MyText';
import Radar from '../../assets/images/radar';
import Avatar from '../../assets/images/avatar';

LogBox.ignoreLogs(['RCTBridge']);

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {message} = useSelector((state: RootState) => state.test);

  // const allStates = useSelector((state: RootState) => state);
  // console.log(allStates);

  const [yourMessage, setYourMessage] = useState('');
  const [forceRender, setForceRender] = useState(false);

  const handlePress = () => {
    console.log('handlePress mounted.');
    dispatch(setTestMessage(yourMessage));
    setYourMessage('');
  };

  const makeItHappen = () => {
    console.log('makeItHappen mounted.');
    setForceRender(prev => !prev);
  };

  console.log('render....naja', yourMessage.length);

  return (
    <Container margin backBtn={false}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <MyText title1 center primary>
          My Dashboard
        </MyText>
        <View style={{alignItems: 'center'}}>
          <Radar />
          <View style={{position: 'absolute'}}>
            <Avatar />
          </View>
        </View>

        <MyText grey title2>
          My Health
        </MyText>

        <MyText mTop titleBig>
          Perfect!
        </MyText>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <View
            style={{
              flex: 1,
              padding: 20,
              backgroundColor: 'brown',
              borderRadius: 8,
            }}>
            <MyText center white body2 bold>
              Glucose: 100
            </MyText>
          </View>
          <View
            style={{
              flex: 0.2,
            }}
          />
          <View
            style={{
              flex: 1,
              padding: 20,
              backgroundColor: 'green',
              borderRadius: 8,
            }}>
            <MyText center white body2 bold>
              Oxygen: 98
            </MyText>
          </View>
        </View>
      </ScrollView>
    </Container>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text>Home</Text>
  //     <Card
  //       message="Dexter"
  //       onPress={message => {
  //         navigation.navigate('Home2', {message});
  //       }}
  //     />
  //     <Card
  //       message="Arthur"
  //       onPress={message => {
  //         navigation.navigate('Home2', {message});
  //       }}
  //     />
  //     <View style={styles.msgContainer}>
  //       <Text style={styles.msg}>{message}</Text>
  //     </View>
  //     <TextInput
  //       style={styles.txtInput}
  //       onChangeText={setYourMessage}
  //       value={yourMessage}
  //       placeholder="Type in your message"
  //     />
  //     <Pressable
  //       style={styles.btn}
  //       disabled={yourMessage.length > 0 ? false : true}
  //       onPress={handlePress}>
  //       <Text>Submit!</Text>
  //     </Pressable>
  //     <Pressable style={styles.btn} onPress={makeItHappen}>
  //       <Text>Force Render</Text>
  //     </Pressable>
  //   </View>
  // );
};

export default Home;
