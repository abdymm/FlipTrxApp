import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, OrderBy} from '@Constants';
import InputRadio from './InputRadio';

export default function CardOrderBy(props) {
  const {onChooseOrder, defaultItem} = props;
  const [selectedItem, setSelectedItem] = useState(OrderBy.URUTKAN);
  useEffect(() => {
    if (defaultItem) {
      setSelectedItem(defaultItem);
    }
  }, [defaultItem]);
  const onSelectItem = item => {
    setSelectedItem(item);
    onChooseOrder(item);
  };
  return (
    <View style={styles.container}>
      {Object.values(OrderBy).map(orderItem => {
        return (
          <InputRadio
            key={orderItem}
            label={orderItem}
            style={styles.radio}
            isChecked={orderItem === selectedItem}
            onPress={() => {
              onSelectItem(orderItem);
            }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
  },
});
