import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { colors } from '../theme/colors';
import { AnimatedButton } from './AnimatedButton';

interface EventCardProps {
  event: any;
  onPress?: () => void;
}

export const EventCard = ({ event, onPress }: EventCardProps) => {
  return (
    <AnimatedButton onPress={onPress} style={styles.container}>
      <Image 
        source={{ uri: event.image }} 
        style={styles.image} 
        contentFit="cover"
        transition={200}
      />
      <View style={styles.overlay}>
        <View style={styles.dateBadge}>
          <Text style={styles.dateText}>{event.date}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.meta}>🕒 {event.time}  📍 {event.location}</Text>
          <Text style={styles.title}>{event.title}</Text>
        </View>
      </View>
    </AnimatedButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: 16,
    height: 220,
    overflow: 'hidden',
    backgroundColor: colors.secondary,
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  dateBadge: {
    backgroundColor: colors.white,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  dateText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 12,
  },
  details: {
    marginTop: 'auto',
  },
  meta: {
    color: colors.white,
    fontSize: 12,
    marginBottom: 4,
    fontWeight: '600',
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
