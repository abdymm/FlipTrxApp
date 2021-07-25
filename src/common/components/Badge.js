import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '@Constants';

export default function Badge(props) {
  const {
    children,
    color = Colors.success,
    mode = 'contain',
    style,
    containerStyle,
    textStyle: propsTextStyle,
  } = props;
  let textStyle = {color: '#fff'};
  let modeStyle = {backgroundColor: color};
  switch (mode) {
    case 'outlined':
      modeStyle = {
        backgroundColor: 'transparent',
        borderColor: color,
        borderWidth: 2,
      };
      textStyle = {
        color: '#000',
      };
      break;
    case 'text':
      modeStyle = {
        backgroundColor: 'transparent',
      };
      textStyle = {
        color,
      };
      break;

    default:
      break;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.content, modeStyle, style]}>
        <Text style={[styles.text, textStyle, propsTextStyle]}>{children}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 7,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
