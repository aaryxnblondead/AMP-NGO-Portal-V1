import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

export const AboutScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backLink}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.screenTitle}>About AMP NGO Connect</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/800x400' }} 
          style={styles.heroImage} 
        />
        
        <View style={styles.section}>
          <Text style={styles.heading}>Our Mission</Text>
          <Text style={styles.text}>
            Association of Muslim Professionals (AMP) NGO Connect aims to create an online platform that fosters collaboration and information exchange within the non-profit sector. We believe that by working together, we can amplify our impact and create lasting change in society.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>What We Do</Text>
          <Text style={styles.text}>
            • <Text style={styles.bold}>Connect:</Text> We bridge the gap between NGOs, volunteers, and donors.{'\n'}
            • <Text style={styles.bold}>Empower:</Text> We provide resources, training, and legal guidance to NGOs.{'\n'}
            • <Text style={styles.bold}>Collaborate:</Text> We facilitate joint projects to tackle large-scale social issues.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Join the Movement</Text>
          <Text style={styles.text}>
            Whether you are an established NGO, a budding social entrepreneur, or an individual looking to make a difference, there is a place for you here.
          </Text>
          <TouchableOpacity 
            style={styles.ctaButton}
            onPress={() => navigation.navigate('Registration')}
          >
            <Text style={styles.ctaText}>Register Your NGO Today</Text>
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
  content: {
    paddingBottom: 40,
  },
  heroImage: {
    width: '100%',
    height: 200,
    backgroundColor: colors.lightGray,
  },
  section: {
    padding: 20,
    backgroundColor: colors.white,
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.text,
  },
  bold: {
    fontWeight: 'bold',
  },
  ctaButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  ctaText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
