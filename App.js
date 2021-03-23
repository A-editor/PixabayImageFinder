import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './screens/Search';
import Details from './screens/Details';
import Results from './screens/Results';
import { SearchContextProvider } from './SearchContext';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Search" component={Search} />
      <MainStack.Screen
        name="Results"
        component={Results}
        options={({ route }) => ({ title: route.params.search })}
      />
      <MainStack.Screen name="Details" component={Details} />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <SearchContextProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SearchContextProvider>
  );
};

export default App;
