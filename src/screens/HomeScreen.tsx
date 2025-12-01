import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';
import { colors } from '../theme/colors';
import { Button } from '../components/Button';
import { NGOCard } from '../components/NGOCard';
import { EventCard } from '../components/EventCard';
import { MOCK_NGOS, UPCOMING_EVENTS, NGO_OF_THE_MONTH } from '../data/mockData';

const { width } = Dimensions.get('window');

export const HomeScreen = ({ navigation }: any) => {

  const partnerCards = [
    { 
      title: 'Register Your NGO', 
      desc: 'Get verified and access our platform\'s features',
      icon: '📝',
      action: 'Register Now',
      route: 'Registration',
      bg: '#A72525',
      features: ['Build Trust & Credibility', 'Collaborate & Connect', 'Discover Funding & Opportunities']
    },
    { 
      title: 'Search NGOs', 
      desc: 'Report your work under AMP projects',
      icon: '🔍',
      action: 'Search Now',
      route: 'Search',
      bg: '#333333',
      features: ['Search by Name', 'Filter by Category', 'View Impact']
    },
    { 
      title: 'Collaborate on Projects', 
      desc: 'Connect with other NGOs for greater impact',
      icon: '🤝',
      action: 'View Projects',
      route: 'Projects', 
      bg: '#A72525',
      features: ['Joint Initiatives', 'Resource Sharing', 'Greater Impact']
    },
  ];

  return (
    <View style={styles.container}>
      {/* Sticky Header */}
      <View style={styles.stickyHeader}>
        <SafeAreaView edges={['top']} style={styles.stickyHeaderContent}>
          <Text style={styles.stickyHeaderTitle}>AMP NGO Connect</Text>
        </SafeAreaView>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <SafeAreaView edges={['top']} style={styles.header}>
          <Text style={styles.logoText}>AMP NGO Connect</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
             <View style={styles.profileIcon}>
               <Text style={styles.profileInitials}>U</Text>
             </View>
          </TouchableOpacity>
        </SafeAreaView>

        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <ImageBackground 
            source={{ uri: 'https://via.placeholder.com/800x400' }} 
            style={styles.heroBackground}
            imageStyle={{ opacity: 0.7, backgroundColor: 'black' }}
          >
            <View style={styles.heroContent}>
              <Text style={styles.heroPreTitle}>NGO Connect</Text>
              <Text style={styles.heroTitle}>Collaboration made simple</Text>
              <Text style={styles.heroSubtitle}>A unified space for every NGO mission.</Text>
              <Button 
                title="Register Your NGO" 
                onPress={() => navigation.navigate('Registration')}
                style={styles.heroButton}
              />
            </View>
          </ImageBackground>
        </View>

        {/* Welcome Section */}
        <View style={styles.section}>
          <Text style={styles.welcomeTitle}>Welcome to AMP NGO Connect</Text>
          <Text style={styles.welcomeSubtitle}>Helping each other can make world better</Text>
          <Text style={styles.welcomeText}>
            Association of Muslim Professionals (AMP) NGO Connect aims to create an online platform that fosters collaboration and information exchange within the non-profit sector.
          </Text>
          <View style={styles.welcomeActions}>
             <Button title="Discover More" variant="secondary" style={styles.discoverButton} onPress={() => navigation.navigate('About')} />
          </View>
        </View>

        {/* Partner With Us Section */}
        <View style={styles.section}>
          <Text style={styles.cursiveHeader}>Partner With Us</Text>
          <Text style={styles.sectionSubHeader}>Join our network of change makers</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsScroll}>
            {partnerCards.map((card, index) => (
              <View key={index} style={[styles.partnerCard, { backgroundColor: card.bg }]}>
                <View style={styles.partnerHeader}>
                   <Text style={styles.cardIcon}>{card.icon}</Text>
                   <Text style={styles.cardTitle}>{card.title}</Text>
                </View>
                <Text style={styles.cardDesc}>{card.desc}</Text>
                <Button 
                  title={card.action} 
                  onPress={() => navigation.navigate(card.route)}
                  style={styles.cardButton}
                  variant="outline"
                  textStyle={{ color: card.bg }}
                />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Featured NGOs */}
        <View style={styles.section}>
          <Text style={styles.cursiveHeader}>Featured NGOs</Text>
          <Text style={styles.sectionSubHeader}>Discover verified organizations</Text>
          <View style={{ height: 320, width: width }}>
            <FlashList 
              data={MOCK_NGOS}
              renderItem={({ item }) => (
                <View style={{ width: width * 0.85, marginRight: 16 }}>
                  <NGOCard ngo={item} onPress={() => navigation.navigate('NGODetails', { ngo: item })} />
                </View>
              )}
              estimatedItemSize={300}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
            />
          </View>
        </View>

        {/* NGO of the Month & Upcoming Events */}
        <View style={styles.section}>
           <View style={styles.ngoMonthContainer}>
              <Text style={styles.cursiveHeader}>NGO of the Month</Text>
              <Text style={styles.ngoMonthName}>{NGO_OF_THE_MONTH.name}</Text>
              <Button title="View Profile" style={styles.viewProfileBtn} onPress={() => navigation.navigate('NGODetails', { ngo: NGO_OF_THE_MONTH })} />
           </View>
           
           <View style={styles.eventsContainer}>
              <Text style={styles.cursiveHeader}>Upcoming Events</Text>
              <View style={{ height: 240, width: width }}>
                <FlashList 
                  data={UPCOMING_EVENTS}
                  renderItem={({ item }) => (
                    <View style={{ width: width * 0.85, marginRight: 16 }}>
                      <EventCard event={item} onPress={() => {}} />
                    </View>
                  )}
                  estimatedItemSize={220}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.horizontalList}
                />
              </View>
              <Button title="View All Events" variant="secondary" style={styles.viewAllEventsBtn} onPress={() => navigation.navigate('Events')} />
           </View>
        </View>
        
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  stickyHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    zIndex: 100,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  stickyHeaderContent: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stickyHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  scrollContent: {
    paddingTop: 60,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  heroContainer: {
    height: 320,
    marginBottom: 24,
  },
  heroBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  heroContent: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '100%',
    justifyContent: 'center',
  },
  heroPreTitle: {
    color: colors.secondary,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  heroTitle: {
    color: colors.white,
    fontSize: 36,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 42,
  },
  heroSubtitle: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 32,
    opacity: 0.9,
    lineHeight: 24,
  },
  heroButton: {
    minWidth: 200,
    height: 56,
    borderRadius: 28,
  },
  section: {
    padding: 24,
    marginBottom: 16,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.secondary,
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 18,
    color: colors.primary,
    marginBottom: 16,
    fontWeight: '600',
  },
  welcomeText: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 26,
    marginBottom: 24,
    opacity: 0.8,
  },
  welcomeActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discoverButton: {
    marginRight: 20,
  },
  cursiveHeader: {
    fontSize: 28,
    color: colors.primary,
    marginBottom: 4,
    fontStyle: 'italic',
  },
  sectionSubHeader: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 20,
  },
  cardsScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  partnerCard: {
    width: 280,
    padding: 20,
    borderRadius: 12,
    marginRight: 16,
    height: 220,
    justifyContent: 'space-between',
  },
  partnerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
  cardDesc: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 16,
    opacity: 0.9,
  },
  cardButton: {
    width: '100%',
    backgroundColor: colors.white,
  },
  horizontalList: {
    paddingHorizontal: 20,
  },
  ngoMonthContainer: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.lightGray,
  },
  ngoMonthName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.secondary,
    marginVertical: 10,
  },
  viewProfileBtn: {
    marginTop: 10,
  },
  eventsContainer: {
    marginTop: 20,
  },
  viewAllEventsBtn: {
    marginTop: 20,
  },
});
