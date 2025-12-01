import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { Button } from '../components/Button';
import { MOCK_NGOS, UPCOMING_EVENTS, SUCCESS_STORIES, NGO_OF_THE_MONTH } from '../data/mockData';

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

  const renderFeaturedNGO = ({ item }: any) => (
    <View style={styles.featuredCard}>
      <Image source={{ uri: item.image }} style={styles.featuredImage} />
      <View style={styles.featuredContent}>
        <View style={styles.featuredHeader}>
          <Text style={styles.featuredCategory}>{item.category}</Text>
          {item.verified && <Text style={styles.verifiedBadge}>✓ Verified</Text>}
        </View>
        <Text style={styles.featuredTitle}>{item.name}</Text>
        <Text style={styles.featuredDesc} numberOfLines={2}>{item.description}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NGODetails', { ngo: item })}>
          <Text style={styles.readMoreLink}>→ Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderEventCard = ({ item }: any) => (
    <View style={styles.eventCard}>
      <ImageBackground source={{ uri: item.image }} style={styles.eventImage} imageStyle={{ borderRadius: 8 }}>
        <View style={styles.eventDateBadge}>
          <Text style={styles.eventDateText}>{item.date}</Text>
        </View>
        <View style={styles.eventOverlay}>
          <Text style={styles.eventMeta}>🕒 {item.time}  📍 {item.location}</Text>
          <Text style={styles.eventTitle}>{item.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logoText}>AMP NGO Connect</Text>
          <View style={styles.headerRight}>
             <Button title="Login" variant="outline" style={styles.loginBtn} onPress={() => navigation.navigate('Login')} />
             <Button title="Register" style={styles.registerBtn} onPress={() => navigation.navigate('Registration')} />
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <ImageBackground 
            source={{ uri: 'https://via.placeholder.com/800x400' }} 
            style={styles.heroBackground}
            imageStyle={{ borderRadius: 0, opacity: 0.7, backgroundColor: 'black' }}
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
             <View style={styles.statRow}>
                <Text style={styles.statText}>Start Donating</Text>
                <Text style={styles.statSubText}>Start giving today even if it's small.</Text>
             </View>
          </View>
        </View>

        {/* Partner With Us Section */}
        <View style={styles.section}>
          <Text style={styles.cursiveHeader}>Partner With Us</Text>
          <Text style={styles.sectionSubHeader}>Join our network of change makers and contribute to meaningful social impact initiatives</Text>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsScroll}>
            {partnerCards.map((card, index) => (
              <View key={index} style={[styles.partnerCard, { backgroundColor: card.bg }]}>
                <View style={styles.partnerHeader}>
                   <Text style={styles.cardIcon}>{card.icon}</Text>
                   <Text style={styles.cardTitle}>{card.title}</Text>
                </View>
                <Text style={styles.cardDesc}>{card.desc}</Text>
                <View style={styles.featureList}>
                  {card.features.map((feat, i) => (
                    <Text key={i} style={styles.featureItem}>✓ {feat}</Text>
                  ))}
                </View>
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
          <Text style={styles.sectionSubHeader}>Discover verified organizations making a significant impact</Text>
          <FlatList 
            data={MOCK_NGOS}
            renderItem={renderFeaturedNGO}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>

        {/* NGO of the Month & Upcoming Events */}
        <View style={styles.splitSection}>
           <View style={styles.ngoMonthContainer}>
              <Text style={styles.cursiveHeader}>NGO of the Month</Text>
              <Text style={styles.ngoMonthName}>{NGO_OF_THE_MONTH.name}</Text>
              {NGO_OF_THE_MONTH.stats.map((stat, i) => (
                 <Text key={i} style={styles.ngoStat}>✓ {stat}</Text>
              ))}
              <Button title="View Profile" style={styles.viewProfileBtn} onPress={() => navigation.navigate('NGODetails', { ngo: NGO_OF_THE_MONTH })} />
           </View>
           
           <View style={styles.eventsContainer}>
              <Text style={styles.cursiveHeader}>Upcoming Events</Text>
              <FlatList 
                data={UPCOMING_EVENTS}
                renderItem={renderEventCard}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.horizontalList}
              />
              <Button title="View All Events" variant="secondary" style={styles.viewAllEventsBtn} onPress={() => navigation.navigate('Events')} />
           </View>
        </View>

        {/* Resource Center Preview */}
        <View style={styles.section}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.cursiveHeader}>Resource Centre for NGOs</Text>
          </View>
          <Text style={styles.sectionSubHeader}>Empowering non-profits with knowledge, tools, and guidance.</Text>
          <View style={styles.resourceGrid}>
            <TouchableOpacity style={styles.resourceItem} onPress={() => navigation.navigate('ResourceCenter')}>
              <Text style={styles.resourceIcon}>⚖️</Text>
              <View>
                 <Text style={styles.resourceText}>Legal Corner</Text>
                 <Text style={styles.resourceSubText}>Access NGO laws & updates</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resourceItem} onPress={() => navigation.navigate('ResourceCenter')}>
              <Text style={styles.resourceIcon}>💻</Text>
              <View>
                 <Text style={styles.resourceText}>Webinars & Training</Text>
                 <Text style={styles.resourceSubText}>Enhance skills & workshops</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resourceItem} onPress={() => navigation.navigate('ResourceCenter')}>
              <Text style={styles.resourceIcon}>💰</Text>
              <View>
                 <Text style={styles.resourceText}>Funding Opportunities</Text>
                 <Text style={styles.resourceSubText}>Find grants & CSR calls</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.resourceItem} onPress={() => navigation.navigate('ResourceCenter')}>
              <Text style={styles.resourceIcon}>📜</Text>
              <View>
                 <Text style={styles.resourceText}>Government Circulars</Text>
                 <Text style={styles.resourceSubText}>Latest govt notifications</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Success Stories */}
        <View style={styles.darkSection}>
           <Text style={styles.cursiveHeaderLight}>Success Stories</Text>
           <Text style={styles.sectionHeaderLight}>What they are talking about AMP</Text>
           <View style={styles.testimonialCard}>
              <Image source={{ uri: SUCCESS_STORIES[0].image }} style={styles.testimonialImage} />
              <View style={styles.testimonialContent}>
                 <Text style={styles.testimonialName}>{SUCCESS_STORIES[0].name}</Text>
                 <Text style={styles.testimonialRole}>{SUCCESS_STORIES[0].role}</Text>
                 <Text style={styles.testimonialQuote}>"{SUCCESS_STORIES[0].quote}"</Text>
              </View>
           </View>
        </View>

        {/* Footer Stats */}
        <View style={styles.statsSection}>
           <View style={styles.statItem}>
              <Text style={styles.statNumber}>10k</Text>
              <Text style={styles.statLabel}>Verified NGOs</Text>
           </View>
           <View style={styles.statItem}>
              <Text style={styles.statNumber}>4k</Text>
              <Text style={styles.statLabel}>Beneficiaries Reached</Text>
           </View>
           <View style={styles.statItem}>
              <Text style={styles.statNumber}>20</Text>
              <Text style={styles.statLabel}>Upcoming Events</Text>
           </View>
           <View style={styles.statItem}>
              <Text style={styles.statNumber}>230</Text>
              <Text style={styles.statLabel}>Our Volunteers</Text>
           </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingBottom: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 8,
  },
  loginBtn: {
    minWidth: 70,
    height: 32,
    paddingHorizontal: 12,
  },
  registerBtn: {
    minWidth: 80,
    height: 32,
    paddingHorizontal: 12,
  },
  heroContainer: {
    height: 300,
  },
  heroBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroContent: {
    alignItems: 'center',
    padding: 20,
  },
  heroPreTitle: {
    color: '#FFD700',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 24,
  },
  heroButton: {
    minWidth: 180,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
  },
  section: {
    padding: 20,
    backgroundColor: colors.white,
    marginBottom: 10,
  },
  welcomeTitle: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 4,
    fontFamily: 'System', 
  },
  welcomeSubtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 12,
  },
  welcomeText: {
    fontSize: 14,
    color: colors.gray,
    lineHeight: 22,
    marginBottom: 20,
  },
  welcomeActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  discoverButton: {
    flex: 1,
    minWidth: 140,
    height: 40,
    paddingHorizontal: 16,
  },
  statRow: {
    flex: 1,
    minWidth: 150,
  },
  statText: {
    fontWeight: 'bold',
    color: colors.primary,
  },
  statSubText: {
    fontSize: 12,
    color: colors.gray,
  },
  cursiveHeader: {
    fontSize: 24,
    color: colors.primary,
    marginBottom: 8,
    fontFamily: 'System', // Placeholder for cursive font
    fontStyle: 'italic',
  },
  sectionSubHeader: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 20,
  },
  cardsScroll: {
    flexDirection: 'row',
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  partnerCard: {
    width: 280,
    padding: 24,
    borderRadius: 16,
    marginRight: 16,
  },
  partnerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIcon: {
    fontSize: 32,
    marginRight: 12,
    color: colors.white,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    flex: 1,
  },
  cardDesc: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 16,
  },
  featureList: {
    marginBottom: 20,
  },
  featureItem: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
    marginBottom: 4,
  },
  cardButton: {
    backgroundColor: colors.white,
    height: 40,
  },
  horizontalList: {
    paddingRight: 20,
  },
  featuredCard: {
    width: 260,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#eee',
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: 140,
    backgroundColor: colors.lightGray,
  },
  featuredContent: {
    padding: 16,
  },
  featuredHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  featuredCategory: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: 'bold',
  },
  verifiedBadge: {
    fontSize: 12,
    color: colors.success,
    fontWeight: 'bold',
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.text,
  },
  featuredDesc: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 12,
  },
  readMoreLink: {
    fontSize: 12,
    color: colors.text,
    fontWeight: '600',
  },
  splitSection: {
    backgroundColor: '#FFF8F8', // Light pinkish bg
    padding: 20,
  },
  ngoMonthContainer: {
    marginBottom: 30,
  },
  ngoMonthName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: colors.text,
  },
  ngoStat: {
    fontSize: 14,
    marginBottom: 8,
    color: colors.text,
  },
  viewProfileBtn: {
    minWidth: 140,
    marginTop: 12,
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
  },
  eventsContainer: {
    marginTop: 10,
  },
  eventCard: {
    width: 200,
    height: 260,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  eventImage: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 12,
  },
  eventDateBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  eventDateText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  eventOverlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 8,
    borderRadius: 8,
  },
  eventMeta: {
    color: '#FFD700',
    fontSize: 10,
    marginBottom: 4,
  },
  eventTitle: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  viewAllEventsBtn: {
    marginTop: 20,
    alignSelf: 'center',
    minWidth: 160,
    paddingHorizontal: 16,
  },
  sectionHeaderRow: {
    marginBottom: 8,
  },
  resourceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  resourceItem: {
    width: '48%',
    minWidth: 150,
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  resourceIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  resourceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  resourceSubText: {
    fontSize: 10,
    color: colors.gray,
  },
  darkSection: {
    backgroundColor: '#222',
    padding: 30,
  },
  cursiveHeaderLight: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 8,
    fontFamily: 'System',
    fontStyle: 'italic',
  },
  sectionHeaderLight: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 24,
  },
  testimonialCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  testimonialImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  testimonialContent: {
    flex: 1,
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  testimonialRole: {
    fontSize: 12,
    color: colors.gray,
    marginBottom: 8,
  },
  testimonialQuote: {
    fontSize: 12,
    color: colors.text,
    fontStyle: 'italic',
  },
  statsSection: {
    backgroundColor: '#A72525',
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  statItem: {
    alignItems: 'center',
    width: '45%',
    minWidth: 120,
    marginBottom: 20,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
  },
  statLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.8)',
    marginTop: 4,
  },
});
