import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { AnimatedButton } from './AnimatedButton';

interface ResourceCardProps {
  resource: any;
  onPress: () => void;
}

export const ResourceCard = ({ resource, onPress }: ResourceCardProps) => {
  return (
    <AnimatedButton onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{resource.icon}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{resource.title}</Text>
        <Text style={styles.description} numberOfLines={2}>{resource.desc}</Text>
        <Text style={styles.readMore}>Read More →</Text>
      </View>
    </AnimatedButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 12,
    marginHorizontal: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    minHeight: 80, // Touch target
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.lightGray + '40', // 25% opacity
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 8,
  },
  readMore: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
  },
});
