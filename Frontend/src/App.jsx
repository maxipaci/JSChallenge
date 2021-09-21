import HomeScreen from './Screens/HomeScreen.jsx';
import test2 from './Screens/Screen2.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const linking = {
  prefixes: ["deeplink://"],
  config: {
    screens: {
      Home: {
        path: "Home",
      },
      pantalla2: {
        path: "pantalla2/"
      }
    }
  }
}

function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="pantalla2" component={test2} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
