import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { colors } from '../theme/colors';
import { ResourceCard } from '../components/ResourceCard';
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
        <Text style={styles.title}>Resource Centre</Text>
        <Text style={styles.subtitle}>Empowering non-profits with knowledge, tools, and guidance.</Text>
      </View>
      
      <FlashList
        data={RESOURCES}
        renderItem={({ item }) => (
          <ResourceCard resource={item} onPress={() => handleCardPress(item)} />
        )}
        estimatedItemSize={100}
        contentContainerStyle={styles.listContent}
      />

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
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray,
    lineHeight: 20,
  },
  listContent: {
    paddingVertical: 16,
  },
});
