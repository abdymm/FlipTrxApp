import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screens from '../../common/constants/Screens';

const Stack = createStackNavigator();
// TODO: move screen name and component into constants

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator animation="fade">
        <Stack.Screen
          name={Screens.Transaction.name}
          component={Screens.Transaction.component}
        />
        <Stack.Screen
          name={Screens.TransactionDetail.name}
          component={Screens.TransactionDetail.component}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
