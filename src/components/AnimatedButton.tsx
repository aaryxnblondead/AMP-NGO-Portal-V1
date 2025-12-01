import React from 'react';
import { Pressable, ViewStyle } from 'react-native';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
}

export const AnimatedButton = ({ children, onPress, style }: AnimatedButtonProps) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [style, { opacity: pressed ? 0.8 : 1 }]}>
      {children}
    </Pressable>
  );
};
