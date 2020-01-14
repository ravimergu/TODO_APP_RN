import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './scr/screens/IndexScreen';
import { Provider } from './scr/context/BolgContext';
import ShowScreen from './scr/screens/ShowScreen';
import CreateScreen from './scr/screens/CreateScreen';

const stackNavigator = createStackNavigator(
  {
    index: IndexScreen,
    show: ShowScreen,
    create: CreateScreen
  },
  {
    initialRouteName: 'index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
)

const App = createAppContainer(stackNavigator);

export default () => {
  return <Provider>
    <App />
  </Provider>;
}
