import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { UPCOMING_EVENTS } from '../data/mockData';

export const EventsScreen = ({ navigation }: any) => {
  const renderEvent = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>{item.date.split(' ')[0]}</Text>
          <Text style={styles.monthText}>{item.date.split(' ')[1]}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.meta}>🕒 {item.time} • 📍 {item.location}</Text>
          <TouchableOpacity style={styles.registerButton} onPress={() => {}}>
            <Text style={styles.registerText}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backLink}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Upcoming Events</Text>
      </View>
      <FlatList
        data={UPCOMING_EVENTS}
        renderItem={renderEvent}
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
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: colors.lightGray,
  },
  content: {
    padding: 16,
    flexDirection: 'row',
  },
  dateBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF0F0',
    padding: 12,
    borderRadius: 8,
    marginRight: 16,
    height: 70,
    width: 60,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  monthText: {
    fontSize: 12,
    color: colors.primary,
    textTransform: 'uppercase',
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  meta: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 12,
  },
  registerButton: {
    alignSelf: 'flex-start',
  },
  registerText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 14,
  },
});
