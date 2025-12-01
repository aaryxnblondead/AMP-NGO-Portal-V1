import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import { Button } from '../components/Button';

export const ProfileScreen = ({ navigation }: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.name}>My NGO Name</Text>
        <Text style={styles.email}>contact@ngo.org</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Organization Details</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Registration No:</Text>
          <Text style={styles.value}>123456789</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>123 Main St, City, Country</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Button title="Edit Profile" variant="outline" onPress={() => {}} style={{ width: '100%' }} />
        <Button title="Logout" variant="secondary" style={{ marginTop: 12, width: '100%' }} onPress={() => navigation.navigate('Login')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },
  header: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.lightGray,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  email: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 4,
  },
  section: {
    padding: 20,
    backgroundColor: colors.white,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  label: {
    fontSize: 16,
    color: colors.gray,
  },
  value: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
});
