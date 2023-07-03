import PublicRouter from "./features/routers/PublicRouter";
import PrivateRouter from "./features/routers/PrivateRouter";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainRouter = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="PublicRouter"
                    component={PublicRouter}
                />
                <Stack.Screen name="PrivateRouter"
                    component={PrivateRouter}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRouter;