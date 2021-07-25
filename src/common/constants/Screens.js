import TransactionScreen from '@Transaction/screens';
import TransactionDetailScreen from '@Transaction/screens/Detail';
const screens = {
  Transaction: {name: 'Transaction', component: TransactionScreen},
  TransactionDetail: {
    name: 'TransactionDetail',
    component: TransactionDetailScreen,
  },
};
export default screens;
