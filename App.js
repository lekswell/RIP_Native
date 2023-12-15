import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsScreen from './screens/EventsScreen';
import EventScreen from './screens/EventScreen';
import { store } from './store';
import { Provider } from 'react-redux';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

const LogoTitle = () => (
  <Image
    style={{ width: 40, height: 40, marginRight: 10 }}
    source={require('./assets/logo.png')}
  />
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#747474', // Цвет навигационной шапки
            },
            headerTintColor: 'white', // Цвет текста в навигационной шапке
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center', // Align title to the center
          }}
        >
          <Stack.Screen
            name='Музей МГТУ им. Н.Э.Баумана'
            component={EventsScreen}
            options={{
              headerLeft: () => <LogoTitle />,
            }}
          />
          <Stack.Screen
            name='Подробнее'
            component={EventScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
