import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../api';
import { setEvents } from '../store/eventSlice';
import EventCard from '../components/EventCard';
import { useFocusEffect } from '@react-navigation/native';


export default function EventsScreen({ navigation }) {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('');
    const [searchValueMin, setSearchValueMin] = useState(0);
    const [searchValueMax, setSearchValueMax] = useState(10000000);
    const { events } = useSelector((store) => store.event);
  
    const handleSearch = async () => {
      try {
        const response = await axiosInstance.get(
          `/events?search=${searchValue}`
        );
        dispatch(setEvents(response?.data));
      } catch (error) {
        console.error('Error during search:', error);
      }
    };
  
    useFocusEffect(
      React.useCallback(() => {
        async function getEvents() {
          try {
            const response = await axiosInstance.get('/events');
            dispatch(setEvents(response?.data));
          } catch (error) {
            console.error('Error fetching events:', error);
          }
        }
        console.log('useeff');
        getEvents();
      }, [dispatch]))
  
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Название документа"
            placeholderTextColor="grey"
            onChangeText={setSearchValue}
            value={searchValue}
          />
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}> Найти</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.page}>
          {!!events &&
            events.map((event) => (
              <EventCard key={event.Event_id} {...event} navigation={navigation} />
            ))}
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#c0bebe',
    },
    container_price: {
      display: 'flex',
      flexDirection: 'row',
    },
    page: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#c0bebe',
    },
    inputContainer: {
      flexDirection: 'row',
      marginTop: 15,
      width: '100%', // Изменено на 100%
      paddingHorizontal: 10, // Добавлен отступ
    },
    input: {
      height: 40,
      backgroundColor: '#bab8b8',
      color: 'white',
      borderWidth: 2,
      borderRadius: 8,
      borderColor: 'rgb(33, 33, 33)',
      marginBottom: 16,
      paddingLeft: 8,
      paddingRight: 8,
      borderEndStartRadius: 8,
      borderStartStartRadius: 8,
      flex: 1,
    },
    button: {
      marginLeft: 10,
      marginBottom: 16,
      backgroundColor: 'rgb(33, 33, 33)', // Черный фон
      paddingVertical: 0, // Отступы внутри кнопки
      paddingHorizontal: 30,
      borderRadius: 10, // Закругленные края
      justifyContent: 'center', // Выравниваем текст по центру
    },
    buttonText: {
      textAlign: 'center',
      color: 'white', // Белый текст
      fontWeight: 'bold',
    },
  });