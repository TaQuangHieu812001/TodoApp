import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../screen/Login/LoginScreen";
import TodoListScreen from "../screen/Todo/TodoScreen";
import UserProfileScreen from "../screen/Information/UserProfileScreen";
const Stack = createNativeStackNavigator()

const Navigation =()=>{
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name ='LoginScreen'
                component={LoginScreen}
            />
               <Stack.Screen
                name ='TodoListScreen'
                component={TodoListScreen}
            />
               <Stack.Screen
                name ='UserProfileScreen'
                component={UserProfileScreen}
            />
        </Stack.Navigator>
    )
}
export default Navigation