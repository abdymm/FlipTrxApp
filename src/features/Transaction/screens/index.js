import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, View} from 'react-native';
import {connect} from 'react-redux';
import CardItem from '@Transaction/components/CardItem';
import {InputSearch, Button, CardOrderBy, Modal} from '@Components';
import {Screens, Colors, OrderBy} from '@Constants';
import {Array} from '@Utils';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';

const Transaction = props => {
  const {navigation, transactionState, fetchTransaction} = props;
  const {data: transactionPayload, isFetching, error} = transactionState;
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [immutableTransactions, setImmutableTransactions] = useState([]);
  useEffect(() => {
    fetchTransaction();
  }, [fetchTransaction]);
  useEffect(() => {
    if (transactionPayload) {
      const transactionsArr = Object.values(transactionPayload);
      setIsFirstLoad(false);
      setTransactions(transactionsArr);
      setImmutableTransactions(transactionsArr);
    }
  }, [transactionPayload]);
  const onRefresh = () => {
    fetchTransaction();
  };
  const onItemPress = item => {
    navigation.navigate(Screens.TransactionDetail.name, {item});
  };

  // search & filter things
  const [showOrderByModal, setShowOrderByModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [orderItem, setOrderItem] = useState(OrderBy.URUTKAN);
  const onSearch = query => {
    query = query.toLowerCase();
    setSearchQuery(query);
    console.log(transactions);
    setTransactions(
      immutableTransactions.filter(
        transaction =>
          transaction.beneficiary_name.toLowerCase().includes(query) ||
          transaction.beneficiary_bank.toLowerCase().includes(query) ||
          transaction.amount.toString().includes(query) ||
          transaction.sender_bank.toLowerCase().includes(query),
      ),
    );
  };
  const toggleModal = () => {
    setShowOrderByModal(!showOrderByModal);
  };
  const onShort = item => {
    let sortBy = '';
    let sortType = '';
    switch (item) {
      case OrderBy.AZ:
        sortBy = 'beneficiary_name';
        sortType = 'ASC';
        break;

      case OrderBy.ZA:
        sortBy = 'beneficiary_name';
        sortType = 'DESC';
        break;

      case OrderBy.NewestDate:
        sortBy = 'created_at';
        sortType = 'DESC';
        break;

      case OrderBy.OldestDate:
        sortBy = 'created_at';
        sortType = 'ASC';
        break;

      default:
        break;
    }
    const sortedTransactions = Array.sort(transactions, sortBy, sortType);
    setOrderItem(item);
    setTransactions(
      item === OrderBy.URUTKAN ? immutableTransactions : sortedTransactions,
    );
    toggleModal();
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={showOrderByModal} onBackdropPress={toggleModal}>
        <CardOrderBy
          defaultItem={orderItem}
          onChooseOrder={item => {
            onShort(item);
          }}
        />
      </Modal>
      <View style={styles.filterContainer}>
        <InputSearch
          onChangeText={onSearch}
          value={searchQuery}
          placeholder="Cari nama, bank, atau nominal"
          containerStyle={styles.searchContainer}
        />
        <View style={styles.filterButtonContainer}>
          <Button
            mode="text"
            color={Colors.warning}
            containerStyle={styles.filterButton}
            onPress={toggleModal}
            icon={
              <Icon name={'chevron-down'} color={Colors.warning} size={32} />
            }>
            {orderItem}
          </Button>
        </View>
      </View>
      {isFetching && isFirstLoad ? (
        <ActivityIndicator />
      ) : (
        <>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={transactions}
            renderItem={({item}) => (
              <CardItem
                item={item}
                onPress={() => {
                  onItemPress(item);
                }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )}
    </View>
  );
};

const mapState = state => ({
  transactionState: state.TransactionModel,
});
const mapDispatch = dispatch => ({
  fetchTransaction: body => dispatch.TransactionModel.fetch(body),
});
export default connect(mapState, mapDispatch)(Transaction);
