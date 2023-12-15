import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function EventCard({ navigation, ...props }) {
    const handlePress = () => {
        navigation.navigate('Подробнее', { Event_id: props.Event_id });
    };

    const getStatusText = (props) => {
        switch (props.Status) {
            case 'A':
                return 'Доступно';
            case 'C':
                return 'Завершено';
            case 'S':
                return 'Скоро';
            default:
                return '';
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.cardContainer}>
            <Text style={styles.title}>{props.Name}</Text>
            <Image style={styles.image} source={{ uri: props.ImageURL }} />
            <Text style={styles.subtitle}>
                {getStatusText(props)}:
            </Text>
            <Text style={styles.subtitle}>
                {props.Start_date} - {props.End_date}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#bab8b8',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        width: 160,
        height: 320,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 5,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
        margin: 5,
    },
    image: {
        margin: 0,
        maxWidth: '100%',
        height: 'auto',
        borderRadius: 10,
        width: '100%', // Заполните ширину родительского контейнера
        height: 200,
        borderWidth: 0,
    },
});
