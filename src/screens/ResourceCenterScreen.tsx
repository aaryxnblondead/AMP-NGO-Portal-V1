import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';

export const ResourceCenterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Resource Center</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Documents</Text>
          <Text style={styles.cardDescription}>Access important NGO documents and templates.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Training Videos</Text>
          <Text style={styles.cardDescription}>Watch tutorials and training sessions.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Guidelines</Text>
          <Text style={styles.cardDescription}>Read about compliance and best practices.</Text>
        </View>
      </ScrollView>
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
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.lightGray,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.gray,
  },
});
