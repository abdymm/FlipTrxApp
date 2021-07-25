import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '@Components';
import {Colors} from '@Constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function InputRadio(props) {
  const {isChecked, label, containerStyle, onPress} = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Icon
        name={`radio-button-${isChecked ? 'on' : 'off'}`}
        color={Colors.warning}
        size={24}
        style={styles.icon}
      />
      <Text h5>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 16,
  },
  icon: {
    marginRight: 8,
  },
});
