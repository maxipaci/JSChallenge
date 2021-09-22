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

const MyTheme = {
  colors: {
    background: '#282c34'
  },
};

const config = {
  animation: 'timing',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function App() {
  return (
    <NavigationContainer linking={linking} theme={MyTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, animationEnabled: true, transitionSpec:{open:config, close: config}}} />
        <Stack.Screen name="Operation" component={CreateOperationScreen} options={{ headerShown: false, animationEnabled: true, transitionSpec:{open:config, close: config}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
