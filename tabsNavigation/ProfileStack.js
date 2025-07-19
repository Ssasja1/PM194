import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './screens/profile';
import Detalle from './screens/detalle'; 

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Detalle" component={Detalle} />
    </Stack.Navigator>
  );
}
