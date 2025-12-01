import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const SubmitReportScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Submit Activity Report</Text>
      </View>
      <View style={styles.form}>
        <Input label="Activity Title" placeholder="Enter activity title" />
        <Input label="Date" placeholder="DD/MM/YYYY" />
        <Input label="Description" placeholder="Describe the activity..." multiline numberOfLines={4} style={{ height: 100 }} />
        <Button title="Submit Report" onPress={() => {}} style={styles.submitButton} />
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
    padding: 20,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  form: {
    padding: 20,
  },
  submitButton: {
    marginTop: 20,
    width: '100%',
  },
});
