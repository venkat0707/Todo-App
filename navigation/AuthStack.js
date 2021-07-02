import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,getFocusedRouteNameFromRoute, DrawerActions, } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import { View, StyleSheet,TextInput,ScrollView,Button } from 'react-native';
//import handleSignOut from '../screens/Signout'


  

const Stack = createStackNavigator();
 export default function AuthStack() {
  

  return (
    
    <Stack.Navigator initialRouteName={WelcomeScreen}>
    
         
      <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{
                animationTypeForReplace: 'pop',
              }}/>
      
             <Stack.Screen name="Login" component={LoginScreen} />
            
              	
              
             
             <Stack.Screen name="Register" component={RegisterScreen} />
            
             
          
                 <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
               
    
      
    </Stack.Navigator>
    
  );
};
