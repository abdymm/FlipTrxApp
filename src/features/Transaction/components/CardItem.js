import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Badge, Text} from '@Components';
import {Colors, Status} from '@Constants';
import Icon from 'react-native-vector-icons/Octicons';
import {Date, Number} from '@Utils';

const CardItem = ({item, onPress}) => {
  let baseColor = Colors.success;
  let badgeMode = 'contained';
  let badgeText = 'Berhasil'; //this can use I18n, dont implement it here for now
  switch (item.status) {
    case Status.PENDING:
      baseColor = Colors.warning;
      badgeMode = 'outlined';
      badgeText = 'Pengecekan';
      break;
    //for other cases/status
    default:
      break;
  }
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {borderLeftColor: baseColor, borderLeftWidth: 8},
      ]}
      onPress={onPress}>
      <View style={styles.content}>
        <Text h5 b>
          {item?.sender_bank.toUpperCase()} →{' '}
          {item?.beneficiary_bank.toUpperCase()}
        </Text>
        <Text style={styles.textName}>
          {item?.beneficiary_name.toUpperCase()}
        </Text>
        <View style={styles.amountContainer}>
          <Text>{Number.currencyFormat(item?.amount)}</Text>
          <Icon
            name={'primitive-dot'}
            color={Colors.dark}
            size={14}
            style={styles.iconDot}
          />
          <Text>{Date.format(item?.completed_at)}</Text>
        </View>
      </View>
      <View style={styles.action}>
        <Badge onPress={onPress} color={baseColor} mode={badgeMode}>
          {badgeText}
        </Badge>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 4,
    backgroundColor: Colors.light,
    padding: 16,
    borderRadius: 8,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDot: {
    marginHorizontal: 4,
  },
  textName: {
    marginVertical: 4,
  },
  content: {
    flex: 0.65,
  },
  action: {
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
});

export default CardItem;
