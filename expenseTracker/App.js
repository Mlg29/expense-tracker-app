import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from "./screens/RecentExpenses"
import ManageExpense from "./screens/ManageExpense"
import { GlobalStyles } from './constants/styles';
import { Ionicons } from "@expo/vector-icons"
import IconButton from './components/UI/IconButton';
import { Provider } from 'react-redux'
import { store } from "./store/store"

const Stack = createNativeStackNavigator()
const BottomStack = createBottomTabNavigator()




const ExpenseOverview = () => {
  return (
    <BottomStack.Navigator screenOptions={({ navigation }) => ({
      headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      headerTintColor: 'white',
      tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({ tintColor }) => {
        return <IconButton icon="add" size={24} color={tintColor} onPress={() => navigation.navigate("ManageExpense")} />
      }
    })}>
      <BottomStack.Screen name="RecentExpenses" component={RecentExpenses} options={{
        title: 'Recent Expenses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name='hourglass' color={color} size={size} />
        }
      }
      } />
      <BottomStack.Screen name="AllExpenses" component={AllExpenses} options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name='calendar' color={color} size={size} />
        }
      }} />
    </BottomStack.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: 'white'
          }}>
            <Stack.Screen name='ExpenseOverview' component={ExpenseOverview} options={{ headerShown: false }} />
            <Stack.Screen name='ManageExpense' component={ManageExpense} options={{
              presentation: 'modal'
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
