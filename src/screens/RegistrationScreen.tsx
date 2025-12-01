import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const RegistrationScreen = ({ navigation }: any) => {
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = () => {
    // TODO: Implement registration logic
    console.log('Registering:', formData);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join the AMP NGO Portal today</Text>
          </View>

          <View style={styles.form}>
            <Input
              label="Organization Name"
              placeholder="Enter organization name"
              value={formData.orgName}
              onChangeText={(text) => setFormData({ ...formData, orgName: text })}
            />
            
            <Input
              label="Email Address"
              placeholder="Enter email address"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />

            <Input
              label="Phone Number"
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              value={formData.phone}
              onChangeText={(text) => setFormData({ ...formData, phone: text })}
            />

            <Input
              label="Password"
              placeholder="Enter password"
              secureTextEntry
              value={formData.password}
              onChangeText={(text) => setFormData({ ...formData, password: text })}
            />

            <Input
              label="Confirm Password"
              placeholder="Confirm password"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
            />

            <Button 
              title="Register" 
              onPress={handleRegister}
              style={styles.button}
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <Text 
                style={styles.link}
                onPress={() => navigation.navigate('Login')}
              >
                Login
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray,
  },
  form: {
    width: '100%',
  },
  button: {
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: colors.text,
    fontSize: 14,
  },
  link: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
