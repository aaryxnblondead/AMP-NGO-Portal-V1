import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { NGO_OF_THE_MONTH } from '../data/mockData';

export const NGODetailsScreen = ({ route, navigation }: any) => {
  // In a real app, we would fetch data based on route.params.id
  // For now, we'll default to NGO_OF_THE_MONTH if no params are passed, or mock it
  const ngo = route.params?.ngo || NGO_OF_THE_MONTH;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: 'https://via.placeholder.com/800x400' }} style={styles.coverImage} />
        
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.name}>{ngo.name}</Text>
              <Text style={styles.location}>📍 {ngo.location || 'Mumbai, India'}</Text>
            </View>
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedText}>✓ Verified</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Text style={styles.statValue}>10k+</Text>
              <Text style={styles.statLabel}>Beneficiaries</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>50+</Text>
              <Text style={styles.statLabel}>Projects</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Years Active</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About Organization</Text>
            <Text style={styles.text}>
              {ngo.description || 'Dedicated to serving the community through various social welfare initiatives. Our focus areas include education, healthcare, and livelihood support for the underprivileged.'}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Focus Areas</Text>
            <View style={styles.tags}>
              {['Education', 'Healthcare', 'Women Empowerment', 'Skill Development'].map((tag, i) => (
                <View key={i} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contact Information</Text>
            <Text style={styles.contactText}>📧 contact@example.org</Text>
            <Text style={styles.contactText}>📞 +91 98765 43210</Text>
            <Text style={styles.contactText}>🌐 www.example.org</Text>
          </View>

          <TouchableOpacity style={styles.contactButton} onPress={() => {}}>
            <Text style={styles.contactButtonText}>Contact NGO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  coverImage: {
    width: '100%',
    height: 200,
    backgroundColor: colors.lightGray,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  backText: {
    fontWeight: 'bold',
    color: colors.text,
  },
  content: {
    padding: 20,
    marginTop: -20,
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
    maxWidth: 250,
  },
  location: {
    fontSize: 14,
    color: colors.gray,
  },
  verifiedBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  verifiedText: {
    color: colors.success,
    fontSize: 12,
    fontWeight: 'bold',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#eee',
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: colors.gray,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.gray,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 14,
    color: colors.text,
  },
  contactText: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 8,
  },
  contactButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  contactButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
