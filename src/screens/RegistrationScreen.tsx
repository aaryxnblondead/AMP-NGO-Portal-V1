import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

const { width } = Dimensions.get('window');

export const RegistrationScreen = ({ navigation }: any) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleRegister = () => {
    console.log('Registering:', formData);
    navigation.navigate('MainApp');
  };

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStep1 = () => (
    <View style={styles.stepContainer}>
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
      
      <Button 
        title="Next" 
        onPress={nextStep}
        style={styles.button}
      />
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.stepContainer}>
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

      <View style={styles.buttonRow}>
        <Button 
          title="Back" 
          variant="outline"
          onPress={prevStep}
          style={styles.halfButton}
        />
        <Button 
          title="Register" 
          onPress={handleRegister}
          style={styles.halfButton}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.navHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('MainApp')}>
          <Text style={styles.backLink}>← Back to Home</Text>
        </TouchableOpacity>
      </View>
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.header}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Step {step} of 2</Text>
            
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: step === 1 ? '50%' : '100%' }]} />
            </View>
          </View>

          <View style={styles.form}>
            {step === 1 ? renderStep1() : renderStep2()}

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
  navHeader: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  backLink: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 8,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
  },
  header: {
    marginTop: 24,
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.primary,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 18,
    color: colors.gray,
    marginBottom: 24,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.lightGray,
    borderRadius: 3,
    width: '100%',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  form: {
    width: '100%',
  },
  stepContainer: {
    width: '100%',
  },
  button: {
    marginTop: 32,
    width: '100%',
    height: 56,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
  halfButton: {
    width: '48%',
    height: 56,
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
