import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '@Constants';
import RNModal from 'react-native-modal';

export default function Modal(props) {
  const {onToggle, children} = props;
  return (
    <RNModal onBackdropPress={onToggle} {...props}>
      <View style={styles.container}>{children}</View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    paddingHorizontal: 28,
    paddingVertical: 24,
    borderRadius: 4,
  },
});
