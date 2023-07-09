import PublicRouter from "./features/routers/PublicRouter";
import PrivateRouter from "./features/routers/PrivateRouter";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import useUserStore from "./features/auth/useUserStore";


const MainRouter = () => {

    const Stack = createStackNavigator();

    const { user } = useUserStore();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {
                    user === null &&
                    <Stack.Screen name="PublicRouter"
                        component={PublicRouter}
                    />

                }
                {
                    user !== null &&
                    <Stack.Screen name="PrivateRouter"
                        component={PrivateRouter}
                    />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRouter;