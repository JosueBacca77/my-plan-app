import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from "react";
import Student from './student/Student';
import { student1, student10, student11, student2, student3, student4, student5, student6, student7, student8, student9 } from '../../../data';
import useStudentsStore from './useStudentsStore';
import StudentsList from './studentsList/StudentsList';


export default function Students() {

    const Stack = createStackNavigator();
    const { setStudents } = useStudentsStore();

    useEffect(() => {
        const students = [
            student1,
            student2,
            student3,
            student4,
            student5,
            student6,
            student7,
            student8,
            student9,
            student10,
            student11
        ]
        setStudents(students);
    }, [setStudents]);

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Students list"
                component={StudentsList}
            />
            <Stack.Screen name="Student"
                component={Student}
            />
        </Stack.Navigator>
    )
}