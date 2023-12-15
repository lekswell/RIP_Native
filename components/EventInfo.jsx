import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function EventInfo({ ...props }) {
    return (
        <View style={styles.card}>
          <Text style={styles.textTitle}>{props.Name}</Text>
          <Image style={styles.image} source={{ uri: props.ImageURL }} />
          <View style={styles.detailsContainer}>
            <Text style={styles.textSubtitle}>
              {props.Start_date} - {props.End_date}
            </Text>
            <Text style={styles.textTitle}>О мероприятии:</Text>
            <Text style={styles.textDescription}>{props.Info}</Text>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      card: {
        alignItems: 'center',
        width: '90%', // Почти весь размер экрана
        height: '100',
        backgroundColor: '#747474',
        borderRadius: 8,
        padding: 15,
        marginBottom: 8,
        marginTop: 8,
      },
      textTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
      },
      textSubtitle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
      },
      textDescription: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
      },
      image: { 
        width: '100%', 
        height: 420, 
        borderRadius: 8, 
        marginBottom: 15 },
    });
  