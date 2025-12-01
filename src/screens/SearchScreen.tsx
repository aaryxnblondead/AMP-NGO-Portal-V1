import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { colors } from '../theme/colors';
import { Input } from '../components/Input';
import { NGOCard } from '../components/NGOCard';
import { EmptyState } from '../components/EmptyState';
import { MOCK_NGOS, CATEGORIES } from '../data/mockData';

const { width } = Dimensions.get('window');

export const SearchScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNGOs = useMemo(() => {
    return MOCK_NGOS.filter((ngo) => {
      const matchesSearch = 
        ngo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ngo.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || ngo.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const renderHeader = () => (
    <View style={styles.searchSection}>
      <Input 
        placeholder="Search NGOs..." 
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        <TouchableOpacity 
          style={[styles.categoryChip, styles.filterChip]}
          onPress={() => alert('Filter Modal Placeholder')}
        >
          <Text style={styles.filterChipText}>⚡ Filters</Text>
        </TouchableOpacity>
        {CATEGORIES.map((cat) => (
          <TouchableOpacity 
            key={cat} 
            style={[styles.categoryChip, selectedCategory === cat && styles.categoryChipActive]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={[styles.categoryChipText, selectedCategory === cat && styles.categoryChipTextActive]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView edges={['top']}>
          <Text style={styles.title}>Find NGOs</Text>
        </SafeAreaView>
      </View>

      <FlashList
        data={filteredNGOs}
        renderItem={({ item }) => (
          <NGOCard ngo={item} onPress={() => navigation.navigate('NGODetails', { ngo: item })} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={renderHeader}
        estimatedItemSize={300}
        ListEmptyComponent={
          <EmptyState 
            title="No NGOs Found" 
            message={`We couldn't find any NGOs matching "${searchQuery}". Try adjusting your filters.`}
            onRetry={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            retryLabel="Clear Filters"
          />
        }
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
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    zIndex: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 10,
  },
  listContent: {
    paddingTop: 100, // Space for header
    paddingBottom: 20,
  },
  searchSection: {
    padding: 16,
    backgroundColor: colors.background,
  },
  searchInput: {
    marginBottom: 12,
  },
  categoryScroll: {
    flexDirection: 'row',
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.white,
    marginRight: 8,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  filterChip: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  filterChipText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  categoryChipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryChipText: {
    color: colors.text,
    fontWeight: '500',
  },
  categoryChipTextActive: {
    color: colors.white,
  },
});
