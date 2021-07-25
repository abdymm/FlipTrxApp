import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '@Components';

export default function LabelValueItem({label, value, style}) {
  return (
    <View style={[styles.container, style]}>
      <Text b h5 style={styles.label}>
        {label}
      </Text>
      <Text h5>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 4,
  },
});
