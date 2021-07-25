import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '@Constants';
import Icon from 'react-native-vector-icons/Octicons';

export default function InputSearch(props) {
  const {containerStyle, style} = props;

  return (
    <View style={[styles.searchContainer, containerStyle]}>
      <Icon
        name={'search'}
        color={Colors.placeholder}
        size={24}
        style={styles.icon}
      />
      <TextInput
        style={[styles.searchInput, style]}
        {...props}
        placeholderTextColor={Colors.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 8,
    borderRadius: 4,
  },
  icon: {
    position: 'absolute',
    zIndex: 2,
    top: 20,
    left: 10,
  },
  searchInput: {
    backgroundColor: Colors.light,
    color: Colors.dark,
    fontSize: 16,
    paddingVertical: 18,
    paddingTop: 22,
    paddingHorizontal: 8,
    paddingLeft: 42,
  },
});
