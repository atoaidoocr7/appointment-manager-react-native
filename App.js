import { StyleSheet, Text, View } from 'react-native';
import Request from './components/Request';
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageAppointmentsScreen from './screens/ManageAppointmentsScreen';

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Request />
//     </View>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>

        <BottomTab.Screen
          name="Home"
          component={Request}
          options={{
            tapBarLabel: 'Add Game',
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="home" size={size} color={color} />
            }
          }}
        />

        <BottomTab.Screen
          name="Manage Appointments"
          component={ManageAppointmentsScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="calendar" size={size} color={color} />
            }
          }}
        />

      </BottomTab.Navigator>
    </NavigationContainer>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
