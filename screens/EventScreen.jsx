import { ScrollView, StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInstance } from '../api';
import { setEvent } from '../store/eventSlice';
import EventInfo from '../components/EventInfo';

export default function EventScreen() {
    const route = useRoute();
    const Event_id = route.params?.Event_id || 'No ID';
    const dispatch = useDispatch();
    const { event } = useSelector((store) => store.event);
    
    useEffect(() => {
        async function getEvent() {
            const response = await axiosInstance.get(`/events/${Event_id}`);
            dispatch(setEvent(response?.data));
        }
        getEvent();
    }, [dispatch]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.page}>
                {!!event && <EventInfo key={event.id} {...event} />}
            </View>        
        </ScrollView>

        
    );
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1F3E47'
    },
    page: {
        display: 'flex',
        width: '100%',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#c0bebe',
    }
});