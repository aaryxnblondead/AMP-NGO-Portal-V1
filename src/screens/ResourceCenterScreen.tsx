import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../theme/colors';
import { WebinarRegistrationModal } from '../components/WebinarRegistrationModal';

const RESOURCES = [
  { title: 'Legal Corner', icon: '⚖️', desc: 'Access NGO laws, FCRA updates, and compliance guides.' },
  { title: 'Webinars & Training', icon: '💻', desc: 'Enhance skills through exclusive workshops and capacity building webinars.', action: 'register' },
  { title: 'Funding Opportunities', icon: '💰', desc: 'Find grants, CSR calls, and partnership opportunities.' },
  { title: 'Government Circulars', icon: '📜', desc: 'Find grants, CSR calls, and partnership opportunities.' },
  { title: 'Resource Links', icon: '🔗', desc: 'Direct access to important government portals and NGO support sites.' },
  { title: 'Blogs & Articles', icon: '✍️', desc: 'Insights, stories, and expert opinions for non-profit professionals.' },
];

export const ResourceCenterScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCardPress = (item: any) => {
    if (item.action === 'register') {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Resource Centre for NGOs</Text>
        <Text style={styles.subtitle}>Empowering non-profits with knowledge, tools, and guidance.</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.grid}>
          {RESOURCES.map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.card}
              onPress={() => handleCardPress(item)}
            >
              <View style={styles.iconContainer}>
                <Text style={styles.icon}>{item.icon}</Text>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
              <View style={styles.readMore}>
                <Text style={styles.readMoreText}>Read More</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <WebinarRegistrationModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
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
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: 'System',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray,
    lineHeight: 20,
  },
  content: {
    padding: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.lightGray,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginBottom: 12,
  },
  icon: {
    fontSize: 24,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 12,
    lineHeight: 16,
  },
  readMore: {
    backgroundColor: colors.secondary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  readMoreText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '600',
  },
});
