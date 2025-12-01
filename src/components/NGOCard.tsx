import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { colors } from '../theme/colors';
import { AnimatedButton } from './AnimatedButton';

interface NGOCardProps {
  ngo: any;
  onPress: () => void;
}

export const NGOCard = ({ ngo, onPress }: NGOCardProps) => {
  return (
    <AnimatedButton onPress={onPress} style={styles.container}>
      <Image 
        source={{ uri: ngo.image }} 
        style={styles.image} 
        contentFit="cover"
        transition={200}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.categoryTag}>
            <Text style={styles.categoryText}>{ngo.category}</Text>
          </View>
          {ngo.verified && <Text style={styles.verifiedBadge}>✓ Verified</Text>}
        </View>
        <Text style={styles.title}>{ngo.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{ngo.description}</Text>
        <View style={styles.footer}>
          <Text style={styles.location}>📍 {ngo.location}</Text>
        </View>
      </View>
    </AnimatedButton>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200, // 16:9ish aspect ratio
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  categoryTag: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  categoryText: {
    fontSize: 12,
    color: colors.secondary,
    fontWeight: '600',
  },
  verifiedBadge: {
    color: colors.success,
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 12,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 12,
    color: colors.gray,
  },
});
