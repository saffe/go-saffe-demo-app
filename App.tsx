import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Capture from "./pages/Capture";
import Home from "./pages/Home";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Demo' }} />
        <Stack.Screen name="Capture" component={Capture} options={{ title: 'Webview' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
