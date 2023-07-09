import TrainerHome from "../trainer/TrainerHome";
import StudentHome from "../student/StudentHome";
import useUserStore from "../auth/useUserStore";
import { createStackNavigator } from "@react-navigation/stack";


export default function PrivateRouter() {

    const { user } = useUserStore();

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {
                user
                    ?
                    <Stack.Screen name="TrainerHome"
                        component={TrainerHome}
                    />
                    :

                    <Stack.Screen name="StudentHome"
                        component={StudentHome}
                    />
            }
        </Stack.Navigator>
    )
}