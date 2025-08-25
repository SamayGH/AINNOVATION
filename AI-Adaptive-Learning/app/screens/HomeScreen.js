import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>AI Adaptive Learning</Text>
      <Text style={styles.subtitle}>Rural Youth • Offline-first • Azure-powered</Text>
      <Text style={styles.body}>
        This is a minimal React Native skeleton. Add screens for Diagnostics, Lesson, and Progress.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 4 },
  subtitle: { fontSize: 14, opacity: 0.7, marginBottom: 12 },
  body: { fontSize: 14, lineHeight: 20 },
});
