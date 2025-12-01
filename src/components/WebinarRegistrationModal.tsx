import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { colors } from '../theme/colors';
import { Input } from './Input';
import { Button } from './Button';

interface WebinarRegistrationModalProps {
  visible: boolean;
  onClose: () => void;
}

export const WebinarRegistrationModal = ({ visible, onClose }: WebinarRegistrationModalProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: 'AMP',
    designation: 'AMP',
    city: 'Mumbai',
    webinar: 'Digital Fund Webinar',
    source: 'Email',
    agreed: false,
  });

  const handleSubmit = () => {
    // TODO: Implement submission logic
    console.log('Webinar Registration:', formData);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Register for the Webinar</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>
          
          <Text style={styles.description}>
            Join us for an engaging and insightful session on Digital Fund. Learn from experts...
          </Text>

          <ScrollView style={styles.form}>
            <Input 
              label="Full Name *" 
              value={formData.fullName}
              onChangeText={(text) => setFormData({...formData, fullName: text})}
            />
            <Input 
              label="Email Address *" 
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
            />
            <Input 
              label="Phone Number *" 
              value={formData.phone}
              onChangeText={(text) => setFormData({...formData, phone: text})}
            />
            
            {/* Dropdowns would go here - using Inputs for now as placeholders */}
            <Input label="Organization / Institution Name" value={formData.organization} editable={false} />
            <Input label="Designation / Role" value={formData.designation} editable={false} />
            <Input label="City" value={formData.city} editable={false} />
            <Input label="Webinar" value={formData.webinar} editable={false} />
            <Input label="How did you hear about webinar?" value={formData.source} editable={false} />

            <TouchableOpacity 
              style={styles.checkboxRow} 
              onPress={() => setFormData({...formData, agreed: !formData.agreed})}
            >
              <View style={[styles.checkbox, formData.agreed && styles.checkboxChecked]} />
              <Text style={styles.checkboxText}>I agree to receive updates and reminders about this webinar.</Text>
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.footer}>
            <Button title="Cancel" variant="outline" onPress={onClose} style={styles.footerButton} />
            <Button title="Register Now" onPress={handleSubmit} style={styles.footerButton} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 12,
    maxHeight: '90%',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  closeButton: {
    fontSize: 24,
    color: colors.gray,
  },
  description: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 20,
    lineHeight: 20,
  },
  form: {
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 4,
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkboxText: {
    fontSize: 12,
    color: colors.text,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  footerButton: {
    width: 120,
  },
});
