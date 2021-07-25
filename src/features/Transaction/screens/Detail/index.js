import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {Text, LabelValueItem, Button} from '@Components';
import {Colors, Status} from '@Constants';
import {Date} from '@Utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-clipboard/clipboard';

export default function TransactionDetail(props) {
  const [showDetailContent, setShowDetailContent] = useState(true);
  const {
    route: {
      params: {item},
    },
  } = props;
  let baseColor =
    item.status === Status.PENDING ? Colors.warning : Colors.success;
  const detailContent = [
    {
      label: item?.beneficiary_name,
      value: item?.account_number,
    },
    {
      label: 'NOMINAL',
      value: item?.amount,
    },
    {
      label: 'BERITA TRANSFER',
      value: item?.remark,
    },
    {
      label: 'KODE UNIK',
      value: item?.unique_code,
    },
    {
      label: 'WAKTU DIBUAT',
      value: Date.format(item?.created_at),
    },
  ];
  const toggleContent = () => {
    setShowDetailContent(!showDetailContent);
  };

  const copyToClipboard = () => {
    Clipboard.setString(item?.id);
    // this would be better if use toast
    alert('ID transaksi tercopy, silahkan paste ditempat yang anda inginkan');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.idSection}>
          <Text b h4>
            ID TRANSAKSI: #{item?.id}
          </Text>
          <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
            <Icon
              name={'content-copy'}
              color={baseColor}
              size={24}
              style={styles.iconMarker}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.detailSection}>
          <View style={styles.detailTitleContainer}>
            <Text b h4>
              DETAIL TRANSAKSI
            </Text>
            <Button mode={'text'} color={baseColor} onPress={toggleContent}>
              Tutup
            </Button>
          </View>
          {showDetailContent && (
            <View style={styles.detailContainer}>
              <View style={styles.detailContentTitle}>
                <Text h4 b>
                  {item?.sender_bank.toUpperCase()} →{' '}
                  {item?.beneficiary_bank.toUpperCase()}
                </Text>
              </View>
              <View style={styles.detailContent}>
                <FlatList
                  data={detailContent}
                  numColumns={2}
                  renderItem={({item, index}) => (
                    <LabelValueItem
                      style={[
                        styles.detailItem,
                        {flex: index % 2 === 1 ? 0.4 : 0.6},
                      ]}
                      label={item.label}
                      value={item.value}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
