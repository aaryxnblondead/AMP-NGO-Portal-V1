import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { Input } from '../components/Input';

export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search NGOs</Text>
      </View>
      <View style={styles.searchContainer}>
        <Input placeholder="Search by name, location, or cause..." />
      </View>
      <View style={styles.content}>
        <Text style={styles.placeholderText}>Search results will appear here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 20,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  searchContainer: {
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: colors.gray,
    fontSize: 16,
  },
});
