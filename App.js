import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import GetAppointmentScreen from './screens/GetAppointmentScreen';
import DeleteAppointmentScreen from './screens/DeleteAppointmentScreen';
import CreateAppointmentScreen from './screens/CreateAppointmentScreen';
const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()



export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <BottomTab.Navigator>

          <BottomTab.Screen
            name="All Appointments"
            component={GetAppointmentScreen}
            options={{

              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="home" size={size} color={color} />
              }
            }}
          />

          <BottomTab.Screen
            name="Delete Appointment"
            component={DeleteAppointmentScreen}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="calendar" size={size} color={color} />
              }
            }}
          />
          <BottomTab.Screen
            name="Create Appointment"
            component={CreateAppointmentScreen}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="calendar" size={size} color={color} />
              }
            }}
          />

        </BottomTab.Navigator>
      </NavigationContainer>
    </>


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
