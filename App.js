import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import SearchResultScreen from './SearchResultScreen';

// npm install @react-navigation/native @react-navigation/stack
// npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-masked-view/masked-view

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={ {
      // <Stack.Navigator initialRouteName='SignIn' screenOptions={ {
        headerStyle: {backgroundColor: 'orangered'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>

        <Stack.Screen component={SignInScreen} name="SignIn"></Stack.Screen>
        <Stack.Screen component={SignUpScreen} name="SignUp"></Stack.Screen>
        
        {/* <Stack.Screen component={HomeScreen} name="Home" 
        options={ ({route}) => ({headerRight: () => (
          <Button title="LogOut" color="orangered" onPress = { () => alert("LogOut")} />
        )}
        )}> */}

        <Stack.Screen component={HomeScreen} name="Home" 
        initialParams={ {username: "JK"} }
        options={ ({route}) => ({headerRight: () => (
          <Button title="LogOut" color="orangered" onPress = { () => alert("LogOut")} />
        )},
        {username: route.params.username}
        )}>

        </Stack.Screen>
        <Stack.Screen component={SearchResultScreen} name="SearchResult"></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
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
