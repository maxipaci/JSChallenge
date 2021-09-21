import HomeScreen from './Screens/HomeScreen.jsx';
import CreateOperationScreen from './Screens/CreateOperationScreen.jsx';
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
        path: "Operation"
      }
    }
  }
}

function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Operation" component={CreateOperationScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
