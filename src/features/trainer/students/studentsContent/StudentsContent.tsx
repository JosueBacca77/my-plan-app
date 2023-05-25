import StudentsList from "./studentsList/StudentsList";
import { createStackNavigator } from '@react-navigation/stack';
import Student from "./student/Student";

export default function StudentsContent() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Students" component={StudentsList} />
            <Stack.Screen name="Student" component={Student} />
        </Stack.Navigator>
    )
}