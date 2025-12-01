import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

const PROJECTS = [
  {
    id: '1',
    title: 'Clean Water Initiative',
    description: 'Collaborative effort to provide clean drinking water to rural villages.',
    status: 'Open for Partners',
    partners: 3,
  },
  {
    id: '2',
    title: 'Digital Literacy Drive',
    description: 'Teaching basic computer skills to underprivileged youth.',
    status: 'In Progress',
    partners: 5,
  },
  {
    id: '3',
    title: 'Health Camp 2025',
    description: 'Joint medical camp for general health checkups.',
    status: 'Planning',
    partners: 2,
  },
];

export const ProjectsScreen = ({ navigation }: any) => {
  const renderProject = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={[styles.badge, item.status === 'Open for Partners' ? styles.badgeOpen : styles.badgeProgress]}>
          <Text style={styles.badgeText}>{item.status}</Text>
        </View>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.footer}>
        <Text style={styles.partners}>👥 {item.partners} Partners Joined</Text>
        <TouchableOpacity style={styles.joinButton} onPress={() => {}}>
          <Text style={styles.joinButtonText}>Join Project</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backLink}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Collaborative Projects</Text>
      </View>
      <FlatList
        data={PROJECTS}
        renderItem={renderProject}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  navHeader: {
    padding: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backLink: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  list: {
    padding: 20,
  },
  card: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    flex: 1,
    marginRight: 12,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeOpen: {
    backgroundColor: '#E8F5E9',
  },
  badgeProgress: {
    backgroundColor: '#FFF3E0',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.text,
  },
  description: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 16,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  partners: {
    fontSize: 12,
    color: colors.gray,
  },
  joinButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  joinButtonText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
