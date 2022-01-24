import React, {useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import Container from '../../components/Container';
import {FeedStackParamList} from '../../types/navigations';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {
  fetchAppointments,
  addNewAppointment,
  selectAllAppointments,
  selectAppointmentById,
  selectAppointmentIds,
  selectAppointmentEntities,
  selectTotalAppointments,
} from '../../store/appointment';
import Loading from '../../components/Loading';
import Fail from '../../components/Fail';

type FeedScreenRouteType = RouteProp<FeedStackParamList, 'FeedDetail'>;

const FeedDetail = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector((state: RootState) => state.appointments);
  const allAppointments = useSelector(selectAllAppointments);

  {
    /*
    ---- CRUD provided by Entity Adapter ----

  // get the total number
  const total = useSelector(selectTotalAppointments);
  // get all entities
  const allEntities = useSelector(selectAppointmentEntities);
  // get all items
  const allAppointments = useSelector(selectAllAppointments);
  // get all ids
  const allIds = useSelector(selectAppointmentIds);
  // get by id
  const byId = useSelector((state: RootState) => selectAppointmentById(state, 1));

  */
  }

  const {
    params: {userId},
  } = useRoute<FeedScreenRouteType>();

  useEffect(() => {
    dispatch(fetchAppointments(31));
  }, []);

  const addAppointment = () => {
    dispatch(
      addNewAppointment({
        id: 15,
        email: 'chris@reqres.in',
        first_name: 'Chris',
        last_name: 'Redfield',
        avatar: 'https://reqres.in/img/faces/10-image.jpg',
      }),
    );
  };

  // console.log('loading status', loading);
  // console.log('Appointments', allAppointments);

  let content;
  if (loading === 'pending') {
    content = <Loading />;
  } else if (loading === 'failed') {
    content = <Fail />;
  } else if (loading === 'succeeded') {
    content = (
      <View>
        <Text>Loaded successfully!</Text>
        {allAppointments.map(item => {
          return (
            <View key={item.id}>
              <Text>
                {item.id} {item.first_name} {item.last_name}
              </Text>
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <Container>
      <View style={styles.container}>
        <Text>FeedDetail</Text>
        <Text>ID: {userId}</Text>
        {content}
        <Pressable style={styles.btn} onPress={addAppointment}>
          <Text>Add an appointment</Text>
        </Pressable>
      </View>
    </Container>
  );
};

export default FeedDetail;
