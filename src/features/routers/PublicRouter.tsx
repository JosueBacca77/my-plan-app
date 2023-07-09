
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../auth/login/Login";


export default function PublicRouter() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login"
                component={Login} 
            />
        </Stack.Navigator>
    )
}