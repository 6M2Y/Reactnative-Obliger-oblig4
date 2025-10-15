import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import BookTableScreen from './src/screens/BookTableScreen';
import LocationScreen from './src/screens/LocationScreen';
import { MenuProvider } from 'react-native-popup-menu';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <stack.Navigator initialRouteName="Home">
          <stack.Screen name="Home" component={HomeScreen} />
          <stack.Screen name="Menu" component={MenuScreen} />
          <stack.Screen name="BookTable" component={BookTableScreen} />
          <stack.Screen name="Location" component={LocationScreen} />
        </stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
