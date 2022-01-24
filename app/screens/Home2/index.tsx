import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Container from '../../components/Container';
import Card from '../../components/Card';
import {
  useRoute,
  useNavigation,
  RouteProp,
  CompositeNavigationProp,
} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomParamList, HomeStackParamList} from '../../types/navigations';
import styles from './styles';

// combine 2 params with CompositeNavigationProp
// primary navigation (type that owns this screen + screen's route name)
// second navigation (type of props for 2nd navigation | parent navigator)

// if you want to use push() with FeedDetail
// go to FeedDetail screen
// FeedStack for primary & FeedStackParamList for 2nd
type Props = CompositeNavigationProp<
  BottomTabNavigationProp<BottomParamList, 'HomeStack'>,
  NativeStackNavigationProp<HomeStackParamList>
>;

type HomeScreenRouteType = RouteProp<HomeStackParamList, 'Home2'>;

const Home2 = () => {
  const navigation = useNavigation<Props>();

  const {
    params: {message},
  } = useRoute<HomeScreenRouteType>();
  const newMessage = message + '!';

  return (
    <Container>
      <View style={styles.container}>
        <Text>{message}</Text>
        <Card
          message={newMessage}
          onPress={() => {
            navigation.push('Home2', {message: newMessage});
          }}
        />
        <Pressable
          style={styles.btn}
          onPress={() => {
            navigation.navigate('FeedStack', {screen: 'Feed'});
          }}>
          <Text>Go to Feed</Text>
        </Pressable>
      </View>
    </Container>
  );
};

export default Home2;
